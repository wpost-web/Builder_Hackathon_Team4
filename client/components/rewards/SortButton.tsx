import { Clock } from 'lucide-react';
import { useState } from 'react';
import { useAnalytics } from '../../analytics/useAnalytics';

type SortValue = 'soonest' | 'value' | 'newest';

const sortLabels: Record<SortValue, string> = {
  soonest: 'Soonest',
  value: 'Value',
  newest: 'Newest',
};

interface SortButtonProps {
  value: SortValue;
  onChange: (v: SortValue) => void;
}

export function SortButton({ value, onChange }: SortButtonProps) {
  const [open, setOpen] = useState(false);
  const { sortChanged } = useAnalytics();

  const select = (v: SortValue) => {
    sortChanged(v);
    onChange(v);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 border border-gray-200 rounded-full px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <Clock size={14} />
        {sortLabels[value]}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 bg-white border border-gray-100 rounded-xl shadow-lg z-50 min-w-[120px]">
          {(Object.keys(sortLabels) as SortValue[]).map((v) => (
            <button
              key={v}
              onClick={() => select(v)}
              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors first:rounded-t-xl last:rounded-b-xl ${v === value ? 'font-semibold text-gray-900' : 'text-gray-600'}`}
            >
              {sortLabels[v]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
