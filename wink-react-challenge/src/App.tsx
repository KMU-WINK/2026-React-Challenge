import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import type { Post } from "./data/posts";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import { fetchPosts, toggleLike, toggleBookmark } from "./api/client";

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  // 처음 화면이 열리면 서버에서 게시글을 가져온다.
  useEffect(() => {
    let cancelled = false;

    fetchPosts()
      .then((data) => {
        if (cancelled) return;
        setPosts(data);
        setStatus("ready");
      })
      .catch((error) => {
        if (cancelled) return;
        console.error("게시글 조회 실패:", error);
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // 목록 화면 좋아요
  async function handleToggleLike(id: number) {
    try {
      const result: { liked: boolean; likeCount: number } =
        await toggleLike(id);

      setPosts((previousPosts) =>
        previousPosts.map((post) =>
          post.id === id
            ? {
                ...post,
                liked: result.liked,
                likes: result.likeCount,
              }
            : post,
        ),
      );
    } catch (error) {
      console.error("좋아요 요청 실패:", error);
      alert("좋아요 처리에 실패했습니다.");
    }
  }

  // 목록 화면 북마크
  async function handleToggleBookmark(id: number) {
    try {
      const result: { saved: boolean } = await toggleBookmark(id);

      setPosts((previousPosts) =>
        previousPosts.map((post) =>
          post.id === id ? { ...post, bookmarked: result.saved } : post,
        ),
      );
    } catch (error) {
      console.error("북마크 요청 실패:", error);
      alert("북마크 처리에 실패했습니다.");
    }
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F7F8FA]">
        <main className="mx-auto min-h-[844px] w-[390px] overflow-hidden rounded-[20px] bg-[#F7F8FA]">
          <Routes>
            <Route
              path="/"
              element={
                status === "loading" ? (
                  <p className="p-5">게시글을 불러오는 중...</p>
                ) : status === "error" ? (
                  <p className="p-5">게시글을 불러오지 못했습니다.</p>
                ) : (
                  <PostList
                    posts={posts}
                    onToggleLike={handleToggleLike}
                    onToggleBookmark={handleToggleBookmark}
                  />
                )
              }
            />

            <Route path="/posts/:id" element={<PostDetail />} />

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
