import type { Post } from "../data/posts";
import { getClientId } from "./clientId";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

type ServerPost = {
  id: number;
  author: string;
  tag: string;
  title: string;
  body: string;
  createdAt: string;
  likeCount: number;
  commentCount: number;
  liked: boolean;
  saved: boolean;
};

function formatTime(createdAt: string): string {
  const seconds = Math.max(
    0,
    Math.floor((Date.now() - new Date(createdAt).getTime()) / 1000),
  );

  if (seconds < 60) return "방금 전";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}분 전`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}시간 전`;

  return `${Math.floor(seconds / 86400)}일 전`;
}

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(`${BASE_URL}/api/posts`, {
    headers: {
      "X-Client-Id": getClientId(),
    },
  });

  if (!response.ok) {
    throw new Error("게시글을 불러오지 못했습니다.");
  }

  const data: ServerPost[] = await response.json();

  return data.map((post) => ({
    id: post.id,
    author: post.author,
    category: post.tag,
    time: formatTime(post.createdAt),
    title: post.title,
    body: post.body,
    likes: post.likeCount,
    comments: post.commentCount,
    liked: post.liked,
    bookmarked: post.saved,
    bodyWidth: "323px",
    commentItems: [],
  }));
}

type ServerComment = {
  id: number;
  author: string;
  clientId: string | null;
  body: string;
  createdAt: string;
};

type ServerPostDetail = ServerPost & {
  comments: ServerComment[];
};

export async function fetchPostDetail(id: number): Promise<Post> {
  const response = await fetch(`${BASE_URL}/api/posts/${id}`, {
    headers: {
      "X-Client-Id": getClientId(),
    },
  });

  if (!response.ok) {
    throw new Error("게시글 상세 정보를 불러오지 못했습니다.");
  }

  const data: ServerPostDetail = await response.json();

  return {
    id: data.id,
    author: data.author,
    category: data.tag,
    time: formatTime(data.createdAt),
    title: data.title,
    body: data.body,
    likes: data.likeCount,
    comments: data.commentCount,
    liked: data.liked,
    bookmarked: data.saved,
    bodyWidth: "323px",
    commentItems: data.comments.map((comment) => ({
      id: String(comment.id),
      author: comment.clientId === getClientId() ? "나" : comment.author,
      text: comment.body,
    })),
  };
}

export async function toggleLike(postId: number) {
  const response = await fetch(`${BASE_URL}/api/posts/${postId}/like`, {
    method: "POST",
    headers: {
      "X-Client-Id": getClientId(),
    },
  });

  if (!response.ok) {
    throw new Error("좋아요 처리에 실패했습니다.");
  }

  return response.json();
}

export async function toggleBookmark(postId: number) {
  const response = await fetch(`${BASE_URL}/api/posts/${postId}/bookmark`, {
    method: "POST",
    headers: {
      "X-Client-Id": getClientId(),
    },
  });

  if (!response.ok) {
    throw new Error("북마크 처리에 실패했습니다.");
  }

  return response.json();
}

export async function createComment(postId: number, body: string) {
  const response = await fetch(`${BASE_URL}/api/posts/${postId}/comments`, {
    method: "POST",
    headers: {
      "X-Client-Id": getClientId(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ body }),
  });

  if (!response.ok) {
    throw new Error("댓글 등록에 실패했습니다.");
  }

  return response.json();
}
