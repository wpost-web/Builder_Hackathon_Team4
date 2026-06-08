import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../SearchBar';
import { PromotionCard } from '../PromotionCard';
import { mockPromotions } from '../../../data/mockPromotions';
import { useSearch } from '../../../context/SearchContext';
import { useAnalytics } from '../../../analytics/useAnalytics';

export function PromotionsTab() {
  const navigate = useNavigate();
  const { setFilters } = useSearch();
  const { searchInitiated } = useAnalytics();

  const handleSearchClick = () => {
    setFilters({ type: 'promotions' });
    searchInitiated('promotions');
    navigate('/rewards/promotions/search');
  };

  return (
    <div className="flex flex-col gap-4 pb-4">
      <SearchBar
        placeholder="Find promotions"
        subtitle="Search by date, resort and more"
        onClick={handleSearchClick}
      />
      {mockPromotions.map((promo) => (
        <PromotionCard key={promo.id} promotion={promo} />
      ))}
    </div>
  );
}
