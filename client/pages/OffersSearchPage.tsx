import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { MobileShell } from '../components/layout/MobileShell';
import { CalendarPicker } from '../components/rewards/CalendarPicker';
import { useSearch } from '../context/SearchContext';
import { useAnalytics } from '../analytics/useAnalytics';
import { PAGE_NAMES } from '../analytics/pageNames';

export default function OffersSearchPage() {
  const navigate = useNavigate();
  const { filters, setFilters, clearFilters } = useSearch();
  const { pageView, searchSubmitted } = useAnalytics();

  useEffect(() => {
    setFilters({ type: 'offers' });
    pageView(PAGE_NAMES.offersSearch);
  }, []);

  const handleSearch = () => {
    searchSubmitted(filters, 0);
    navigate('/rewards/search/results');
  };

  const handleClear = () => {
    clearFilters();
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
          <h1 className="text-gray-900 text-2xl font-bold">Offers</h1>
        </div>

        {/* Filter chips */}
        <div className="flex-shrink-0 flex gap-2 px-5 pb-4 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => navigate('/rewards/offers/search/destinations')}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold border transition-colors ${
              filters.destination
                ? 'bg-gray-900 text-white border-gray-900'
                : 'border-gray-200 text-gray-700 bg-white'
            }`}
          >
            {filters.destination ?? 'All Destinations'}
          </button>
          <button
            onClick={() => navigate('/rewards/offers/search/resorts')}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold border transition-colors ${
              filters.resort
                ? 'bg-gray-900 text-white border-gray-900'
                : 'border-gray-200 text-gray-700 bg-white'
            }`}
          >
            <span className="text-gray-400">🏨</span>
            {filters.resort ?? 'All Resorts'}
          </button>
          <button
            onClick={() => navigate('/rewards/offers/search/categories')}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold border transition-colors ${
              filters.category
                ? 'bg-gray-900 text-white border-gray-900'
                : 'border-gray-200 text-gray-700 bg-white'
            }`}
          >
            <span className="text-gray-400">🗂</span>
            {filters.category ?? 'All Categories'}
          </button>
        </div>

        {/* Calendar */}
        <div className="flex-1 overflow-y-auto">
          <CalendarPicker
            onRangeChange={(from, to) => setFilters({ dateFrom: from, dateTo: to })}
          />
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
