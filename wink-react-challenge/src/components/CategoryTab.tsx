// src/components/CategoryTab.tsx
interface CategoryTabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function CategoryTab({ label, isActive, onClick }: CategoryTabProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full text-xs font-medium ${
        isActive ? 'bg-neutral-900 text-white' : 'bg-gray-100 text-gray-500'
      }`}
    >
      {label}
    </button>
  );
}

export default CategoryTab;
