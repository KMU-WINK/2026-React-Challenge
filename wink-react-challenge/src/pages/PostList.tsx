import { useState } from "react";
import { Link } from "react-router-dom";
import FeedHeader from "../components/FeedHeader";
import PostCard from "../components/PostCard";
import { posts } from "../data/posts";

export default function PostList() {
  const [category, setCategory] = useState("전체");
  const visible = category === "전체" ? posts : posts.filter((p) => p.category === category);

  return (
    <>
      <FeedHeader active={category} onChange={setCategory} />
      <main className="flex flex-col gap-3 px-4 pt-4 pb-6">
        {visible.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <PostCard post={post} />
          </Link>
        ))}
        {visible.length === 0 && <p className="py-10 text-center text-body text-text-secondary">게시글이 없어요.</p>}
      </main>
    </>
  );
}
