// src/components/PostCard.tsx
import { useState } from "react";
import BookmarkButton from "./BookmarkButton";

interface PostCardProps {
  author: string;
  timeLabel: string;
  title: string;
  initialLikeCount: number;
  commentCount: number;
}

function PostCard({
  author,
  timeLabel,
  title,
  initialLikeCount,
  commentCount,
}: PostCardProps) {
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="self-stretch p-4 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-3">
      <div className="self-stretch inline-flex justify-start items-center gap-2.5">
        <div className="size-9 bg-gray-200 rounded-full"></div>
        <div className="flex flex-col justify-start items-start gap-0.5">
          <div className="text-neutral-900 text-sm font-bold">{author}</div>
          <div className="text-neutral-400 text-xs font-normal">
            {timeLabel}
          </div>
        </div>
      </div>
      <div className="text-neutral-900 text-sm font-medium leading-5">
        {title}
      </div>
      <div className="self-stretch pt-1 inline-flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <button
            onClick={(e) => {
              e.preventDefault(); // 카드를 감싼 <Link>의 페이지 이동이 같이 일어나지 않게 막기
              handleLikeClick();
            }}
            className={`px-2.5 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] flex justify-start items-center gap-1.5 text-xs font-medium ${
              isLiked
                ? "bg-red-50 outline-red-200 text-red-500"
                : "outline-gray-200 text-gray-500"
            }`}
          >
            {isLiked ? "♥" : "♡"} {likeCount}
          </button>
          <div className="px-2.5 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-1.5">
            <div className="text-gray-500 text-xs font-medium">
              댓글 {commentCount}
            </div>
          </div>
        </div>
        <BookmarkButton
          isBookmarked={isBookmarked}
          onToggle={() => setIsBookmarked(!isBookmarked)}
        />
      </div>
    </div>
  );
}

export default PostCard;
