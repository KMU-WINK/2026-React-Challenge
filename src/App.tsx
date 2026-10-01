import heartIcon from "./assets/heart.svg";
import bookmarkIcon from "./assets/bookmark.svg";

const comments = [
  {
    id: 1,
    name: "이상래",
    time: "10분 전",
    text: "4배수 기준으로 4/8/12/16/24/32만 쓰고 있어요. 12는 카드 내부 gap에서 꼭 필요해서 남겨두는 편입니다.",
  },
  {
    id: 2,
    name: "박승환",
    time: "7분 전",
    text: "토큰 이름을 space/12 처럼 값 그대로 두면 개발자가 바로 읽을 수 있어서 편합니다.",
  },
  {
    id: 3,
    name: "류진",
    time: "2분 전",
    text: "저희도 같은 방식이요. 예외가 생기면 토큰을 늘리기보다 레이아웃을 다시 봅니다.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-primary-bg font-sans">
      <div className="mx-auto min-h-screen w-full max-w-[390px] overflow-hidden rounded-frame bg-surface text-ink">
        {/* 헤더 */}
        <header className="flex h-14 items-center justify-between border-b border-line px-5">
          <button type="button" aria-label="뒤로 가기">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 12H4M10 6l-6 6 6 6" />
            </svg>
          </button>
          <h1 className="text-base font-bold">게시글</h1>
          <button
            type="button"
            aria-label="더보기"
            className="text-xl leading-none tracking-widest text-secondary"
          >
            ···
          </button>
        </header>

        {/* 본문 */}
        <main className="flex flex-col gap-5 p-5">
          {/* 작성자 */}
          <div className="flex items-center gap-3">
            <div className="size-11 shrink-0 rounded-full bg-border" />
            <div>
              <p className="text-base font-bold">이서준</p>
              <p className="text-sm text-secondary">질문 · 12분 전</p>
            </div>
          </div>

          {/* 제목 + 내용 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[22px] leading-[1.4] font-bold">
              디자인 시스템 토큰, 어디까지 쪼개는 게 좋을까요?
            </h2>
            <p className="text-base leading-7 text-body">
              컬러는 primary/secondary 정도로 정리했는데 spacing을 4배수로 잡을
              때 8과 12를 둘 다 쓰는 게 맞는지 고민입니다. 팀에서는 8배수만
              쓰자는 의견도 있어서요.
            </p>
          </div>

          {/* 좋아요 / 댓글 / 북마크 */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex h-9 items-center gap-1.5 rounded-full border border-line px-3.5 text-sm text-body"
            >
              <img src={heartIcon} alt="" className="size-4" />
              24
            </button>
            <button
              type="button"
              className="flex h-9 items-center rounded-full border border-line px-3.5 text-sm text-body"
            >
              댓글 3
            </button>
            <button
              type="button"
              aria-label="북마크"
              className="ml-auto flex size-9 items-center justify-center rounded-full border border-line"
            >
              <img src={bookmarkIcon} alt="" className="size-4" />
            </button>
          </div>

          {/* 댓글 입력창 */}
          <div className="flex items-center gap-2 rounded-full bg-input py-2 pr-2 pl-4">
            <input
              type="text"
              placeholder="댓글을 입력하세요"
              className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-secondary"
            />
            <button
              type="button"
              className="h-10 shrink-0 rounded-full bg-primary px-5 text-sm font-bold text-white"
            >
              등록
            </button>
          </div>

          {/* 댓글 목록 */}
          <ul className="flex flex-col gap-4">
            {comments.map((comment) => (
              <li key={comment.id} className="flex gap-3">
                <div className="size-9 shrink-0 rounded-full bg-border" />
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-bold">{comment.name}</span>
                    <span className="ml-1 text-secondary">{comment.time}</span>
                  </p>
                  <p className="mt-1 text-[15px] leading-6 text-body">
                    {comment.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
