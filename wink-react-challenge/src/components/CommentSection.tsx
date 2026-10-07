import { useState } from "react";
import type { FormEvent } from "react";
import type { PostComment } from "../data/posts";

type CommentSectionProps = {
  comments: PostComment[];
  totalCount: number;
  onAddComment: (text: string) => void;
};

export default function CommentSection({
  comments,
  totalCount,
  onAddComment,
}: CommentSectionProps) {
  // 입력창의 value와 onChange를 연결한 제어 컴포넌트예요.
  const [text, setText] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText) return;
    onAddComment(trimmedText);
    setText("");
  }

  return (
    <section className="mt-5" aria-labelledby="comments-heading">
      <h2
        id="comments-heading"
        className="m-0 mb-3 text-[14px] font-bold text-[#14161A]"
      >
        댓글 {totalCount}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 rounded-[999px] bg-[#F7F8FA] py-2 pr-2 pl-4"
      >
        <input
          aria-label="댓글 입력"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="댓글을 입력하세요"
          className="min-w-0 flex-1 bg-transparent text-[14px] text-[#14161A] outline-none placeholder:text-[#8A9099]"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="shrink-0 cursor-pointer rounded-[999px] bg-[#4C6EF5] px-4 py-2 text-[13px] font-medium text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          등록
        </button>
      </form>

      <div className="mt-4 space-y-4" aria-live="polite">
        {comments.map((comment) => (
          <article key={comment.id} className="flex items-start gap-3">
            <div className="h-8 w-8 shrink-0 rounded-full bg-[#EEF0F3]" />
            <div className="min-w-0 flex-1">
              <p className="m-0 text-[13px] font-medium text-[#14161A]">
                {comment.author}
              </p>
              <p className="m-0 mt-1 whitespace-pre-wrap break-words text-[14px] leading-[23.1px] text-[#4A5058]">
                {comment.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
