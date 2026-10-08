import { useState } from 'react';
import CategoryTab from './CategoryTab';

const categories = ['전체', '질문', '자유', '정보'];

function FeedHeader() {
  const [activeCategory, setActiveCategory] = useState('전체');

  return (
    <header className="flex flex-col gap-4 pt-5 px-5 pb-3 bg-surface border-b border-border">
      <div className="flex items-center justify-between">
        <h1 className="text-title font-bold text-text tracking-[-0.2px]">
          커뮤니티
        </h1>
        <div className="flex items-center gap-2">
          <button
            aria-label="검색"
            className="size-9 flex items-center justify-center rounded-full bg-muted text-icon text-[15px]"
          >
            ⌕
          </button>
          <button className="px-3.5 py-2 rounded-full bg-primary text-label font-bold text-surface">
            글쓰기
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        {categories.map((category) => (
          <CategoryTab
            key={category}
            label={category}
            isActive={category === activeCategory}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>
    </header>
  );
}

export default FeedHeader;
