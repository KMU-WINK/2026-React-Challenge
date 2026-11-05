// 로딩/에러 화면. 빈 화면 대신 실제 카드 모양의 스켈레톤을 보여줘서 "고장났나?" 싶지 않게 함

export function CardSkeleton() {
  return (
    <div className="flex animate-pulse flex-col gap-3 rounded-card border border-border bg-surface p-[17px]">
      <div className="flex items-center gap-2.5">
        <div className="size-9 rounded-full bg-border" />
        <div className="flex flex-col gap-1.5">
          <div className="h-3 w-16 rounded bg-border" />
          <div className="h-2.5 w-24 rounded bg-border" />
        </div>
      </div>
      <div className="h-4 w-3/4 rounded bg-border" />
      <div className="h-3 w-full rounded bg-border" />
      <div className="h-3 w-2/3 rounded bg-border" />
      <div className="flex gap-2 pt-1">
        <div className="h-8 w-14 rounded-full bg-border" />
        <div className="h-8 w-16 rounded-full bg-border" />
      </div>
    </div>
  );
}

export function ErrorView({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center gap-3 py-20">
      <p className="text-body text-like">{message}</p>
      <button onClick={onRetry} className="rounded-full border border-border bg-surface px-3.5 py-2 text-label text-text">
        다시 시도
      </button>
    </div>
  );
}
