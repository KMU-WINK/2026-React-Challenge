// import heartIcon from './assets/heart.svg';
// import bookmarkIcon from './assets/bookmark.svg';

// export default function App() {
//   return (
//     // 전체 프레임
//     <div className="min-h-screen flex items-center justify-center bg-border">
//       <div className="flex w-[390px] h-[844px] flex-col rounded-frame bg-surface shadow-[0_12px_40px_0_rgba(20,22,26,0.10)] overflow-hidden">
//         {/* 헤더 영역 */}
//         <header className="flex px-5 py-5 justify-between items-center brder-b border-border">
//           <button className="w-6 text-left text-[18px] text-text">←</button>
//           <h1 className="text-text text-body font-bold">게시글</h1>
//           <button className="w-6 text-right text-[18px] text-text-secondary">
//             ⋯
//           </button>
//         </header>
//         {/* 메인영역 */}
//         <main className="flex p-5 flex-col gap-5 flex-1 overflow-hidden">
//           {/* 상단 작성자 영역 */}
//           <div className="flex items-center gap-2.5">
//             {/* 동그라미 */}
//             <div className="size-10 shrink-0 rounded-full bg-border"></div>
//             <div className="flex flex-col gap-0.5">
//               <span className="text-text text-body font-bold">박승환</span>
//               <span className="text-text-secondary text-caption">
//                 질문 · 10분 전
//               </span>
//             </div>
//           </div>
//           {/* 제목 + 본문 */}
//           <div className="flex flex-col gap-3">
//             <h2 className="text-text text-title font-bold leading-[28px] tracking-[-0.2px]">
//               디자인 시스템 토큰, 어디까지 쪼개는 게 좋을까요?
//             </h2>
//             <p className="text-text-body text-body leading-[1.75]">
//               컬러는 primary/secondary 정도로 정리했는데 spacing을 4배수로 잡을
//               때 8과 12를 둘 다 쓰는 게 맞는지 고민입니다. 팀에서는 8배수만
//               쓰자는 의견도 있어서요.
//             </p>
//           </div>
//           {/* 좋아요 댓글 북마크 */}
//           <div className="flex items-center justify-between h-[59px] border-y border-border">
//             <div className="flex items-center gap-2">
//               <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-border text-icon text-label font-medium">
//                 <img src={heartIcon} alt="" className="size-4" />
//                 24
//               </button>
//               <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-border text-icon text-label font-medium">
//                 <span>댓글</span>
//                 <span>3</span>
//               </button>
//             </div>
//             <button className="flex items-center px-2.5 py-1.5 rounded-full border border-border">
//               <img src={bookmarkIcon} alt="북마크" className="size-4" />
//             </button>
//           </div>
//           {/* 댓글 등록 부분 */}
//           <div className="flex py-2 pr-2 pl-4 items-center gap-2 rounded-full bg-chat ">
//             <input
//               placeholder="댓글을 입력하세요"
//               className="flex-1 bg-transparent outline-none text-body placeholder:text-text-secondary"
//             />
//             <button className="flex py-2 px-3.5 rounded-full bg-primary text-label font-bold text-surface">
//               등록
//             </button>
//           </div>
//           {/* 댓글 */}
//           <ul className="flex flex-col gap-4">
//             <li className="flex items-start gap-2.5">
//               <div className="size-8 shrink-0 rounded-full bg-border" />
//               <div className="flex flex-col gap-1">
//                 <div className="flex items-center gap-2">
//                   <span className="text-text text-label font-bold">
//                     2025****조성래
//                   </span>
//                   <span className="text-text-secondary text-caption">
//                     5분 전
//                   </span>
//                 </div>
//                 <p className="text-text-body text-body leading-[1.6]">
//                   4배수 기준으로 4/8/12/16/24/32만 쓰고 있어요. 12는 카드 내부
//                   gap에서 꼭 필요해서 남겨두는 편입니다.
//                 </p>
//               </div>
//             </li>
//             <li className="flex items-start gap-2.5">
//               <div className="size-8 shrink-0 rounded-full bg-border" />
//               <div className="flex flex-col gap-1">
//                 <div className="flex items-center gap-2">
//                   <span className="text-text text-label font-bold">
//                     2022**** 이서준
//                   </span>
//                   <span className="text-text-secondary text-caption">
//                     10분 전
//                   </span>
//                 </div>
//                 <p className="text-text-body text-body leading-[1.6]">
//                   4배수 기준으로 4/8/12/16/24/32만 쓰고 있어요. 12는 카드 내부
//                   gap에서 꼭 필요해서 남겨두는 편입니다.
//                 </p>
//               </div>
//             </li>
//             <li className="flex items-start gap-2.5">
//               <div className="size-8 shrink-0 rounded-full bg-border" />
//               <div className="flex flex-col gap-1">
//                 <div className="flex items-center gap-2">
//                   <span className="text-text text-label font-bold">
//                     2022**** 박현빈
//                   </span>
//                   <span className="text-text-secondary text-caption">
//                     10분 전
//                   </span>
//                 </div>
//                 <p className="text-text-body text-body leading-[1.6]">
//                   4배수 기준으로 4/8/12/16/24/32만 쓰고 있어요. 12는 카드 내부
//                   gap에서 꼭 필요해서 남겨두는 편입니다.
//                 </p>
//               </div>
//             </li>
//           </ul>
//         </main>
//       </div>
//     </div>
//   );
// }

