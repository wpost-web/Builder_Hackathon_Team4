import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Star, Zap, Building2, TrendingUp, UtensilsCrossed, Sparkles, Music } from 'lucide-react';
import { MobileShell } from '../components/layout/MobileShell';
import { FilterOptionRow } from '../components/rewards/FilterOptionRow';
import { useSearch } from '../context/SearchContext';
import { useAnalytics } from '../analytics/useAnalytics';

const offerCategories = [
  { key: 'All Categories', count: 28, icon: <Star size={20} style={{ color: '#C9921A' }} /> },
  { key: 'Gaming', count: 8, icon: <Zap size={20} style={{ color: '#C9921A' }} /> },
  { key: 'Resorts', count: 3, icon: <Building2 size={20} style={{ color: '#C9921A' }} /> },
  { key: 'Loyalty Credits', count: 2, icon: <TrendingUp size={20} style={{ color: '#C9921A' }} /> },
  { key: 'Food & Drink', count: 2, icon: <UtensilsCrossed size={20} style={{ color: '#C9921A' }} /> },
  { key: 'Wellness', count: 3, icon: <Sparkles size={20} style={{ color: '#C9921A' }} /> },
  { key: 'Entertainment', count: 6, icon: <Music size={20} style={{ color: '#C9921A' }} /> },
];

const promoCategories = [
  { key: 'All Categories', count: 24, icon: <Star size={20} style={{ color: '#C9921A' }} /> },
  { key: 'Discounts', count: 8, icon: <TrendingUp size={20} style={{ color: '#C9921A' }} /> },
  { key: 'Packages', count: 3, icon: <Building2 size={20} style={{ color: '#C9921A' }} /> },
  { key: 'Sweepstakes', count: 10, icon: <Sparkles size={20} style={{ color: '#C9921A' }} /> },
  { key: 'Loyalty', count: 3, icon: <Star size={20} style={{ color: '#C9921A' }} /> },
];

export default function CategoriesPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { filters, setFilters } = useSearch();
  const { categorySelected } = useAnalytics();

  const isPromo = location.pathname.includes('promotions');
  const backPath = isPromo ? '/rewards/promotions/search' : '/rewards/offers/search';
  const categories = isPromo ? promoCategories : offerCategories;

  const handleSelect = (key: string) => {
    const val = key === 'All Categories' ? null : key;
    setFilters({ category: val });
    if (val) categorySelected(val);
    navigate(backPath);
  };

  const handleSearch = () => navigate('/rewards/search/results');
  const handleClear = () => {
    setFilters({ category: null });
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
          <h1 className="text-gray-900 text-2xl font-bold">Categories</h1>
        </div>

        <div className="flex-1 overflow-y-auto px-5 flex flex-col gap-2 pb-4">
          {categories.map(({ key, count, icon }) => (
            <FilterOptionRow
              key={key}
              label={key}
              count={count}
              selected={filters.category === key || (key === 'All Categories' && !filters.category)}
              onClick={() => handleSelect(key)}
              thumbnail={
                <div className="w-full h-full flex items-center justify-center bg-gray-50">
                  {icon}
                </div>
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
