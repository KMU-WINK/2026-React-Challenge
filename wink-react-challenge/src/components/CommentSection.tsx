import { useState } from "react";
import type { Comment } from "../data/posts";

interface CommentSectionProps {
  comments: Comment[];
  onAdd: (text: string) => void;
}

export default function CommentSection({ comments, onAdd }: CommentSectionProps) {
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
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
        <button onClick={submit} className="rounded-full bg-primary px-3.5 py-2 text-label font-bold text-surface">
          등록
        </button>
      </div>
      {comments.map((c) => (
        <div key={c.id} className="flex flex-col gap-1 rounded-card border border-border bg-surface p-4">
          <div className="flex items-center gap-2">
            <span className="text-body font-bold text-text">{c.author}</span>
            <span className="text-caption text-text-secondary">{c.time}</span>
          </div>
          <p className="text-body text-text-body">{c.text}</p>
        </div>
      ))}
    </section>
  );
}
