import { SearchIcon } from "./Icons";

export default function FeedHeader() {
  return (
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

      <nav
        className="mt-[13px] flex items-center gap-2"
        aria-label="게시글 카테고리"
      >
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
  );
}
