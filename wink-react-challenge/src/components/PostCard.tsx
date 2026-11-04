import type { Post } from '../types';
import { formatRelativeTime } from '../utils/time';
import CountPill from './CountPill';
import BookmarkButton from './BookmarkButton';
import heartIcon from '../assets/heart.svg';
import heartFilledIcon from '../assets/heart-fill.svg';

interface PostCardProps {
  post: Post;
  onToggleLike: (postId: number) => void;
  onToggleSave: (postId: number) => void;
}

function PostCard({ post, onToggleLike, onToggleSave }: PostCardProps) {
  return (
    <article className="flex flex-col gap-3 p-4 bg-surface border border-border rounded-card">
      <div className="flex items-center gap-2.5">
        <div className="size-9 shrink-0 rounded-full bg-border" />
        <div className="flex flex-col gap-0.5">
          <span className="text-body font-bold text-text">{post.author}</span>
          <span className="text-caption text-text-secondary">
            {post.tag} · {formatRelativeTime(post.createdAt)}
          </span>
        </div>
      </div>

      <h2 className="text-body font-medium text-text leading-[21px]">
        {post.title}
      </h2>
      <p className="text-body text-text-body leading-[1.65] line-clamp-2">
        {post.body}
      </p>

      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <CountPill
            isActive={post.liked}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleLike(post.id);
            }}
          >
            <img
              src={post.liked ? heartFilledIcon : heartIcon}
              alt=""
              className="size-4"
            />
            {post.likeCount}
          </CountPill>
          <CountPill>
            <span>댓글</span>
            <span>{post.commentCount}</span>
          </CountPill>
        </div>
        <BookmarkButton
          isBookmarked={post.saved}
          onToggle={() => onToggleSave(post.id)}
        />
      </div>
    </article>
  );
}

export default PostCard;
