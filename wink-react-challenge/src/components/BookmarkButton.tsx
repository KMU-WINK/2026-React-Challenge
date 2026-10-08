interface BookmarkButtonProps {
  isBookmarked: boolean;
  onToggle: () => void;
}

export default function BookmarkButton({ isBookmarked, onToggle }: BookmarkButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault(); // 카드 전체가 Link라서 페이지 이동을 막음
        onToggle();
      }}
      className={`flex items-center rounded-full border px-[11px] py-[7px] ${
        isBookmarked ? "border-[#C9D4FC] bg-[#EEF1FF] text-primary" : "border-border text-[#6B7280]"
      }`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16">
        <path
          d="M4 2h8a1 1 0 0 1 1 1v11l-5-3-5 3V3a1 1 0 0 1 1-1z"
          fill={isBookmarked ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
}
