import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "../api/client";
import FeedHeader from "../components/FeedHeader";
import { CardSkeleton, ErrorView } from "../components/Feedback";
import PostCard from "../components/PostCard";
import { usePostStore } from "../store/postStore";

type Status = "loading" | "ready" | "error";

export default function PostList() {
  const [category, setCategory] = useState("전체");
  const [ids, setIds] = useState<number[]>([]); // 이 탭에서 보여줄 순서만 로컬로, 게시글 내용은 전역 스토어에서
  const [status, setStatus] = useState<Status>("loading");
  const [retry, setRetry] = useState(0);
  const byId = usePostStore((s) => s.byId);
  const save = usePostStore((s) => s.save);

  useEffect(() => {
    let cancelled = false; // 탭을 빠르게 바꿨을 때 늦게 온 이전 탭 응답이 덮어쓰지 않게
    setStatus("loading");

    fetchPosts(category)
      .then((data) => {
        if (cancelled) return;
        save(data);
        setIds(data.map((p) => p.id));
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [category, retry, save]);

  return (
    <>
      <FeedHeader active={category} onChange={setCategory} />
      <main className="flex flex-col gap-3 px-4 pt-4 pb-6">
        {status === "loading" && [1, 2, 3].map((n) => <CardSkeleton key={n} />)}
        {status === "error" && <ErrorView message="게시글을 불러오지 못했습니다." onRetry={() => setRetry((n) => n + 1)} />}
        {status === "ready" &&
          ids.map((id) => (
            <Link key={id} to={`/posts/${id}`}>
              <PostCard post={byId[id]} />
            </Link>
          ))}
        {status === "ready" && ids.length === 0 && (
          <p className="py-10 text-center text-body text-text-secondary">게시글이 없어요.</p>
        )}
      </main>
    </>
  );
}
