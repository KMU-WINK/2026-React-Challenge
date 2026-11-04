export interface Post {
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
}

export interface Comment {
  id: number;
  author: string;
  clientId: string | null;
  body: string;
  createdAt: string;
}

// 상세 조회는 게시글 + 댓글 목록
export interface PostWithComments extends Post {
  comments: Comment[];
}
