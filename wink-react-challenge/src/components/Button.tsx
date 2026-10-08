// import heartIcon from '../assets/heart.svg';
// import heartFilledIcon from '../assets/heart-fill.svg';
// import bookmarkIcon from '../assets/bookmark.svg';
// import bookmarkFilledIcon from '../assets/bookmark-fill.svg';

// type ButtonProps = {
//   type: 'like' | 'bookmark'; // Figma의 type
//   active?: boolean; // Figma의 Liked / Saved (안 넘기면 false)
//   count?: number; // 좋아요 숫자 (북마크는 없음)
// };

// export default function Button({ type, active = false, count }: ButtonProps) {
//   // 1) 아이콘 고르기
//   let icon = heartIcon;
//   if (type === 'like' && active) icon = heartFilledIcon;
//   if (type === 'bookmark') icon = active ? bookmarkFilledIcon : bookmarkIcon;

//   // 2) 색 고르기
//   let colorClass = 'border-border text-icon font-medium'; // 꺼짐
//   if (type === 'like' && active)
//     colorClass = 'bg-like-soft border-like-line text-like font-bold';
//   if (type === 'bookmark' && active)
//     colorClass = 'bg-primary-soft border-primary-line';

//   return (
//     <button
//       aria-label={type === 'like' ? '좋아요' : '북마크'}
//       className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-label ${colorClass}`}
//     >
//       <img src={icon} alt="" className="size-4" />
//       {count !== undefined && <span>{count}</span>}
//     </button>
//   );
// }
