// src/components/PostCard.tsx
import { useState } from "react";
import BookmarkButton from "./BookmarkButton";
import CountPill from "./CountPill";

interface PostCardProps {
  author: string;
  timeLabel: string;
  title: string;
  initialLikeCount: number;
  commentCount: number;
}

function PostCard({ author, timeLabel, title, initialLikeCount, commentCount }: PostCardProps) {
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
          <div className="text-neutral-400 text-xs font-normal">{timeLabel}</div>
        </div>
      </div>
      <div className="text-neutral-900 text-sm font-medium leading-5">{title}</div>
      <div className="self-stretch pt-1 inline-flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <CountPill
            isActive={isLiked}
            onClick={(e) => {
              e.preventDefault(); // 카드를 감싼 <Link>의 페이지 이동이 같이 일어나지 않게 막기
              handleLikeClick();
            }}
          >
            {isLiked ? "♥" : "♡"} {likeCount}
          </CountPill>
          <CountPill>댓글 {commentCount}</CountPill>
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