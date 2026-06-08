import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../SearchBar';
import { FeaturedOfferCard } from '../FeaturedOfferCard';
import { OfferCard } from '../OfferCard';
import { SortButton } from '../SortButton';
import { mockOffers } from '../../../data/mockOffers';
import { useSearch } from '../../../context/SearchContext';
import { useAnalytics } from '../../../analytics/useAnalytics';

export function OffersTab() {
  const navigate = useNavigate();
  const { setFilters } = useSearch();
  const { searchInitiated } = useAnalytics();
  const [sort, setSort] = useState<'soonest' | 'value' | 'newest'>('soonest');

  const featured = mockOffers.filter((o) => o.featured);
  const available = useMemo(() => {
    return [...mockOffers.filter((o) => !o.featured)].sort((a, b) => {
      if (sort === 'soonest') return new Date(a.validTo).getTime() - new Date(b.validTo).getTime();
      if (sort === 'newest') return new Date(b.validFrom).getTime() - new Date(a.validFrom).getTime();
      return 0;
    });
  }, [sort]);

  const handleSearchClick = () => {
    setFilters({ type: 'offers' });
    searchInitiated('offers');
    navigate('/rewards/offers/search');
  };

  return (
    <div className="flex flex-col">
      <SearchBar
        placeholder="Find offers"
        subtitle="Search by date, resort and more"
        onClick={handleSearchClick}
      />

      {/* Recommended for you */}
      <div className="mt-1">
        <h2 className="px-4 text-gray-900 text-base font-bold mb-3">Recommended for you</h2>
        <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
          {featured.map((offer) => (
            <FeaturedOfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>

      {/* Available offers */}
      <div className="mt-4 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-gray-900 text-base font-bold">Available offers</h2>
          <SortButton value={sort} onChange={setSort} />
        </div>
        <div className="grid grid-cols-2 gap-3 pb-4">
          {available.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
}
