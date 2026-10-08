import useToggle from '../hooks/useToggle';
import CountPill from './CountPill';
import BookmarkButton from './BookmarkButton';
import heartIcon from '../assets/heart.svg';
import heartFilledIcon from '../assets/heart-fill.svg';

interface PostCardProps {
  author: string;
  timeLabel: string;
  title: string;
  body: string;
  initialLikeCount: number;
  commentCount: number;
}

function PostCard({
  author,
  timeLabel,
  title,
  body,
  initialLikeCount,
  commentCount,
}: PostCardProps) {
  const [isLiked, toggleLiked] = useToggle(false);
  const [isBookmarked, toggleBookmarked] = useToggle(false);
  const likeCount = initialLikeCount + (isLiked ? 1 : 0);

  return (
    <article className="flex flex-col gap-3 p-4 bg-surface border border-border rounded-card">
      <div className="flex items-center gap-2.5">
        <div className="size-9 shrink-0 rounded-full bg-border" />
        <div className="flex flex-col gap-0.5">
          <span className="text-body font-bold text-text">{author}</span>
          <span className="text-caption text-text-secondary">{timeLabel}</span>
        </div>
      </div>

      <h2 className="text-body font-medium text-text leading-[21px]">
        {title}
      </h2>
      <p className="text-body text-text-body leading-[1.65] line-clamp-2">
        {body}
      </p>

      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <CountPill
            isActive={isLiked}
            onClick={(e) => {
              e.preventDefault();
              toggleLiked();
            }}
          >
            <img
              src={isLiked ? heartFilledIcon : heartIcon}
              alt=""
              className="size-4"
            />
            {likeCount}
          </CountPill>
          <CountPill>
            <span>댓글</span>
            <span>{commentCount}</span>
          </CountPill>
        </div>
        <BookmarkButton
          isBookmarked={isBookmarked}
          onToggle={toggleBookmarked}
        />
      </div>
    </article>
  );
}

export default PostCard;
