import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookmarkButton from "../components/BookmarkButton";
import CommentSection from "../components/CommentSection";
import CountPill from "../components/CountPill";
import { posts } from "../data/posts";
import { useToggle } from "../hooks/useToggle";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));
  const [isLiked, toggleLike] = useToggle(false);
  const [isBookmarked, toggleBookmark] = useToggle(post?.saved ?? false);
  // 댓글 수 pill과 댓글 목록이 같은 값을 봐야 해서 State를 CommentSection이 아닌 부모(여기)에 둠
  const [comments, setComments] = useState(post?.comments ?? []);

  if (!post) {
    return <p className="p-10 text-center text-body text-text-secondary">게시글을 찾을 수 없어요.</p>;
  }

  const addComment = (text: string) =>
    setComments([...comments, { id: Date.now(), author: "나", time: "방금 전", text }]);

  return (
    <>
      <header className="border-b border-border bg-surface px-5 py-4">
        <Link to="/" className="text-title text-text">
          ←
        </Link>
      </header>
      <main className="flex flex-col gap-3 px-4 pt-4 pb-6">
        <div className="flex items-center gap-2.5">
          <div className="size-9 rounded-full bg-border" />
          <div className="flex flex-col gap-0.5">
            <span className="text-body font-bold text-text">{post.author}</span>
            <span className="text-caption text-text-secondary">
              {post.category} · {post.time}
            </span>
          </div>
        </div>
        <h2 className="text-heading font-bold text-text">{post.title}</h2>
        <p className="text-body leading-[1.65] text-text-body">{post.body}</p>
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <CountPill active={isLiked} onClick={toggleLike}>
              {isLiked ? "♥" : "♡"} {post.likes + (isLiked ? 1 : 0)}
            </CountPill>
            <CountPill>댓글 {comments.length}</CountPill>
          </div>
          <BookmarkButton isBookmarked={isBookmarked} onToggle={toggleBookmark} />
        </div>
        <CommentSection comments={comments} onAdd={addComment} />
      </main>
    </>
  );
}
