import { Route, Routes } from "react-router-dom";
import PostDetail from "./pages/PostDetail";
import PostList from "./pages/PostList";

export default function App() {
  return (
    <div className="mx-auto my-10 min-h-[844px] w-full max-w-[390px] overflow-hidden rounded-frame bg-bg shadow-[0_12px_40px_rgba(20,22,26,0.1)]">
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
}
