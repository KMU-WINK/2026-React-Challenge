import { useState } from 'react';

function useLike(initialCount: number) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialCount);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return { isLiked, likeCount, toggleLike };
}

export default useLike;
