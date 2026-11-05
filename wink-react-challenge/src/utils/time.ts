export function formatRelativeTime(isoString: string): string {
  // 서버는 "2026-11-01T00:42:53"처럼 시간대 없이 UTC로 내려줌 → 그대로 파싱하면 한국 시간으로 읽혀 9시간 어긋남
  const utc = /[zZ]|[+-]\d\d:?\d\d$/.test(isoString) ? isoString : `${isoString}Z`;
  const diffSeconds = Math.max(0, Math.floor((Date.now() - new Date(utc).getTime()) / 1000));

  if (diffSeconds < 60) return "방금 전";
  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) return `${diffMinutes}분 전`;
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}시간 전`;
  return `${Math.floor(diffHours / 24)}일 전`;
}
