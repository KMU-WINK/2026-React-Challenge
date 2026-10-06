// src/data/posts.ts
export const posts = [
  {
    id: 1,
    author: "이서준",
    timeLabel: "질문 · 12분 전",
    title: "디자인 시스템 토큰, 어디까지 쪼개는 게 좋을까요?",
    body: "컬러는 primary/secondary 정도로 정리했는데 spacing을 4배수로 잡을 때 8과 12를 둘 다 쓰는 게 맞는지 고민입니다. 팀에서는 8배수만 쓰자는 의견도 있어서요.",
    likeCount: 24,
    commentCount: 3,
  },
  {
    id: 2,
    author: "이상래",
    timeLabel: "자유 · 1시간 전",
    title: "오늘 컴포넌트 정리하면서 배운 것",
    body: "Variant를 상태 기준으로만 나누니 훨씬 관리가 쉬워졌어요. Liked=true / false 두 개만 두고 나머지는 인스턴스에서 조합해서 씁니다.",
    likeCount: 41,
    commentCount: 12,
  },
  {
    id: 3,
    author: "이준혁",
    timeLabel: "정보 · 3시간 전",
    title: "Dev Mode 핸드오프 체크리스트 공유",
    body: "색상은 hex, 간격은 4px 배수, 텍스트 스타일은 이름으로 관리. 이 세 가지만 지켜도 개발자와 커뮤니케이션 시간이 많이 줄어요.",
    likeCount: 87,
    commentCount: 19,
  },
];