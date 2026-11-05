import { usePostStore } from "../store/postStore";
import type { Post } from "../types";
import { formatRelativeTime } from "../utils/time";
import BookmarkButton from "./BookmarkButton";
import CountPill from "./CountPill";

// 좋아요/북마크의 "진짜 값"은 서버에 있으니 PostCard는 State 없이 보여주기만 하고,
// 클릭하면 전역 스토어의 액션이 API를 호출함 (Props로 핸들러를 내려받을 필요 없음)
export default function PostCard({ post }: { post: Post }) {
  const toggleLike = usePostStore((s) => s.toggleLike);
  const toggleSave = usePostStore((s) => s.toggleSave);

  return (
    <article className="flex flex-col gap-3 rounded-card border border-border bg-surface p-[17px]">
      <div className="flex items-center gap-2.5">
        <div className="size-9 rounded-full bg-border" />
        <div className="flex flex-col gap-0.5">
          <span className="text-body font-bold text-text">{post.author}</span>
          <span className="text-caption text-text-secondary">
            {post.tag} · {formatRelativeTime(post.createdAt)}
          </span>
        </div>
      </div>
      <h2 className="text-body leading-[21px] font-medium text-text">{post.title}</h2>
      <p className="line-clamp-2 text-body leading-[1.65] text-text-body">{post.body}</p>
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <CountPill
            active={post.liked}
            onClick={(e) => {
              e.preventDefault(); // 카드를 감싼 <Link> 이동 막기
              e.stopPropagation();
              toggleLike(post.id);
            }}
          >
            {post.liked ? "♥" : "♡"} {post.likeCount}
          </CountPill>
          <CountPill>댓글 {post.commentCount}</CountPill>
        </div>
        <BookmarkButton isBookmarked={post.saved} onToggle={() => toggleSave(post.id)} />
      </div>
    </article>
  );
}
