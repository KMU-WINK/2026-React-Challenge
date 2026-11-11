import { Link } from "react-router-dom";
import type { Post } from "../data/posts";
import BookmarkButton from "./BookmarkButton";
import { HeartIcon } from "./Icons";

type PostCardProps = {
  post: Post;
  onToggleLike: (id: number) => void;
  onToggleBookmark: (id: number) => void;
};

export default function PostCard({
  post,
  onToggleLike,
  onToggleBookmark,
}: PostCardProps) {
  return (
    <article className="w-[358px] rounded-[16px] border border-[#E8EAEE] bg-white p-[17px]">
      {/* 이동할 부분만 Link로 감싸서 좋아요/북마크 클릭과 분리해요. */}
      <Link
        to={`/posts/${post.id}`}
        aria-label={`${post.title} 상세 보기`}
        className="block no-underline"
      >
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 shrink-0 rounded-full bg-[#EEF0F3]" />
          <div>
            <p className="m-0 text-[13px] leading-[16px] font-medium text-[#14161A]">
              {post.author}
            </p>
            <p className="m-0 mt-1 text-[12px] leading-[16px] font-normal text-[#8A9099]">
              {post.category} · {post.time}
            </p>
          </div>
        </div>

        <h2
          className="m-0 mt-3 overflow-hidden text-[14px] leading-[21px] font-medium text-[#14161A]"
          style={{ width: "324px", height: "21px" }}
        >
          {post.title}
        </h2>
        <p
          className="m-0 mt-2 overflow-hidden text-[14px] leading-[23.1px] font-normal text-[#4A5058]"
          style={{ width: post.bodyWidth, height: "47px" }}
        >
          {post.body}
        </p>
      </Link>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onToggleLike(post.id)}
            aria-label={post.liked ? "좋아요 취소" : "좋아요"}
            aria-pressed={post.liked}
            className={`flex h-[30px] cursor-pointer items-center gap-[5px] rounded-[999px] border px-[11px] ${
              post.liked
                ? "border-[#FFC9C9] bg-[#FFF5F5]"
                : "border-[#E8EAEE] bg-white"
            }`}
          >
            <HeartIcon active={post.liked} />
            <span
              className={`text-[13px] leading-[16px] font-medium ${
                post.liked ? "text-[#F03E3E]" : "text-[#8A9099]"
              }`}
            >
              {post.likes}
            </span>
          </button>

          <Link
            to={`/posts/${post.id}`}
            className="flex h-[30px] items-center rounded-[999px] border border-[#E8EAEE] bg-white px-[11px] no-underline"
          >
            <span className="text-[13px] leading-[16px] font-medium text-[#8A9099]">
              댓글 {post.comments}
            </span>
          </Link>
        </div>

        <BookmarkButton
          active={post.bookmarked}
          onToggle={() => onToggleBookmark(post.id)}
        />
      </div>
    </article>
  );
}
