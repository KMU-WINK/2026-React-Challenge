import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import FeedHeader from '../components/FeedHeader';
import PostCard from '../components/PostCard';

function PostList() {
  return (
    <div className="w-[390px] min-h-[844px] flex flex-col bg-bg rounded-frame overflow-hidden shadow-[0_12px_40px_0_rgba(20,22,26,0.1)]">
      <FeedHeader />
      <main className="flex flex-col gap-3 pt-4 px-4 pb-6">
        {posts.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`} className="block">
            <PostCard
              author={post.author}
              timeLabel={post.timeLabel}
              title={post.title}
              body={post.body}
              initialLikeCount={post.likeCount}
              commentCount={post.commentCount}
            />
          </Link>
        ))}
      </main>
    </div>
  );
}

export default PostList;
