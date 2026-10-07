import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { initialPosts } from "./data/posts";
import type { Post, PostComment } from "./data/posts";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";

export default function App() {
  // 목록과 상세 화면이 같은 상태를 사용하도록 App에서 관리해요.
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  function handleToggleLike(id: number) {
    setPosts((previousPosts) =>
      previousPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.likes + (post.liked ? -1 : 1),
            }
          : post,
      ),
    );
  }

  function handleToggleBookmark(id: number) {
    setPosts((previousPosts) =>
      previousPosts.map((post) =>
        post.id === id ? { ...post, bookmarked: !post.bookmarked } : post,
      ),
    );
  }

  function handleAddComment(id: number, text: string) {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    const newComment: PostComment = {
      id: crypto.randomUUID(),
      author: "나",
      text: trimmedText,
    };

    setPosts((previousPosts) =>
      previousPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: post.comments + 1,
              commentItems: [...post.commentItems, newComment],
            }
          : post,
      ),
    );
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F7F8FA]">
        <main className="mx-auto min-h-[844px] w-[390px] overflow-hidden rounded-[20px] bg-[#F7F8FA]">
          <Routes>
            <Route
              path="/"
              element={
                <PostList
                  posts={posts}
                  onToggleLike={handleToggleLike}
                  onToggleBookmark={handleToggleBookmark}
                />
              }
            />
            <Route
              path="/posts/:id"
              element={
                <PostDetail
                  posts={posts}
                  onToggleLike={handleToggleLike}
                  onToggleBookmark={handleToggleBookmark}
                  onAddComment={handleAddComment}
                />
              }
            />
            <Route
              path="*"
              element={
                <section className="p-5">
                  <p className="text-[#14161A]">페이지를 찾을 수 없어요.</p>
                  <Link to="/" className="text-[#4C6EF5]">
                    목록으로 돌아가기
                  </Link>
                </section>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
