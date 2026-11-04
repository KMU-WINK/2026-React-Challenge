import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts, toggleLike, toggleBookmark } from '../api/client';
import type { Post } from '../types';
import FeedHeader from '../components/FeedHeader';
import PostCard from '../components/PostCard';

type Status = 'loading' | 'ready' | 'error';

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState<Status>('loading');
  const [activeCategory, setActiveCategory] = useState('전체');

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');

    fetchPosts(activeCategory)
      .then((data) => {
        if (cancelled) return;
        setPosts(data);
        setStatus('ready');
      })
      .catch(() => {
        if (cancelled) return;
        setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, [activeCategory]);

  const handleToggleLike = (postId: number) => {
    toggleLike(postId).then(({ liked, likeCount }) => {
      setPosts((prev) =>
        prev.map((p) => (p.id === postId ? { ...p, liked, likeCount } : p)),
      );
    });
  };

  const handleToggleSave = (postId: number) => {
    toggleBookmark(postId).then(({ saved }) => {
      setPosts((prev) =>
        prev.map((p) => (p.id === postId ? { ...p, saved } : p)),
      );
    });
  };

  return (
    <div className="w-[390px] min-h-[844px] flex flex-col bg-bg rounded-frame overflow-hidden shadow-[0_12px_40px_0_rgba(20,22,26,0.1)]">
      <FeedHeader
        activeCategory={activeCategory}
        onChangeCategory={setActiveCategory}
      />

      <main className="flex flex-col gap-3 pt-4 px-4 pb-6">
        {status === 'loading' && (
          <p className="py-20 text-center text-body text-text-secondary">
            불러오는 중...
          </p>
        )}

        {status === 'error' && (
          <p className="py-20 text-center text-body text-like">
            게시글을 불러오지 못했습니다.
          </p>
        )}

        {status === 'ready' && posts.length === 0 && (
          <p className="py-20 text-center text-body text-text-secondary">
            게시글이 없어요.
          </p>
        )}

        {status === 'ready' &&
          posts.map((post) => (
            <Link key={post.id} to={`/posts/${post.id}`} className="block">
              <PostCard
                post={post}
                onToggleLike={handleToggleLike}
                onToggleSave={handleToggleSave}
              />
            </Link>
          ))}
      </main>
    </div>
  );
}

export default PostList;
