import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts, toggleLike, toggleBookmark } from "../api/client";
import type { Post } from "../types";
import FeedHeader from "../components/FeedHeader";
import PostCard from "../components/PostCard";

type Status = "loading" | "ready" | "error";

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setPosts(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

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
    <div className="w-96 min-h-[844px] bg-gray-50 rounded-[20px] flex flex-col justify-start items-start overflow-hidden">
      <FeedHeader />
      <div className="self-stretch px-4 pt-4 pb-6 flex flex-col justify-start items-start gap-3">
        {status === "loading" && (
          <p className="self-stretch py-20 text-center text-sm text-gray-500">
            불러오는 중...
          </p>
        )}

        {status === "error" && (
          <p className="self-stretch py-20 text-center text-sm text-red-500">
            게시글을 불러오지 못했습니다.
          </p>
        )}

        {status === "ready" && posts.length === 0 && (
          <p className="self-stretch py-20 text-center text-sm text-gray-500">
            게시글이 없어요.
          </p>
        )}

        {status === "ready" &&
          posts.map((post) => (
            <Link
              key={post.id}
              to={`/posts/${post.id}`}
              className="self-stretch"
            >
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
