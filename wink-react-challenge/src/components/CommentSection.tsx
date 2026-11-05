import { useState } from "react";
import { getClientId } from "../api/clientId";
import type { Comment } from "../types";
import { formatRelativeTime } from "../utils/time";

interface CommentSectionProps {
  comments: Comment[];
  onSubmit: (text: string) => Promise<void>;
}

// 댓글 목록은 부모(PostDetail)가 서버에서 받아 Props로 내려주고, 입력창 값만 여기 State로 남김
export default function CommentSection({ comments, onSubmit }: CommentSectionProps) {
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const me = getClientId();

  const submit = () => {
    if (!text.trim() || sending) return;
    setSending(true);
    onSubmit(text.trim())
      .then(() => setText("")) // 실패하면 입력한 글을 지우지 않음
      .catch(() => alert("댓글을 등록하지 못했어요."))
      .finally(() => setSending(false));
  };

  return (
    <section className="flex flex-col gap-3 pt-2">
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.nativeEvent.isComposing && submit()}
          placeholder="댓글을 입력하세요"
          className="min-w-0 flex-1 rounded-full border border-border bg-surface px-4 py-2 text-body outline-none focus:border-primary"
        />
        <button
          onClick={submit}
          disabled={sending}
          className="rounded-full bg-primary px-3.5 py-2 text-label font-bold text-surface disabled:opacity-50"
        >
          등록
        </button>
      </div>
      {comments.map((c) => (
        <div key={c.id} className="flex flex-col gap-1 rounded-card border border-border bg-surface p-4">
          <div className="flex items-center gap-2">
            {/* 같은 댓글도 보는 사람에 따라 다르게: 내가 쓴 건 "나", 남이 쓴 건 닉네임 */}
            <span className="text-body font-bold text-text">{c.clientId === me ? "나" : c.author}</span>
            <span className="text-caption text-text-secondary">{formatRelativeTime(c.createdAt)}</span>
          </div>
          <p className="text-body text-text-body">{c.body}</p>
        </div>
      ))}
    </section>
  );
}
