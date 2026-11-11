export type PostComment = {
  id: string;
  author: string;
  text: string;
};

export type Post = {
  id: number;
  author: string;
  category: string;
  time: string;
  title: string;
  body: string;
  likes: number;
  comments: number;
  liked: boolean;
  bookmarked: boolean;
  bodyWidth: string;
  commentItems: PostComment[];
};

// 기존 1주차 데이터에 고유 id와 변경할 상태를 추가했어요.
export const initialPosts: Post[] = [
  {
    id: 1,
    author: "이서준",
    category: "질문",
    time: "12분 전",
    title: "디자인 시스템 토큰, 어디까지 쪼개는 게 좋을까요?",
    body: "컬러는 primary/secondary 정도로 정리했는데 spacing을 4배수로 잡을 때 8과 12를 둘 다 쓰는 게 맞는지 고민입니다. 팀에서는 8배수만 쓰자는 의견도 있었어요.",
    likes: 24,
    comments: 6,
    liked: false,
    bookmarked: false,
    bodyWidth: "320.13px",
    commentItems: [],
  },
  {
    id: 2,
    author: "이상래",
    category: "자유",
    time: "1시간 전",
    title: "오늘 컴포넌트 정리하면서 배운 것",
    body: "Variant를 상태 기준으로만 나누니 훨씬 관리가 쉬워졌어요. Liked=true / false 두 개만 두고 나머지는 인스턴스로 관리했습니다.",
    likes: 41,
    comments: 12,
    liked: false,
    bookmarked: false,
    bodyWidth: "323.16px",
    commentItems: [],
  },
  {
    id: 3,
    author: "이준혁",
    category: "정보",
    time: "3시간 전",
    title: "Dev Mode 핸드오프 체크리스트 공유",
    body: "색상은 hex, 간격은 4px 배수, 텍스트 스타일은 이름으로 관리. 이 세 가지만 지켜도 개발자와 커뮤니케이션 시간이 줄어듭니다.",
    likes: 87,
    comments: 19,
    liked: false,
    bookmarked: true,
    bodyWidth: "323.41px",
    commentItems: [],
  },
];
