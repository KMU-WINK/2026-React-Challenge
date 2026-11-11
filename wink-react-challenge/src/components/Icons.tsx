export function SearchIcon() {
  return (
    <span
      aria-hidden="true"
      className="block h-[18px] w-[10px] text-[15px] leading-[18px] font-normal text-[#8A9099]"
    >
      ⌕
    </span>
  );
}

export function HeartIcon({ active = false }: { active?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8 13.2L7.2 12.48C4.05 9.62 2.2 7.92 2.2 5.85C2.2 4.18 3.5 2.9 5.15 2.9C6.08 2.9 6.98 3.33 7.5 4.03C8.02 3.33 8.92 2.9 9.85 2.9C11.5 2.9 12.8 4.18 12.8 5.85C12.8 7.92 10.95 9.62 7.8 12.48L8 13.2Z"
        fill={active ? "#F03E3E" : "none"}
        stroke={active ? "#F03E3E" : "#8A9099"}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BookmarkIcon({ active = false }: { active?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M4.5 2.5H11.5V13L8 10.5L4.5 13V2.5Z"
        fill={active ? "#4C6EF5" : "none"}
        stroke={active ? "#4C6EF5" : "#8A9099"}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
