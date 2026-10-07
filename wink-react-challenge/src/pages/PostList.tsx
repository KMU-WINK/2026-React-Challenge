// src/pages/PostList.tsx
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import FeedHeader from '../components/FeedHeader';
import PostCard from '../components/PostCard';

function PostList() {
  return (
    <div className="w-96 min-h-[844px] bg-gray-50 rounded-[20px] flex flex-col justify-start items-start overflow-hidden">
      <FeedHeader />
      <div className="self-stretch px-4 pt-4 pb-6 flex flex-col justify-start items-start gap-3">
        {posts.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`} className="self-stretch">
            <PostCard
              author={post.author}
              timeLabel={post.timeLabel}
              title={post.title}
              initialLikeCount={post.likeCount}
              commentCount={post.commentCount}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PostList;