// import Header from './components/Header';
// import Button from './components/Button';
// import CommentInput from './components/CommentInput';
// import CommentItem from './components/Comment';

// const comments = [
//   {
//     id: 1,
//     author: '2025**** 조성래',
//     time: '10분 전',
//     text: '4배수 기준으로 4/8/12/16/24/32만 쓰고 있어요. 12는 카드 내부 gap에서 꼭 필요해서 남겨두는 편입니다.',
//   },
//   {
//     id: 2,
//     author: '2022**** 이서준',
//     time: '7분 전',
//     text: '토큰 이름을 space/12 처럼 값 그대로 두면 개발자가 바로 읽을 수 있어서 편합니다.',
//   },
//   {
//     id: 3,
//     author: '2022**** 박현빈',
//     time: '2분 전',
//     text: '저희도 같은 방식이요. 예외가 생기면 토큰을 늘리기보다 레이아웃을 다시 봅니다.',
//   },
// ];

// export default function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-border">
//       <div className="flex w-[390px] h-[844px] flex-col rounded-frame bg-surface shadow-[0_12px_40px_0_rgba(20,22,26,0.1)] overflow-hidden">
//         <Header />

//         <main className="flex p-5 flex-col gap-5 flex-1 overflow-hidden">
//           {/* 작성자 */}
//           <div className="flex items-center gap-2.5">
//             <div className="size-10 shrink-0 rounded-full bg-border" />
//             <div className="flex flex-col gap-0.5">
//               <span className="text-text text-body font-bold">
//                 2023**** 박승환
//               </span>
//               <span className="text-text-secondary text-caption">
//                 질문 · 12분 전
//               </span>
//             </div>
//           </div>

//           {/* 제목 + 본문 */}
//           <div className="flex flex-col gap-3">
//             <h2 className="text-text text-title font-bold leading-[28px] tracking-[-0.2px]">
//               디자인 시스템 토큰, 어디까지 쪼개는 게 좋을까요?
//             </h2>
//             <p className="text-text-body text-body leading-[1.75]">
//               컬러는 primary/secondary 정도로 정리했는데 spacing을 4배수로 잡을
//               때 8과 12를 둘 다 쓰는 게 맞는지 고민입니다. 팀에서는 8배수만
//               쓰자는 의견도 있어서요.
//             </p>
//           </div>

//           {/* 버튼 줄 */}
//           <div className="flex items-center justify-between h-[59px] border-y border-border">
//             <div className="flex items-center gap-2">
//               <Button type="like" active count={24} />
//               <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-border text-icon text-label font-medium">
//                 <span>댓글</span>
//                 <span>{comments.length}</span>
//               </button>
//             </div>
//             <Button type="bookmark" active />
//           </div>

//           <CommentInput />

//           {/* 댓글 목록 */}
//           <ul className="flex flex-col gap-4">
//             {comments.map((c) => (
//               <CommentItem
//                 key={c.id}
//                 author={c.author}
//                 time={c.time}
//                 text={c.text}
//               />
//             ))}
//           </ul>
//         </main>
//       </div>
//     </div>
//   );
// }

// src/App.tsx
// function App() {
//   return (
//     <div className="w-96 min-h-[844px] bg-gray-50 rounded-[20px] flex flex-col justify-start items-start overflow-hidden">
//       {/* 헤더 영역 */}
//       <div className="self-stretch px-5 pt-5 pb-3 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-4">
//         <div className="self-stretch inline-flex justify-between items-center">
//           <div className="text-neutral-900 text-xl font-bold">커뮤니티</div>
//           <div className="flex justify-start items-center gap-2">
//             <div className="size-9 bg-gray-100 rounded-full flex justify-center items-center text-gray-500">
//               ⌕
//             </div>
//             <div className="px-3.5 py-2 bg-indigo-500 rounded-full flex justify-center items-center">
//               <div className="text-white text-xs font-bold">글쓰기</div>
//             </div>
//           </div>
//         </div>
//         <div className="self-stretch inline-flex justify-start items-center gap-2">
//           <div className="px-3.5 py-1.5 bg-neutral-900 rounded-full">
//             <div className="text-white text-xs font-medium">전체</div>
//           </div>
//           <div className="px-3.5 py-1.5 bg-gray-100 rounded-full">
//             <div className="text-gray-500 text-xs font-medium">질문</div>
//           </div>
//           <div className="px-3.5 py-1.5 bg-gray-100 rounded-full">
//             <div className="text-gray-500 text-xs font-medium">자유</div>
//           </div>
//           <div className="px-3.5 py-1.5 bg-gray-100 rounded-full">
//             <div className="text-gray-500 text-xs font-medium">정보</div>
//           </div>
//         </div>
//       </div>

