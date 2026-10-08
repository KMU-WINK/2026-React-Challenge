import bookmarkIcon from '../assets/bookmark.svg';
import bookmarkFilledIcon from '../assets/bookmark-fill.svg';

interface BookmarkButtonProps {
  isBookmarked: boolean;
  onToggle: () => void;
}

function BookmarkButton({ isBookmarked, onToggle }: BookmarkButtonProps) {
  return (
    <button
      aria-label="북마크"
      onClick={(e) => {
        e.preventDefault(); // 카드를 감싼 <Link>의 페이지 이동 막기
        onToggle();
      }}
      className={`flex items-center px-2.5 py-1.5 rounded-full border ${
        isBookmarked ? 'bg-primary-soft border-primary-line' : 'border-border'
      }`}
    >
      <img
        src={isBookmarked ? bookmarkFilledIcon : bookmarkIcon}
        alt=""
        className="size-4"
      />
    </button>
  );
}

export default BookmarkButton;
