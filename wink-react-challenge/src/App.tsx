type Post = {
  author: string;
  category: string;
  time: string;
  title: string;
  body: string;
  likes: number;
  comments: number;
  bookmarked?: boolean;
  bodyWidth: string;
};

const posts: Post[] = [
  {
    author: "이서준",
    category: "질문",
    time: "12분 전",
    title: "디자인 시스템 토큰, 어디까지 쪼개는 게 좋을까요?",
    body: "컬러는 primary/secondary 정도로 정리했는데 spacing을 4배수로 잡을 때 8과 12를 둘 다 쓰는 게 맞는지 고민입니다. 팀에서는 8배수만 쓰자는 의견도 있었어요.",
    likes: 24,
    comments: 6,
    bodyWidth: "320.13px",
  },
  {
    author: "이상래",
    category: "자유",
    time: "1시간 전",
    title: "오늘 컴포넌트 정리하면서 배운 것",
    body: "Variant를 상태 기준으로만 나누니 훨씬 관리가 쉬워졌어요. Liked=true / false 두 개만 두고 나머지는 인스턴스로 관리했습니다.",
    likes: 41,
    comments: 12,
    bodyWidth: "323.16px",
  },
  {
    author: "이준혁",
    category: "정보",
    time: "3시간 전",
    title: "Dev Mode 핸드오프 체크리스트 공유",
    body: "색상은 hex, 간격은 4px 배수, 텍스트 스타일은 이름으로 관리. 이 세 가지만 지켜도 개발자와 커뮤니케이션 시간이 줄어듭니다.",
    likes: 87,
    comments: 19,
    bookmarked: true,
    bodyWidth: "323.41px",
  },
];

function SearchIcon() {
  return (
    <span className="block h-[18px] w-[10px] text-[15px] leading-[18px] font-normal text-[#8A9099]">
      ⌕
    </span>
  );
}

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 13.2L7.2 12.48C4.05 9.62 2.2 7.92 2.2 5.85C2.2 4.18 3.5 2.9 5.15 2.9C6.08 2.9 6.98 3.33 7.5 4.03C8.02 3.33 8.92 2.9 9.85 2.9C11.5 2.9 12.8 4.18 12.8 5.85C12.8 7.92 10.95 9.62 7.8 12.48L8 13.2Z"
        stroke="#8A9099"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookmarkIcon({ active = false }: { active?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M4.5 2.5H11.5V13L8 10.5L4.5 13V2.5Z"
        fill={active ? "#4C6EF5" : "none"}
        stroke={active ? "#4C6EF5" : "#8A9099"}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookmarkButton({ active = false }: { active?: boolean }) {
  return (
    <div
      className={`flex h-[30px] w-[38px] items-center justify-center rounded-[999px] border ${
        active ? "border-[#D8DEFF] bg-[#F1F3FF]" : "border-[#E8EAEE] bg-white"
      }`}
    >
      <BookmarkIcon active={active} />
    </div>
  );
}

function PostCard({
  author,
  category,
  time,
  title,
  body,
  likes,
  comments,
  bookmarked = false,
  bodyWidth,
}: Post) {
  return (
    <article className="w-[358px] rounded-[16px] border border-[#E8EAEE] bg-white p-[17px]">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 shrink-0 rounded-full bg-[#EEF0F3]" />

        <div>
          <p className="m-0 text-[13px] leading-[16px] font-medium text-[#14161A]">
            {author}
          </p>

          <p className="m-0 mt-1 text-[12px] leading-[16px] font-normal text-[#8A9099]">
            {category} · {time}
          </p>
        </div>
      </div>

      <h2
        className="m-0 mt-3 overflow-hidden text-[14px] leading-[21px] font-medium text-[#14161A]"
        style={{
          width: "324px",
          height: "21px",
        }}
      >
        {title}
      </h2>

      <p
        className="m-0 mt-2 overflow-hidden text-[14px] leading-[23.1px] font-normal text-[#4A5058]"
        style={{
          width: bodyWidth,
          height: "47px",
        }}
      >
        {body}
      </p>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-[30px] items-center gap-[5px] rounded-[999px] border border-[#E8EAEE] bg-white px-[11px]">
            <HeartIcon />
            <span className="text-[13px] leading-[16px] font-medium text-[#8A9099]">
              {likes}
            </span>
          </div>

          <div className="flex h-[30px] items-center rounded-[999px] border border-[#E8EAEE] bg-white px-[11px]">
            <span className="text-[13px] leading-[16px] font-medium text-[#8A9099]">
              댓글 {comments}
            </span>
          </div>
        </div>

        <BookmarkButton active={bookmarked} />
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <main className="mx-auto min-h-[844px] w-[390px] overflow-hidden rounded-[20px] bg-[#F7F8FA]">
        <header className="h-[113px] border-b border-[#E8EAEE] bg-white px-5 pt-5 pb-[13px]">
          <div className="flex items-start justify-between">
            <h1 className="m-0 text-[20px] leading-[28px] font-bold text-[#14161A]">
              커뮤니티
            </h1>

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F8FA]">
                <SearchIcon />
              </div>

              <div className="flex h-8 items-center justify-center rounded-[999px] bg-[#4C6EF5] px-4">
                <span className="text-[13px] leading-[16px] font-medium text-white">
                  글쓰기
                </span>
              </div>
            </div>
          </div>

          <nav className="mt-[13px] flex items-center gap-2">
            <div className="flex h-[28px] w-[52px] items-center justify-center rounded-[999px] bg-[#14161A]">
              <span className="text-[13px] leading-[16px] font-medium text-white">
                전체
              </span>
            </div>

            <div className="flex h-[28px] items-center justify-center rounded-[999px] bg-[#F7F8FA] px-[14px]">
              <span className="text-[13px] leading-[16px] font-medium text-[#8A9099]">
                질문
              </span>
            </div>

            <div className="flex h-[28px] items-center justify-center rounded-[999px] bg-[#F7F8FA] px-[14px]">
              <span className="text-[13px] leading-[16px] font-medium text-[#8A9099]">
                자유
              </span>
            </div>

            <div className="flex h-[28px] items-center justify-center rounded-[999px] bg-[#F7F8FA] px-[14px]">
              <span className="text-[13px] leading-[16px] font-medium text-[#8A9099]">
                정보
              </span>
            </div>
          </nav>
        </header>

        <section className="flex flex-col gap-3 px-4 pt-4 pb-6">
          {posts.map((post) => (
            <PostCard key={post.author} {...post} />
          ))}
        </section>
      </main>
    </div>
  );
}