//       {/* 게시글 리스트 영역 */}
//       <div className="self-stretch px-4 pt-4 pb-6 flex flex-col justify-start items-start gap-3">
//         {/* 첫 번째 게시글 카드 */}
//         <div className="self-stretch p-4 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-3">
//           <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//             <div className="size-9 bg-gray-200 rounded-full"></div>
//             <div className="flex flex-col justify-start items-start gap-0.5">
//               <div className="text-neutral-900 text-sm font-bold">이서준</div>
//               <div className="text-neutral-400 text-xs font-normal">
//                 질문 · 12분 전
//               </div>
//             </div>
//           </div>
//           <div className="text-neutral-900 text-sm font-medium leading-5">
//             디자인 시스템 토큰, 어디까지 쪼개는 게 좋을까요?
//           </div>
//           <div className="self-stretch pt-1 inline-flex justify-between items-center">
//             <div className="flex justify-start items-center gap-2">
//               <div className="px-2.5 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-1.5">
//                 <div className="text-gray-500 text-xs font-medium">♡ 24</div>
//               </div>
//               <div className="px-2.5 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-1.5">
//                 <div className="text-gray-500 text-xs font-medium">댓글 3</div>
//               </div>
//             </div>
//             <div className="px-2.5 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center">
//               <div className="size-4 relative overflow-hidden">
//                 <div className="w-2 h-2.5 left-[4.33px] top-[2.67px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-neutral-400"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* 두 번째 게시글 카드 */}
//         <div className="self-stretch p-4 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-3">
//           <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//             <div className="size-9 bg-gray-200 rounded-full"></div>
//             <div className="flex flex-col justify-start items-start gap-0.5">
//               <div className="text-neutral-900 text-sm font-bold">이상래</div>
//               <div className="text-neutral-400 text-xs font-normal">
//                 자유 · 1시간 전
//               </div>
//             </div>
//           </div>
//           <div className="text-neutral-900 text-sm font-medium leading-5">
//             오늘 컴포넌트 정리하면서 배운 것
//           </div>
//           <div className="self-stretch pt-1 inline-flex justify-between items-center">
//             <div className="flex justify-start items-center gap-2">
//               <div className="px-2.5 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-1.5">
//                 <div className="text-gray-500 text-xs font-medium">♡ 41</div>
//               </div>
//               <div className="px-2.5 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-1.5">
//                 <div className="text-gray-500 text-xs font-medium">댓글 12</div>
//               </div>
//             </div>
//             <div className="px-2.5 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center">
//               <div className="size-4 relative overflow-hidden">
//                 <div className="w-2 h-2.5 left-[4.33px] top-[2.67px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-neutral-400"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* 세 번째 게시글 카드 - 북마크만 채워진(활성) 모습 */}
//         <div className="self-stretch p-4 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-3">
//           <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//             <div className="size-9 bg-gray-200 rounded-full"></div>
//             <div className="flex flex-col justify-start items-start gap-0.5">
//               <div className="text-neutral-900 text-sm font-bold">이준혁</div>
//               <div className="text-neutral-400 text-xs font-normal">
//                 정보 · 3시간 전
//               </div>
//             </div>
//           </div>
//           <div className="text-neutral-900 text-sm font-medium leading-5">
//             Dev Mode 핸드오프 체크리스트 공유
//           </div>
//           <div className="self-stretch pt-1 inline-flex justify-between items-center">
//             <div className="flex justify-start items-center gap-2">
//               <div className="px-2.5 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-1.5">
//                 <div className="text-gray-500 text-xs font-medium">♡ 87</div>
//               </div>
//               <div className="px-2.5 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-1.5">
//                 <div className="text-gray-500 text-xs font-medium">댓글 19</div>
//               </div>
//             </div>
//             <div className="px-2.5 py-1.5 bg-indigo-50 rounded-full outline outline-1 outline-offset-[-1px] outline-indigo-200 flex justify-start items-center">
//               <div className="size-4 relative overflow-hidden">
//                 <div className="w-2 h-2.5 left-[4.33px] top-[2.67px] absolute bg-indigo-500 outline outline-[1.20px] outline-offset-[-0.60px] outline-indigo-500"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// src/App.tsx
// import PostList from './pages/PostList';

// function App() {
//   return <PostList />;
// }

// export default App;

// src/App.tsx
import { Route, Routes } from 'react-router-dom';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/posts/:id" element={<PostDetail />} />
    </Routes>
  );
}

export default App;
