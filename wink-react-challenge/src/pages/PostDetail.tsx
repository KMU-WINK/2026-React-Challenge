// src/pages/PostDetail.tsx
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";
import BookmarkButton from "../components/BookmarkButton";
import CommentSection from "../components/CommentSection";

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));
  const [isBookmarked, setIsBookmarked] = useState(false);

  if (!post) return <p>게시글을 찾을 수 없어요.</p>;

  return (
    <div className="w-96 min-h-[844px] bg-white rounded-[20px] flex flex-col justify-start items-start overflow-hidden">
      {/* 상단 헤더: 뒤로가기 / 제목 / 더보기 */}
      <div className="self-stretch px-5 py-5 border-b border-gray-200 inline-flex justify-between items-center">
        <Link to="/" className="text-neutral-900 text-lg font-normal">
          ←
        </Link>
        <div className="text-neutral-900 text-sm font-bold">게시글</div>
        <div className="text-neutral-400 text-lg font-normal">⋯</div>
      </div>

      <div className="self-stretch flex-1 p-5 flex flex-col justify-start items-start gap-5">
        {/* 작성자 정보 */}
        <div className="self-stretch inline-flex justify-start items-center gap-2.5">
          <div className="size-10 bg-gray-200 rounded-full"></div>
          <div className="flex flex-col justify-start items-start gap-0.5">
            <div className="text-neutral-900 text-sm font-bold">
              {post.author}
            </div>
            <div className="text-neutral-400 text-xs font-normal">
              {post.timeLabel}
            </div>
          </div>
        </div>

        {/* 제목 + 본문 */}
        <div className="self-stretch flex flex-col justify-start items-start gap-3">
          <div className="text-neutral-900 text-xl font-bold leading-7">
            {post.title}
          </div>
          <div className="text-zinc-600 text-sm font-normal leading-6">
            {post.body}
          </div>
        </div>

        {/* 좋아요 / 댓글 / 북마크 줄 */}
        <div className="self-stretch py-3.5 flex justify-between items-center border-t border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="px-2.5 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 flex items-center gap-1.5">
              <div className="text-gray-500 text-xs font-medium">
                ♡ {post.likeCount}
              </div>
            </div>
            <div className="px-2.5 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 flex items-center gap-1.5">
              <div className="text-gray-500 text-xs font-medium">
                댓글 {post.commentCount}
              </div>
            </div>
          </div>
          <BookmarkButton
            isBookmarked={isBookmarked}
            onToggle={() => setIsBookmarked(!isBookmarked)}
          />
        </div>

        <CommentSection />
      </div>
    </div>
  );
}

export default PostDetail;
