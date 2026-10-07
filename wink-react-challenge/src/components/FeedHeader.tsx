// src/components/FeedHeader.tsx
import { useState } from 'react';
import CategoryTab from './CategoryTab';

const categories = ['전체', '질문', '자유', '정보'];

function FeedHeader() {
  const [activeCategory, setActiveCategory] = useState('전체'); // 지금 선택된 카테고리

  return (
    <div className="self-stretch px-5 pt-5 pb-3 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-4">
      <div className="self-stretch inline-flex justify-between items-center">
        <div className="text-neutral-900 text-xl font-bold">커뮤니티</div>
        <div className="flex justify-start items-center gap-2">
          <div className="size-9 bg-gray-100 rounded-full flex justify-center items-center text-gray-500">
            ⌕
          </div>
          <div className="px-3.5 py-2 bg-indigo-500 rounded-full flex justify-center items-center">
            <div className="text-white text-xs font-bold">글쓰기</div>
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-center gap-2">
        {categories.map((category) => (
          <CategoryTab
            key={category}
            label={category}
            isActive={category === activeCategory}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>
    </div>
  );
}

export default FeedHeader;
