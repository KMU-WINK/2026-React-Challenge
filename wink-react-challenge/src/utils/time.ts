export function formatRelativeTime(isoString: string): string {
  const diffSeconds = Math.max(
    0,
    Math.floor((Date.now() - new Date(isoString).getTime()) / 1000),
  );
  if (diffSeconds < 60) return '방금 전';
  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) return `${diffMinutes}분 전`;
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}시간 전`;
  return `${Math.floor(diffHours / 24)}일 전`;
}
