import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createComment, fetchPost } from "../api/client";
import BookmarkButton from "../components/BookmarkButton";
import CommentSection from "../components/CommentSection";
import CountPill from "../components/CountPill";
import { CardSkeleton, ErrorView } from "../components/Feedback";
import { usePostStore } from "../store/postStore";
import type { Comment } from "../types";
import { formatRelativeTime } from "../utils/time";

type Status = "loading" | "ready" | "error";

export default function PostDetail() {
  const { id } = useParams();
  const postId = Number(id);
  // 목록에서 넘어왔다면 스토어에 이미 있어서 응답을 기다리지 않고 바로 보임
  const post = usePostStore((s) => s.byId[postId]);
  const { save, patch, toggleLike, toggleSave } = usePostStore.getState();
  // 댓글 수 pill과 댓글 목록이 같은 값을 봐야 해서 State를 CommentSection이 아닌 부모(여기)에 둠
  const [comments, setComments] = useState<Comment[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    let cancelled = false; // 1번 글 → 2번 글로 바로 넘어갔을 때 늦게 온 1번 응답 무시
    setStatus("loading");

    fetchPost(postId)
      .then(({ comments, ...rest }) => {
        if (cancelled) return;
        save([rest]);
        setComments(comments);
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [postId, retry, save]);

  const addComment = (text: string) =>
    createComment(postId, text).then((comment) => {
      setComments((prev) => [...prev, comment]);
      patch(postId, { commentCount: usePostStore.getState().byId[postId].commentCount + 1 });
    });

  return (
    <>
      <header className="border-b border-border bg-surface px-5 py-4">
        <Link to="/" className="text-title text-text">
          ←
        </Link>
      </header>
      <main className="flex flex-col gap-3 px-4 pt-4 pb-6">
        {status === "error" && (
          <ErrorView message="게시글을 불러오지 못했어요." onRetry={() => setRetry((n) => n + 1)} />
        )}
        {status !== "error" && !post && <CardSkeleton />}
        {status !== "error" && post && (
          <>
            <div className="flex items-center gap-2.5">
              <div className="size-9 rounded-full bg-border" />
              <div className="flex flex-col gap-0.5">
                <span className="text-body font-bold text-text">{post.author}</span>
                <span className="text-caption text-text-secondary">
                  {post.tag} · {formatRelativeTime(post.createdAt)}
                </span>
              </div>
            </div>
            <h2 className="text-heading font-bold text-text">{post.title}</h2>
            <p className="text-body leading-[1.65] text-text-body">{post.body}</p>
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <CountPill active={post.liked} onClick={() => toggleLike(postId)}>
                  {post.liked ? "♥" : "♡"} {post.likeCount}
                </CountPill>
                <CountPill>댓글 {post.commentCount}</CountPill>
              </div>
              <BookmarkButton isBookmarked={post.saved} onToggle={() => toggleSave(postId)} />
            </div>
            {status === "ready" ? (
              <CommentSection comments={comments} onSubmit={addComment} />
            ) : (
              <p className="py-6 text-center text-caption text-text-secondary">댓글 불러오는 중...</p>
            )}
          </>
        )}
      </main>
    </>
  );
}
