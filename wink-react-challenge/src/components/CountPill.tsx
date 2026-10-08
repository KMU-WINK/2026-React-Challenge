import type { MouseEvent, ReactNode } from "react";

interface CountPillProps {
  children: ReactNode;
  active?: boolean;
  onClick?: (e: MouseEvent) => void;
}

export default function CountPill({ children, active = false, onClick }: CountPillProps) {
  const cls = `flex items-center gap-1.5 rounded-full border px-[11px] py-[7px] text-label font-medium ${
    active ? "border-like/30 bg-like/10 text-like" : "border-border text-[#6B7280]"
  }`;
  return onClick ? (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  ) : (
    <div className={cls}>{children}</div>
  );
}
