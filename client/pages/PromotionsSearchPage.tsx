import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Building2 } from 'lucide-react';
import { MobileShell } from '../components/layout/MobileShell';
import { useSearch } from '../context/SearchContext';
import { useAnalytics } from '../analytics/useAnalytics';
import { PAGE_NAMES } from '../analytics/pageNames';

const promoCategories = [
  { key: 'All Categories', count: 24 },
  { key: 'Discounts', count: 8 },
  { key: 'Packages', count: 3 },
  { key: 'Sweepstakes', count: 10 },
  { key: 'Loyalty', count: 3 },
];

export default function PromotionsSearchPage() {
  const navigate = useNavigate();
  const { filters, setFilters, clearFilters } = useSearch();
  const { pageView, searchSubmitted, categorySelected } = useAnalytics();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(filters.category);

  useEffect(() => {
    setFilters({ type: 'promotions' });
    pageView(PAGE_NAMES.promotionsSearch);
  }, []);

  const handleCategorySelect = (key: string) => {
    const val = key === 'All Categories' ? null : key;
    setSelectedCategory(val);
    setFilters({ category: val });
    if (val) categorySelected(val);
  };

  const handleSearch = () => {
    searchSubmitted({ ...filters, category: selectedCategory }, 0);
    navigate('/rewards/search/results');
  };

  const handleClear = () => {
    clearFilters();
    setSelectedCategory(null);
  };

  return (
    <MobileShell>
      <div className="flex flex-col flex-1 overflow-hidden bg-white">
        {/* Header */}
        <div className="flex-shrink-0 px-5 pt-12 pb-4">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center mb-4"
          >
            <ArrowLeft size={18} className="text-gray-700" />
          </button>
          <h1 className="text-gray-900 text-2xl font-bold">Promotions</h1>
        </div>

        <div className="flex-1 overflow-y-auto px-5">
          {/* Location section */}
          <p className="text-gray-500 text-sm font-semibold mb-3">Location</p>
          <div className="flex flex-col gap-2 mb-6">
            <button
              onClick={() => navigate('/rewards/promotions/search/destinations')}
              className="flex items-center justify-between bg-gray-100 rounded-2xl px-4 py-3 hover:bg-gray-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center">
                  <MapPin size={16} className="text-caesars-gold" />
                </div>
                <div className="text-left">
                  <p className="text-gray-700 text-sm font-semibold">Destination</p>
                  <p className="text-gray-400 text-xs">8 Offers</p>
                </div>
              </div>
              <span className="text-gray-900 text-sm font-semibold">
                {filters.destination ?? 'All Destinations'}
              </span>
            </button>
            <button
              onClick={() => navigate('/rewards/promotions/search/resorts')}
              className="flex items-center justify-between bg-gray-100 rounded-2xl px-4 py-3 hover:bg-gray-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center">
                  <Building2 size={16} className="text-caesars-gold" />
                </div>
                <div className="text-left">
                  <p className="text-gray-700 text-sm font-semibold">Resort</p>
                  <p className="text-gray-400 text-xs">1000 Offers</p>
                </div>
              </div>
              <span className="text-gray-900 text-sm font-semibold">
                {filters.resort ?? 'All Resorts'}
              </span>
            </button>
          </div>

          {/* Categories section */}
          <p className="text-gray-500 text-sm font-semibold mb-3">Categories</p>
          <div className="grid grid-cols-2 gap-2 pb-4">
            {promoCategories.map(({ key, count }) => {
              const isActive = selectedCategory === key || (key === 'All Categories' && !selectedCategory);
              return (
                <button
                  key={key}
                  onClick={() => handleCategorySelect(key)}
                  className={`flex flex-col items-start px-4 py-3 rounded-2xl text-left transition-colors ${
                    isActive ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <p className="text-sm font-semibold">{key}</p>
                  <p className={`text-xs mt-0.5 ${isActive ? 'text-gray-300' : 'text-gray-400'}`}>
                    {count} Offers
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom actions */}
        <div className="flex-shrink-0 flex gap-3 px-5 py-4 border-t border-gray-100">
          <button
            onClick={handleClear}
            className="flex-1 py-3.5 text-gray-700 text-base font-semibold border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors"
          >
            Clear
          </button>
          <button
            onClick={handleSearch}
            className="flex-1 py-3.5 bg-gray-900 text-white text-base font-semibold rounded-2xl hover:bg-gray-800 transition-colors"
          >
            Search
          </button>
        </div>
      </div>
    </MobileShell>
  );
}
