import type { Post } from "../data/posts";
import FeedHeader from "../components/FeedHeader";
import PostCard from "../components/PostCard";

type PostListProps = {
  posts: Post[];
  onToggleLike: (id: number) => void;
  onToggleBookmark: (id: number) => void;
};

export default function PostList({
  posts,
  onToggleLike,
  onToggleBookmark,
}: PostListProps) {
  return (
    <>
      <FeedHeader />
      <section
        className="flex flex-col gap-3 px-4 pt-4 pb-6"
        aria-label="게시글 목록"
      >
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onToggleLike={onToggleLike}
            onToggleBookmark={onToggleBookmark}
          />
        ))}
      </section>
    </>
  );
}
