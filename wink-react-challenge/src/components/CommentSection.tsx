import { useState } from 'react';

interface Comment {
  id: number;
  author: string;
  timeLabel: string;
  text: string;
}

const initialComments: Comment[] = [
  {
    id: 1,
    author: '2022**** 박현빈',
    timeLabel: '5분 전',
    text: '4배수 기준으로 4/8/12/16/24/32만 쓰고 있어요. 12는 카드 내부 gap에서 꼭 필요해서 남겨두는 편입니다.',
  },
  {
    id: 2,
    author: '2023**** 박승환',
    timeLabel: '7분 전',
    text: '토큰 이름을 space/12 처럼 값 그대로 두면 개발자가 바로 읽을 수 있어서 편합니다.',
  },
  {
    id: 3,
    author: '2025**** 조성래',
    timeLabel: '2분 전',
    text: '저희도 같은 방식이요. 예외가 생기면 토큰을 늘리기보다 레이아웃을 다시 봅니다.',
  },
];

function CommentSection() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const handleSubmit = () => {
    if (!comment.trim()) return;
    setComments([
      ...comments,
      { id: Date.now(), author: '나', timeLabel: '방금 전', text: comment },
    ]);
    setComment('');
  };

  return (
    <>
      {/* 댓글 입력창 */}
      <div className="flex items-center gap-2 py-2 pr-2 pl-4 rounded-full bg-muted">
        <input
          aria-label="댓글 입력"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
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

      {/* 댓글 목록 */}
      <ul className="flex flex-col gap-4">
        {comments.map((c) => (
          <li key={c.id} className="flex items-start gap-2.5">
            <div className="size-8 shrink-0 rounded-full bg-border" />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-label font-bold text-text">
                  {c.author}
                </span>
                <span className="text-caption text-text-secondary">
                  {c.timeLabel}
                </span>
              </div>
              <p className="text-body text-text-body leading-[1.6]">{c.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentSection;
