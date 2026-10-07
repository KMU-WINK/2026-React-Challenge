// src/components/CommentSection.tsx
import { useState } from 'react';

interface Comment {
  id: number;
  author: string;
  timeLabel: string;
  text: string;
}

// 디자인에 이미 있던 기존 댓글 3개를 초기값으로
const initialComments: Comment[] = [
  {
    id: 1,
    author: '이상래',
    timeLabel: '10분 전',
    text: '4배수 기준으로 4/8/12/16/24/32만 쓰고 있어요. 12는 카드 내부 gap에서 꼭 필요해서 남겨두는 편입니다.',
  },
  {
    id: 2,
    author: '박승환',
    timeLabel: '7분 전',
    text: '토큰 이름을 space/12 처럼 값 그대로 두면 개발자가 바로 읽을 수 있어서 편합니다.',
  },
  {
    id: 3,
    author: '류진',
    timeLabel: '2분 전',
    text: '저희도 같은 방식이요. 예외가 생기면 토큰을 늘리기보다 레이아웃을 다시 봅니다.',
  },
];

function CommentSection() {
  const [comment, setComment] = useState(''); // 입력창에 지금 쓰여있는 글
  const [comments, setComments] = useState<Comment[]>(initialComments); // 댓글 목록

  const handleSubmit = () => {
    if (!comment.trim()) return; // 빈 칸이면 아무 일도 안 함
    setComments([
      ...comments,
      { id: Date.now(), author: '나', timeLabel: '방금 전', text: comment },
    ]);
    setComment('');
  };

  return (
    <>
      {/* 댓글 입력창 */}
      <div className="self-stretch pl-4 pr-2 py-2 bg-gray-100 rounded-full inline-flex justify-start items-center gap-2">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
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

      {/* 댓글 목록 */}
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
                  {c.author}
                </div>
                <div className="text-neutral-400 text-xs font-normal">
                  {c.timeLabel}
                </div>
              </div>
              <div className="text-zinc-600 text-sm font-normal leading-6">
                {c.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CommentSection;
