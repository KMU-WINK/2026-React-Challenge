import type { Post } from "../data/posts";
import { useToggle } from "../hooks/useToggle";
import BookmarkButton from "./BookmarkButton";
import CountPill from "./CountPill";

export default function PostCard({ post }: { post: Post }) {
  const [isLiked, toggleLike] = useToggle(false);
  const [isBookmarked, toggleBookmark] = useToggle(post.saved);

  return (
    <article className="flex flex-col gap-3 rounded-card border border-border bg-surface p-[17px]">
      <div className="flex items-center gap-2.5">
        <div className="size-9 rounded-full bg-border" />
        <div className="flex flex-col gap-0.5">
          <span className="text-body font-bold text-text">{post.author}</span>
          <span className="text-caption text-text-secondary">
            {post.category} · {post.time}
          </span>
        </div>
      </div>
      <h2 className="text-body leading-[21px] font-medium text-text">{post.title}</h2>
      <p className="line-clamp-2 text-body leading-[1.65] text-text-body">{post.body}</p>
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <CountPill
            active={isLiked}
            onClick={(e) => {
              e.preventDefault(); // 좋아요를 눌러도 상세 페이지로 이동하지 않게
              toggleLike();
            }}
          >
            {isLiked ? "♥" : "♡"} {post.likes + (isLiked ? 1 : 0)}
          </CountPill>
          <CountPill>댓글 {post.comments.length}</CountPill>
        </div>
        <BookmarkButton isBookmarked={isBookmarked} onToggle={toggleBookmark} />
      </div>
    </article>
  );
}
