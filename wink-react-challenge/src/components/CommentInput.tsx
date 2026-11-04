export default function CommentInput() {
  return (
    <div className="flex py-2 pr-2 pl-4 items-center gap-2 rounded-full bg-chat">
      <input
        aria-label="댓글 입력"
        placeholder="댓글을 입력하세요"
        className="flex-1 bg-transparent outline-none text-body placeholder:text-text-secondary"
      />
      <button className="flex py-2 px-3.5 rounded-full bg-primary text-label font-bold text-surface">
        등록
      </button>
    </div>
  );
}
