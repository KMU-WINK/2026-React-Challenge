// src/components/BookmarkButton.tsx
interface BookmarkButtonProps {
  isBookmarked: boolean;
  onToggle: () => void;
}

function BookmarkButton({ isBookmarked, onToggle }: BookmarkButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault(); // 카드를 감싼 <Link>의 페이지 이동이 같이 일어나지 않게 막기
        onToggle();
      }}
      className={`px-2.5 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] flex justify-start items-center ${
        isBookmarked ? "bg-indigo-50 outline-indigo-200" : "outline-gray-200"
      }`}
    >
      <div className="size-4 relative overflow-hidden">
        <div
          className={`w-2 h-2.5 left-[4.33px] top-[2.67px] absolute outline outline-[1.20px] outline-offset-[-0.60px] ${
            isBookmarked ? "bg-indigo-500 outline-indigo-500" : "outline-neutral-400"
          }`}
        ></div>
      </div>
    </button>
  );
}

export default BookmarkButton;