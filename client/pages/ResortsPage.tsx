import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { MobileShell } from '../components/layout/MobileShell';
import { FilterOptionRow } from '../components/rewards/FilterOptionRow';
import { useSearch } from '../context/SearchContext';
import { useAnalytics } from '../analytics/useAnalytics';

const resorts = [
  { label: 'All Resorts', count: 1000, image: null },
  { label: 'Caesars Palace', count: 8, image: 'https://picsum.photos/seed/caesarspalace/80/80' },
  { label: 'Flamingo Las Vegas', count: 3, image: 'https://picsum.photos/seed/flamingo/80/80' },
  { label: "Harrah's Las Vegas", count: 2, image: 'https://picsum.photos/seed/harrahs/80/80' },
  { label: 'Horseshoe Las Vegas', count: 6, image: 'https://picsum.photos/seed/horseshoe/80/80' },
  { label: 'Nobu Hotel Las Vegas', count: 2, image: 'https://picsum.photos/seed/nobu/80/80' },
  { label: 'Paris Las Vegas', count: 4, image: 'https://picsum.photos/seed/parislv/80/80' },
];

export default function ResortsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { filters, setFilters } = useSearch();
  const { resortSelected } = useAnalytics();

  const isPromo = location.pathname.includes('promotions');
  const backPath = isPromo ? '/rewards/promotions/search' : '/rewards/offers/search';

  const handleSelect = (label: string) => {
    const val = label === 'All Resorts' ? null : label;
    setFilters({ resort: val });
    if (val) resortSelected(val);
    navigate(backPath);
  };

  const handleSearch = () => navigate('/rewards/search/results');
  const handleClear = () => {
    setFilters({ resort: null });
    navigate(backPath);
  };

  return (
    <MobileShell>
      <div className="flex flex-col flex-1 overflow-hidden bg-white">
        <div className="flex-shrink-0 px-5 pt-12 pb-4">
          <button
            onClick={() => navigate(backPath)}
            className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center mb-4"
          >
            <ArrowLeft size={18} className="text-gray-700" />
          </button>
          <h1 className="text-gray-900 text-2xl font-bold">Resorts</h1>
        </div>

        <div className="flex-1 overflow-y-auto px-5 flex flex-col gap-2 pb-4">
          {resorts.map(({ label, count, image }) => (
            <FilterOptionRow
              key={label}
              label={label}
              count={count}
              selected={filters.resort === label || (label === 'All Resorts' && !filters.resort)}
              onClick={() => handleSelect(label)}
              thumbnail={
                image ? (
                  <img src={image} alt={label} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-500">🏨</div>
                )
              }
            />
          ))}
        </div>

        <div className="flex-shrink-0 flex gap-3 px-5 py-4 border-t border-gray-100">
          <button onClick={handleClear} className="flex-1 py-3.5 text-gray-700 text-base font-semibold border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors">
            Clear
          </button>
          <button onClick={handleSearch} className="flex-1 py-3.5 bg-gray-900 text-white text-base font-semibold rounded-2xl hover:bg-gray-800 transition-colors">
            Search
          </button>
        </div>
      </div>
    </MobileShell>
  );
}
