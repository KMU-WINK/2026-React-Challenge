type CommentItemProps = {
  author: string;
  time: string;
  text: string;
};

export default function CommentItem({ author, time, text }: CommentItemProps) {
  return (
    <li className="flex items-start gap-2.5">
      <div className="size-8 shrink-0 rounded-full bg-border" />
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-text text-label font-bold">{author}</span>
          <span className="text-text-secondary text-caption">{time}</span>
        </div>
        <p className="text-text-body text-body leading-[1.6]">{text}</p>
      </div>
    </li>
  );
}
