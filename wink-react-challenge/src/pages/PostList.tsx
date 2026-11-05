import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts, toggleLike, toggleBookmark } from "../api/client";
import type { Post } from "../types";
import PostCard from "../components/PostCard";
import FeedHeader from "../components/FeedHeader";

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const handleToggleLike = (postId: number) => {
  toggleLike(postId).then(({ liked, likeCount }) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId ? { ...p, liked, likeCount } : p
      )
    );
  });
};

const handleToggleSave = (postId: number) => {
  toggleBookmark(postId).then(({ saved }) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId ? { ...p, saved } : p
      )
    );
  });
};

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");

    fetchPosts()
      .then((data) => {
        if (cancelled) return;
        setPosts(data);
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "loading") return <p>불러오는 중...</p>;
  if (status === "error") return <p>게시글을 불러오지 못했습니다.</p>;

  return (
    <div className="w-96 min-h-[844px] bg-gray-50 rounded-[20px] flex flex-col justify-start items-start overflow-hidden">
      <FeedHeader />
      <div className="self-stretch px-4 pt-4 pb-6 flex flex-col justify-start items-start gap-3">
        {posts.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`} className="self-stretch">
            <PostCard
              post={post}
              onToggleLike={handleToggleLike}
              onToggleSave={handleToggleSave}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PostList;