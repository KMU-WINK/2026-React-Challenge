import BookmarkButton from "./BookmarkButton";
import type { Post } from "../types";
import { formatRelativeTime } from "../utils/time";

interface PostCardProps {
  post: Post;
  onToggleLike: (postId: number) => void;
  onToggleSave: (postId: number) => void;
}

function PostCard({ post, onToggleLike, onToggleSave }: PostCardProps) {
    return (
    <div className="self-stretch p-4 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-3">
      <div className="self-stretch inline-flex justify-start items-center gap-2.5">
        <div className="size-9 bg-gray-200 rounded-full"></div>

        <div className="flex flex-col justify-start items-start gap-0.5">
          <div className="text-neutral-900 text-sm font-bold">
            {post.author}
          </div>

          <div className="text-neutral-400 text-xs font-normal">
            {formatRelativeTime(post.createdAt)}
          </div>
        </div>
      </div>

      <div className="text-neutral-900 text-sm font-medium leading-5">
        {post.title}
      </div>

      <div className="self-stretch pt-1 inline-flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleLike(post.id);
            }}
            className={
              post.liked
                ? "bg-red-50 outline-red-200"
                : "outline-gray-200"
            }
          >
            {post.likeCount}
          </button>

          <div className="px-2.5 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-1.5">
            <div className="text-gray-500 text-xs font-medium">
              댓글 {post.commentCount}
            </div>
          </div>
        </div>

        <BookmarkButton
          isBookmarked={post.saved}
          onToggle={() => onToggleSave(post.id)}
        />
      </div>
    </div>
  );
}

export default PostCard;