export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-5 border-b border-border">
      <button
        aria-label="뒤로 가기"
        className="w-6 text-left text-[18px] text-text"
      >
        ←
      </button>
      <h1 className="text-text text-body font-bold">게시글</h1>
      <button
        aria-label="더보기"
        className="w-6 text-right text-[18px] text-text-secondary"
      >
        ⋯
      </button>
    </header>
  );
}
