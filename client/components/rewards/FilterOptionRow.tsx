interface FilterOptionRowProps {
  label: string;
  count?: number;
  selected: boolean;
  onClick: () => void;
  thumbnail?: React.ReactNode;
}

export function FilterOptionRow({ label, count, selected, onClick, thumbnail }: FilterOptionRowProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-colors text-left ${
        selected ? 'bg-white border-2 border-gray-900' : 'bg-gray-100 border-2 border-transparent hover:bg-gray-200'
      }`}
    >
      {thumbnail && (
        <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 bg-gray-200">
          {thumbnail}
        </div>
      )}
      <div>
        <p className="text-gray-900 text-sm font-semibold">{label}</p>
        {count !== undefined && (
          <p className="text-gray-400 text-xs">{count.toLocaleString()} Offers</p>
        )}
      </div>
    </button>
  );
}
