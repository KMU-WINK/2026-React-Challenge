import { Link, useParams } from "react-router-dom";
import type { Post } from "../data/posts";
import BookmarkButton from "../components/BookmarkButton";
import CommentSection from "../components/CommentSection";
import { HeartIcon } from "../components/Icons";

type PostDetailProps = {
  posts: Post[];
  onToggleLike: (id: number) => void;
  onToggleBookmark: (id: number) => void;
  onAddComment: (id: number, text: string) => void;
};

export default function PostDetail({
  posts,
  onToggleLike,
  onToggleBookmark,
  onAddComment,
}: PostDetailProps) {
  const { id } = useParams();
  const post = posts.find((item) => item.id === Number(id));

  if (!post) {
    return (
      <section className="p-5">
        <p className="text-[#14161A]">게시글을 찾을 수 없어요.</p>
        <Link to="/" className="text-[#4C6EF5]">
          목록으로 돌아가기
        </Link>
      </section>
    );
  }

  return (
    <div className="min-h-[844px] bg-white">
      <header className="flex items-center gap-4 border-b border-[#E8EAEE] px-5 py-5">
        <Link
          to="/"
          aria-label="목록으로 돌아가기"
          className="text-[20px] text-[#14161A] no-underline"
        >
          ←
        </Link>
        <span className="text-[16px] font-bold text-[#14161A]">게시글</span>
      </header>

      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 shrink-0 rounded-full bg-[#EEF0F3]" />
          <div>
            <p className="m-0 text-[13px] leading-[16px] font-medium text-[#14161A]">
              {post.author}
            </p>
            <p className="m-0 mt-1 text-[12px] leading-[16px] text-[#8A9099]">
              {post.category} · {post.time}
            </p>
          </div>
        </div>

        <h1 className="m-0 mt-5 text-[20px] leading-[30px] font-bold text-[#14161A]">
          {post.title}
        </h1>
        <p className="m-0 mt-3 whitespace-pre-wrap break-words text-[14px] leading-[23.1px] text-[#4A5058]">
          {post.body}
        </p>

        <div className="mt-5 flex items-center justify-between border-y border-[#E8EAEE] py-4">
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
                className={`text-[13px] leading-[16px] font-medium ${post.liked ? "text-[#F03E3E]" : "text-[#8A9099]"}`}
              >
                {post.likes}
              </span>
            </button>
            <span className="flex h-[30px] items-center rounded-[999px] border border-[#E8EAEE] px-[11px] text-[13px] font-medium text-[#8A9099]">
              댓글 {post.comments}
            </span>
          </div>
          <BookmarkButton
            active={post.bookmarked}
            onToggle={() => onToggleBookmark(post.id)}
          />
        </div>

        <CommentSection
          key={post.id}
          comments={post.commentItems}
          totalCount={post.comments}
          onAddComment={(text) => onAddComment(post.id, text)}
        />
      </div>
    </div>
  );
}
