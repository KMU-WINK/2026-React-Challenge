import CategoryTab from "./CategoryTab";

const categories = ["전체", "질문", "자유", "정보"];

interface FeedHeaderProps {
  active: string;
  onChange: (category: string) => void;
}

// 어떤 탭이 선택됐는지는 목록(PostList)도 알아야 해서 State를 위로 끌어올리고 Props로 받음
export default function FeedHeader({ active, onChange }: FeedHeaderProps) {
  return (
    <header className="flex flex-col gap-4 border-b border-border bg-surface px-5 pt-5 pb-[13px]">
      <div className="flex items-center justify-between">
        <h1 className="text-title font-bold tracking-[-0.01em] text-text">커뮤니티</h1>
        <div className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-full bg-[#F1F3F6] text-[15px] text-[#6B7280]">
            ⌕
          </div>
          <button className="rounded-full bg-primary px-3.5 py-2 text-label font-bold text-surface">글쓰기</button>
        </div>
      </div>
      <div className="flex gap-2">
        {categories.map((c) => (
          <CategoryTab key={c} label={c} isActive={c === active} onClick={() => onChange(c)} />
        ))}
      </div>
    </header>
  );
}
