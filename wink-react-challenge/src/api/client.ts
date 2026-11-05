import type { Post, PostDetail, Comment } from "../types";
import { getClientId } from "./clientId";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

// 공통 요청 함수
async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "X-Client-Id": getClientId(),
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`요청에 실패했습니다. (HTTP ${res.status})`);
  }

  return res.json();
}

// 1. 게시글 목록 조회
export function fetchPosts(tag?: string): Promise<Post[]> {
  const query =
    tag && tag !== "전체"
      ? `?tag=${encodeURIComponent(tag)}`
      : "";

  return request<Post[]>(`/api/posts${query}`);
}

// 2. 게시글 상세 조회
export function fetchPost(
  postId: string | number
): Promise<PostDetail> {
  return request<PostDetail>(`/api/posts/${postId}`);
}

// 3. 좋아요 토글
export function toggleLike(postId: string | number) {
  return request<{ liked: boolean; likeCount: number }>(
    `/api/posts/${postId}/like`,
    { method: "POST" }
  );
}

// 4. 북마크 토글
export function toggleBookmark(postId: string | number) {
  return request<{ saved: boolean }>(
    `/api/posts/${postId}/bookmark`,
    { method: "POST" }
  );
}

// 5. 댓글 작성
export function createComment(
  postId: string | number,
  body: string
): Promise<Comment> {
  return request<Comment>(`/api/posts/${postId}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body }),
  });
}