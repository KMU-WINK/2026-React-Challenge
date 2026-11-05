import type { Post, PostWithComments, Comment } from "../types";
import { getClientId } from "./clientId";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: { "X-Client-Id": getClientId(), ...options.headers },
  });
  if (!res.ok) throw new Error(`요청에 실패했습니다. (HTTP ${res.status})`);
  return res.json();
}

export function fetchPosts(): Promise<Post[]> {
  return request<Post[]>("/api/posts");
}

export function fetchPost(postId: string | number): Promise<PostWithComments> {
  return request<PostWithComments>(`/api/posts/${postId}`);
}

export function toggleLike(postId: number) {
  return request<{ liked: boolean; likeCount: number }>(
    `/api/posts/${postId}/like`,
    { method: "POST" },
  );
}

export function toggleBookmark(postId: number) {
  return request<{ saved: boolean }>(`/api/posts/${postId}/bookmark`, {
    method: "POST",
  });
}

export function createComment(postId: number, body: string): Promise<Comment> {
  return request<Comment>(`/api/posts/${postId}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body }),
  });
}
