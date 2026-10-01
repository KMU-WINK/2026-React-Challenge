const posts = [
  {
    author: "이서준",
    meta: "질문 · 12분 전",
    title: "디자인 시스템 토큰, 어디까지 쪼개는 게 좋을까요?",
    body: "컬러는 primary/secondary 정도로 정리했는데 spacing을 4배수로 잡을 때 8과 12를 둘 다 쓰는 게 맞는",
    likes: 24,
    comments: 6,
    saved: false,
  },
  {
    author: "이상래",
    meta: "자유 · 1시간 전",
    title: "오늘 컴포넌트 정리하면서 배운 것",
    body: "Variant를 상태 기준으로만 나누니 훨씬 관리가 쉬워졌어요. Liked=true / false 두 개만 두고 나머지는 인스턴스",
    likes: 41,
    comments: 12,
    saved: false,
  },
  {
    author: "이준혁",
    meta: "정보 · 3시간 전",
    title: "Dev Mode 핸드오프 체크리스트 공유",
    body: "색상은 hex, 간격은 4px 배수, 텍스트 스타일은 이름으로 관리. 이 세 가지만 지켜도 개발자와 커뮤니케이션 시간이",
    likes: 87,
    comments: 19,
    saved: true,
  },
];

const tabs = ["전체", "질문", "자유", "정보"];

export default function App() {
  return (
    <div className="mx-auto my-10 min-h-[844px] w-full max-w-[390px] overflow-hidden rounded-frame bg-bg shadow-[0_12px_40px_rgba(20,22,26,0.1)]">
      <header className="flex flex-col gap-4 border-b border-border bg-surface px-5 pt-5 pb-[13px]">
        <div className="flex items-center justify-between">
          <h1 className="text-title font-bold tracking-[-0.01em] text-text">
            커뮤니티
          </h1>
          <div className="flex items-center gap-2">
            <div className="flex size-9 items-center justify-center rounded-full bg-[#F1F3F6] text-[15px] text-[#6B7280]">
              ⌕
            </div>
            <button className="rounded-full bg-primary px-3.5 py-2 text-label font-bold text-surface">
              글쓰기
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          {tabs.map((tab, i) => (
            <span
              key={tab}
              className={`rounded-full px-3.5 py-1.5 text-label font-medium ${
                i === 0 ? "bg-text text-surface" : "bg-[#F1F3F6] text-[#6B7280]"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </header>

      <main className="flex flex-col gap-3 px-4 pt-4 pb-6">
        {posts.map((post) => (
          <article
            key={post.title}
            className="flex flex-col gap-3 rounded-card border border-border bg-surface p-[17px]"
          >
            <div className="flex items-center gap-2.5">
              <div className="size-9 rounded-full bg-border" />
              <div className="flex flex-col gap-0.5">
                <span className="text-body font-bold text-text">
                  {post.author}
                </span>
                <span className="text-caption text-text-secondary">
                  {post.meta}
                </span>
              </div>
            </div>
            <h2 className="text-body leading-[21px] font-medium text-text">
              {post.title}
            </h2>
            <p className="line-clamp-2 text-body leading-[1.65] text-text-body">
              {post.body}
            </p>
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full border border-border px-[11px] py-[7px] text-label font-medium text-[#6B7280]">
                  ♡ {post.likes}
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-border px-[11px] py-[7px] text-label font-medium text-[#6B7280]">
                  댓글 {post.comments}
                </span>
              </div>
              <span
                className={`flex items-center rounded-full border px-[11px] py-[7px] ${
                  post.saved
                    ? "border-[#C9D4FC] bg-[#EEF1FF] text-primary"
                    : "border-border text-[#6B7280]"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <path
                    d="M4 2h8a1 1 0 0 1 1 1v11l-5-3-5 3V3a1 1 0 0 1 1-1z"
                    fill={post.saved ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
