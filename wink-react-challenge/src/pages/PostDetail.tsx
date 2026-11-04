import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  fetchPost,
  toggleLike,
  toggleBookmark,
  createComment,
} from '../api/client';
import type { PostWithComments } from '../types';
import { formatRelativeTime } from '../utils/time';
import CountPill from '../components/CountPill';
import BookmarkButton from '../components/BookmarkButton';
import CommentSection from '../components/CommentSection';
import heartIcon from '../assets/heart.svg';
import heartFilledIcon from '../assets/heart-fill.svg';

type Status = 'loading' | 'ready' | 'error';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<PostWithComments | null>(null);
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    setStatus('loading');

    fetchPost(id)
      .then((data) => {
        if (cancelled) return;
        setPost(data);
        setStatus('ready');
      })
      .catch(() => {
        if (cancelled) return;
        setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  const handleToggleLike = () => {
    if (!post) return;
    toggleLike(post.id).then(({ liked, likeCount }) => {
      setPost((prev) => (prev ? { ...prev, liked, likeCount } : prev));
    });
  };

  const handleToggleSave = () => {
    if (!post) return;
    toggleBookmark(post.id).then(({ saved }) => {
      setPost((prev) => (prev ? { ...prev, saved } : prev));
    });
  };

  const handleAddComment = (text: string) => {
    if (!post) return;
    createComment(post.id, text).then((comment) => {
      setPost((prev) =>
        prev
          ? {
              ...prev,
              comments: [...prev.comments, comment],
              commentCount: prev.commentCount + 1,
            }
          : prev,
      );
    });
  };

  return (
    <div className="w-[390px] min-h-[844px] flex flex-col bg-surface rounded-frame overflow-hidden shadow-[0_12px_40px_0_rgba(20,22,26,0.1)]">
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

      {status === 'loading' && (
        <p className="py-20 text-center text-body text-text-secondary">
          불러오는 중...
        </p>
      )}

      {status === 'error' && (
        <p className="py-20 text-center text-body text-like">
          게시글을 불러오지 못했습니다.
        </p>
      )}

      {status === 'ready' && post && (
        <main className="flex-1 flex flex-col gap-5 p-5">
          <div className="flex items-center gap-2.5">
            <div className="size-10 shrink-0 rounded-full bg-border" />
            <div className="flex flex-col gap-0.5">
              <span className="text-body font-bold text-text">
                {post.author}
              </span>
              <span className="text-caption text-text-secondary">
                {post.tag} · {formatRelativeTime(post.createdAt)}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-title font-bold text-text leading-[28px] tracking-[-0.2px]">
              {post.title}
            </h2>
            <p className="text-body text-text-body leading-[1.75]">
              {post.body}
            </p>
          </div>

          <div className="flex items-center justify-between h-[59px] border-y border-border">
            <div className="flex items-center gap-2">
              <CountPill isActive={post.liked} onClick={handleToggleLike}>
                <img
                  src={post.liked ? heartFilledIcon : heartIcon}
                  alt=""
                  className="size-4"
                />
                {post.likeCount}
              </CountPill>
              <CountPill>
                <span>댓글</span>
                <span>{post.commentCount}</span>
              </CountPill>
            </div>
            <BookmarkButton
              isBookmarked={post.saved}
              onToggle={handleToggleSave}
            />
          </div>

          <CommentSection
            comments={post.comments}
            onSubmit={handleAddComment}
          />
        </main>
      )}
    </div>
  );
}

export default PostDetail;
