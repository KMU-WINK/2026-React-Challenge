import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import useToggle from '../hooks/useToggle';
import CountPill from '../components/CountPill';
import BookmarkButton from '../components/BookmarkButton';
import CommentSection from '../components/CommentSection';
import heartIcon from '../assets/heart.svg';
import heartFilledIcon from '../assets/heart-fill.svg';

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));
  const [isLiked, toggleLiked] = useToggle(false);
  const [isBookmarked, toggleBookmarked] = useToggle(false);

  if (!post)
    return <p className="text-body text-text-body">게시글을 찾을 수 없어요.</p>;

  const likeCount = post.likeCount + (isLiked ? 1 : 0);

  return (
    <div className="w-[390px] min-h-[844px] flex flex-col bg-surface rounded-frame overflow-hidden shadow-[0_12px_40px_0_rgba(20,22,26,0.1)]">
      {/* 상단 바 */}
      <header className="flex items-center justify-between px-5 py-5 border-b border-border">
        <Link
          to="/"
          aria-label="뒤로 가기"
          className="w-6 text-left text-[18px] text-text"
        >
          ←
        </Link>
        <h1 className="text-body font-bold text-text">게시글</h1>
        <button
          aria-label="더보기"
          className="w-6 text-right text-[18px] text-text-secondary"
        >
          ⋯
        </button>
      </header>

      <main className="flex-1 flex flex-col gap-5 p-5">
        {/* 작성자 */}
        <div className="flex items-center gap-2.5">
          <div className="size-10 shrink-0 rounded-full bg-border" />
          <div className="flex flex-col gap-0.5">
            <span className="text-body font-bold text-text">{post.author}</span>
            <span className="text-caption text-text-secondary">
              {post.timeLabel}
            </span>
          </div>
        </div>

        {/* 제목 + 본문 */}
        <div className="flex flex-col gap-3">
          <h2 className="text-title font-bold text-text leading-[28px] tracking-[-0.2px]">
            {post.title}
          </h2>
          <p className="text-body text-text-body leading-[1.75]">{post.body}</p>
        </div>

        {/* 좋아요 / 댓글 / 북마크 */}
        <div className="flex items-center justify-between h-[59px] border-y border-border">
          <div className="flex items-center gap-2">
            <CountPill isActive={isLiked} onClick={toggleLiked}>
              <img
                src={isLiked ? heartFilledIcon : heartIcon}
                alt=""
                className="size-4"
              />
              {likeCount}
            </CountPill>
            <CountPill>
              <span>댓글</span>
              <span>{post.commentCount}</span>
            </CountPill>
          </div>
          <BookmarkButton
            isBookmarked={isBookmarked}
            onToggle={toggleBookmarked}
          />
        </div>

        <CommentSection />
      </main>
    </div>
  );
}

export default PostDetail;
