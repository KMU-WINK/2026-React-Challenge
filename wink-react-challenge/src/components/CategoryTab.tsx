interface CategoryTabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryTab({ label, isActive, onClick }: CategoryTabProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-label font-medium ${
        isActive ? "bg-text text-surface" : "bg-[#F1F3F6] text-[#6B7280]"
      }`}
    >
      {label}
    </button>
  );
}
