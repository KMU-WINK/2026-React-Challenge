// src/components/CountPill.tsx

import type { MouseEventHandler, ReactNode } from "react";

interface CountPillProps {
  children: ReactNode;
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function CountPill({ children, isActive = false, onClick }: CountPillProps) {
  const className = `px-2.5 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] flex justify-start items-center gap-1.5 text-xs font-medium ${
    isActive
      ? "bg-red-50 outline-red-200 text-red-500"
      : "outline-gray-200 text-gray-500"
  }`;

  if (onClick) {
    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );
  }

  return <div className={className}>{children}</div>;
}

export default CountPill;
