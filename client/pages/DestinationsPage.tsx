import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { MobileShell } from '../components/layout/MobileShell';
import { FilterOptionRow } from '../components/rewards/FilterOptionRow';
import { useSearch } from '../context/SearchContext';
import { useAnalytics } from '../analytics/useAnalytics';

const destinations = [
  { label: 'All Destinations', count: 28, image: null },
  { label: 'Las Vegas, NV', count: 8, image: 'https://picsum.photos/seed/lasvegas/80/80' },
  { label: 'Atlantic City, NJ', count: 2, image: 'https://picsum.photos/seed/atlanticcity/80/80' },
  { label: 'Reno, NV', count: 3, image: 'https://picsum.photos/seed/reno/80/80' },
  { label: 'Lake Tahoe, NV', count: 6, image: 'https://picsum.photos/seed/tahoe/80/80' },
  { label: 'Laughlin, NV', count: 2, image: 'https://picsum.photos/seed/laughlin/80/80' },
];

export default function DestinationsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { filters, setFilters } = useSearch();
  const { destinationSelected } = useAnalytics();

  const isPromo = location.pathname.includes('promotions');
  const backPath = isPromo ? '/rewards/promotions/search' : '/rewards/offers/search';

  const handleSelect = (label: string) => {
    const val = label === 'All Destinations' ? null : label;
    setFilters({ destination: val });
    if (val) destinationSelected(val);
    navigate(backPath);
  };

  const handleSearch = () => navigate('/rewards/search/results');
  const handleClear = () => {
    setFilters({ destination: null });
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
          <h1 className="text-gray-900 text-2xl font-bold">Destinations</h1>
        </div>

        <div className="flex-1 overflow-y-auto px-5 flex flex-col gap-2 pb-4">
          {destinations.map(({ label, count, image }) => (
            <FilterOptionRow
              key={label}
              label={label}
              count={count}
              selected={filters.destination === label || (label === 'All Destinations' && !filters.destination)}
              onClick={() => handleSelect(label)}
              thumbnail={
                image ? (
                  <img src={image} alt={label} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-500">🌍</div>
                )
              }
            />
          ))}
          <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mt-4 mb-2">States</p>
          <FilterOptionRow
            label="Nevada"
            count={17}
            selected={false}
            onClick={() => {}}
          />
          <FilterOptionRow
            label="New Jersey"
            count={2}
            selected={false}
            onClick={() => {}}
          />
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
