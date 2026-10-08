export interface Comment {
  id: number;
  author: string;
  time: string;
  text: string;
}

export interface Post {
  id: number;
  author: string;
  category: "질문" | "자유" | "정보";
  time: string;
  title: string;
  body: string;
  likes: number;
  comments: Comment[];
  saved: boolean;
}

export const posts: Post[] = [
  {
    id: 1,
    author: "이서준",
    category: "질문",
    time: "12분 전",
    title: "디자인 시스템 토큰, 어디까지 쪼개는 게 좋을까요?",
    body: "컬러는 primary/secondary 정도로 정리했는데 spacing을 4배수로 잡을 때 8과 12를 둘 다 쓰는 게 맞는지 고민이에요. 토큰을 너무 잘게 나누면 오히려 관리가 힘들어지는 것 같기도 하고, 반대로 너무 뭉치면 디자인 변경에 대응하기 어렵더라고요. 다들 어느 정도 기준으로 나누시나요?",
    likes: 24,
    comments: [
      { id: 1, author: "이상래", time: "10분 전", text: "저는 쓰임새가 3번 이상 반복될 때 토큰으로 뽑아요." },
      { id: 2, author: "박승환", time: "8분 전", text: "spacing은 4배수만 두고 12는 빼는 쪽이 편했어요." },
      { id: 3, author: "류진", time: "5분 전", text: "처음엔 적게 시작해서 필요할 때 늘리는 걸 추천해요!" },
    ],
    saved: false,
  },
  {
    id: 2,
    author: "이상래",
    category: "자유",
    time: "1시간 전",
    title: "오늘 컴포넌트 정리하면서 배운 것",
    body: "Variant를 상태 기준으로만 나누니 훨씬 관리가 쉬워졌어요. Liked=true / false 두 개만 두고 나머지는 인스턴스에서 처리하니 파일도 깔끔해지고, 개발할 때 Props로 옮기기도 쉬웠습니다.",
    likes: 41,
    comments: [
      { id: 1, author: "이서준", time: "50분 전", text: "Variant 이름 규칙도 공유해 주세요!" },
      { id: 2, author: "류진", time: "30분 전", text: "저도 비슷하게 정리했는데 확실히 편하더라고요." },
    ],
    saved: false,
  },
  {
    id: 3,
    author: "이준혁",
    category: "정보",
    time: "3시간 전",
    title: "Dev Mode 핸드오프 체크리스트 공유",
    body: "색상은 hex, 간격은 4px 배수, 텍스트 스타일은 이름으로 관리. 이 세 가지만 지켜도 개발자와 커뮤니케이션 시간이 확 줄어듭니다. 레이어 이름 정리도 같이 해두면 더 좋아요.",
    likes: 87,
    comments: [{ id: 1, author: "박승환", time: "2시간 전", text: "저장해 둡니다. 감사해요!" }],
    saved: true,
  },
];
