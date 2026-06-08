import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  subtitle?: string;
  onClick?: () => void;
}

export function SearchBar({ placeholder = 'Find an offer', subtitle = 'Search by date, resort and more', onClick }: SearchBarProps) {
  return (
    <button
      onClick={onClick}
      className="mx-4 my-3 bg-white rounded-2xl px-4 py-3 flex items-center justify-between gap-3 shadow-sm border border-gray-100 w-[calc(100%-32px)] hover:bg-gray-50 transition-colors text-left"
    >
      <div>
        <p className="text-gray-700 text-sm font-semibold">{placeholder}</p>
        <p className="text-gray-400 text-xs mt-0.5">{subtitle}</p>
      </div>
      <Search size={18} className="text-gray-400 flex-shrink-0" />
    </button>
  );
}
