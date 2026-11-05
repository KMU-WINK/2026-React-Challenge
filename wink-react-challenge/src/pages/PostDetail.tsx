import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  fetchPost,
  toggleLike,
  toggleBookmark,
  createComment,
} from "../api/client";
import type { PostWithComments } from "../types";
import { formatRelativeTime } from "../utils/time";
import BookmarkButton from "../components/BookmarkButton";
import CommentSection from "../components/CommentSection";

type Status = "loading" | "ready" | "error";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<PostWithComments | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!id) return;
    fetchPost(id)
      .then((data) => {
        setPost(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, [id]);

  const handleToggleLike = () => {
    if (!post) return;
    toggleLike(post.id).then(({ liked, likeCount }) => {
      setPost((prev) => (prev ? { ...prev, liked, likeCount } : prev));
    });
  };

  const handleToggleSave = () => {
    if (!post) return;
    toggleBookmark(post.id).then(({ saved }) => {
      setPost((prev) => (prev ? { ...prev, saved } : prev));
    });
  };

  const handleAddComment = (text: string) => {
    if (!post) return;
    createComment(post.id, text).then((comment) => {
      setPost((prev) =>
        prev
          ? {
              ...prev,
              comments: [...prev.comments, comment],
              commentCount: prev.commentCount + 1,
            }
          : prev,
      );
    });
  };

  return (
    <div className="w-96 min-h-[844px] bg-white rounded-[20px] flex flex-col justify-start items-start overflow-hidden">
      <div className="self-stretch px-5 py-5 border-b border-gray-200 inline-flex justify-between items-center">
        <Link to="/" className="text-neutral-900 text-lg font-normal">
          ←
        </Link>
        <div className="text-neutral-900 text-sm font-bold">게시글</div>
        <div className="text-neutral-400 text-lg font-normal">...</div>
      </div>

      {status === "loading" && (
        <p className="self-stretch py-20 text-center text-sm text-gray-500">
          불러오는 중...
        </p>
      )}

      {status === "error" && (
        <p className="self-stretch py-20 text-center text-sm text-red-500">
          게시글을 불러오지 못했습니다.
        </p>
      )}

      {status === "ready" && post && (
        <div className="self-stretch flex-1 p-5 flex flex-col justify-start items-start gap-5">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="size-10 bg-gray-200 rounded-full"></div>
            <div className="flex flex-col justify-start items-start gap-0.5">
              <div className="text-neutral-900 text-sm font-bold">
                {post.author}
              </div>
              <div className="text-neutral-400 text-xs font-normal">
                {post.tag} · {formatRelativeTime(post.createdAt)}
              </div>
            </div>
          </div>

          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="text-neutral-900 text-xl font-bold leading-7">
              {post.title}
            </div>
            <div className="text-zinc-600 text-sm font-normal leading-6">
              {post.body}
            </div>
          </div>

          <div className="self-stretch py-3.5 flex justify-between items-center border-t border-b border-gray-200">
            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleLike}
                className={`px-2.5 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] flex items-center gap-1.5 text-xs font-medium ${
                  post.liked
                    ? "bg-red-50 outline-red-200 text-red-500"
                    : "outline-gray-200 text-gray-500"
                }`}
              >
                {post.liked ? "♥" : "♡"} {post.likeCount}
              </button>
              <div className="px-2.5 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 flex items-center gap-1.5">
                <div className="text-gray-500 text-xs font-medium">
                  댓글 {post.commentCount}
                </div>
              </div>
            </div>
            <BookmarkButton
              isBookmarked={post.saved}
              onToggle={handleToggleSave}
            />
          </div>

          <CommentSection
            comments={post.comments}
            onSubmit={handleAddComment}
          />
        </div>
      )}
    </div>
  );
}

export default PostDetail;
