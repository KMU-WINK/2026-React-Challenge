import { useState } from "react";
import type { Comment } from "../types";
import { getClientId } from "../api/clientId";
import { formatRelativeTime } from "../utils/time";

interface CommentSectionProps {
  comments: Comment[];
  onSubmit: (text: string) => void;
}

function CommentSection({ comments, onSubmit }: CommentSectionProps) {
  const [comment, setComment] = useState("");
  const myClientId = getClientId();

  const handleSubmit = () => {
    if (!comment.trim()) return;
    onSubmit(comment);
    setComment("");
  };

  return (
    <>
      <div className="self-stretch pl-4 pr-2 py-2 bg-gray-100 rounded-full inline-flex justify-start items-center gap-2">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.nativeEvent.isComposing) handleSubmit();
          }}
          placeholder="댓글을 입력하세요"
          className="flex-1 min-w-0 bg-transparent text-neutral-900 text-sm font-normal outline-none placeholder:text-neutral-400"
        />
        <button
          onClick={handleSubmit}
          className="px-3.5 py-2 bg-indigo-500 rounded-full"
        >
          <div className="text-white text-xs font-bold">등록</div>
        </button>
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        {comments.map((c) => (
          <div
            key={c.id}
            className="self-stretch inline-flex justify-start items-start gap-2.5"
          >
            <div className="size-8 bg-gray-200 rounded-full shrink-0"></div>
            <div className="flex flex-col justify-start items-start gap-1">
              <div className="inline-flex justify-start items-center gap-2">
                <div className="text-neutral-900 text-xs font-bold">
                  {c.clientId === myClientId ? "나" : c.author}
                </div>
                <div className="text-neutral-400 text-xs font-normal">
                  {formatRelativeTime(c.createdAt)}
                </div>
              </div>
              <div className="text-zinc-600 text-sm font-normal leading-6">
                {c.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CommentSection;
