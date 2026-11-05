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
  author: string; // 서버가 X-Client-Id로 계산한 익명 닉네임
  clientId: string | null; // 이 댓글을 쓴 사람의 clientId
  body: string;
  createdAt: string;
}

// 상세 조회는 게시글 + 댓글 목록
export interface PostWithComments extends Post {
  comments: Comment[];
}
