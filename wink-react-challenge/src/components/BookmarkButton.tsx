import { BookmarkIcon } from "./Icons";

type BookmarkButtonProps = {
  active: boolean;
  onToggle: () => void;
};

// 선택 여부와 변경 함수를 부모에게 Props로 받아요.
export default function BookmarkButton({
  active,
  onToggle,
}: BookmarkButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={active ? "북마크 해제" : "북마크 추가"}
      aria-pressed={active}
      className={`flex h-[30px] w-[38px] cursor-pointer items-center justify-center rounded-[999px] border ${
        active ? "border-[#D8DEFF] bg-[#F1F3FF]" : "border-[#E8EAEE] bg-white"
      }`}
    >
      <BookmarkIcon active={active} />
    </button>
  );
}
