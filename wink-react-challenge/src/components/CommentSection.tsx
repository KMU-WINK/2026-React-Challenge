import { useState } from 'react';
import type { Comment } from '../types';
import { getClientId } from '../api/clientId';
import { formatRelativeTime } from '../utils/time';

interface CommentSectionProps {
  comments: Comment[];
  onSubmit: (text: string) => void;
}

function CommentSection({ comments, onSubmit }: CommentSectionProps) {
  const [value, setValue] = useState('');
  const myClientId = getClientId();

  const handleSubmit = () => {
    if (!value.trim()) return;
    onSubmit(value);
    setValue('');
  };

  return (
    <>
      <div className="flex items-center gap-2 py-2 pr-2 pl-4 rounded-full bg-muted">
        <input
          aria-label="댓글 입력"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.nativeEvent.isComposing) handleSubmit();
          }}
          placeholder="댓글을 입력하세요"
          className="flex-1 min-w-0 bg-transparent outline-none text-body text-text placeholder:text-text-secondary"
        />
        <button
          onClick={handleSubmit}
          className="px-3.5 py-2 rounded-full bg-primary text-label font-bold text-surface"
        >
          등록
        </button>
      </div>

      <ul className="flex flex-col gap-4">
        {comments.map((c) => (
          <li key={c.id} className="flex items-start gap-2.5">
            <div className="size-8 shrink-0 rounded-full bg-border" />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-label font-bold text-text">
                  {c.clientId === myClientId ? '나' : c.author}
                </span>
                <span className="text-caption text-text-secondary">
                  {formatRelativeTime(c.createdAt)}
                </span>
              </div>
              <p className="text-body text-text-body leading-[1.6]">{c.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentSection;
