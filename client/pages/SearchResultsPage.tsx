import { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar } from 'lucide-react';
import { MobileShell } from '../components/layout/MobileShell';
import { OfferCard } from '../components/rewards/OfferCard';
import { PromotionCard } from '../components/rewards/PromotionCard';
import { SortButton } from '../components/rewards/SortButton';
import { mockOffers } from '../data/mockOffers';
import { mockPromotions } from '../data/mockPromotions';
import { useSearch } from '../context/SearchContext';
import { useAnalytics } from '../analytics/useAnalytics';
import { PAGE_NAMES } from '../analytics/pageNames';

export default function SearchResultsPage() {
  const navigate = useNavigate();
  const { filters, setFilters, clearFilters } = useSearch();
  const { pageView, searchResultsViewed } = useAnalytics();
  const [sort, setSort] = useState<'soonest' | 'value' | 'newest'>(filters.sortBy ?? 'soonest');

  const results = useMemo(() => {
    if (filters.type === 'offers') {
      let items = [...mockOffers];
      if (filters.category) items = items.filter((o) => o.category === filters.category);
      if (filters.destination) items = items.filter((o) => o.location === filters.destination);
      if (filters.resort) items = items.filter((o) => o.property === filters.resort || o.property.includes(filters.resort!));
      return items.sort((a, b) => {
        if (sort === 'soonest') return new Date(a.validTo).getTime() - new Date(b.validTo).getTime();
        if (sort === 'newest') return new Date(b.validFrom).getTime() - new Date(a.validFrom).getTime();
        return 0;
      });
    } else {
      let items = [...mockPromotions];
      if (filters.category) items = items.filter((p) => p.category === filters.category);
      if (filters.destination) items = items.filter((p) => p.location.includes(filters.destination!));
      if (filters.resort) items = items.filter((p) => p.participatingResorts.some((r) => r.includes(filters.resort!)));
      return items.sort((a, b) => {
        if (sort === 'soonest') return new Date(a.validTo === 'Ongoing' ? '2099-01-01' : a.validTo).getTime() - new Date(b.validTo === 'Ongoing' ? '2099-01-01' : b.validTo).getTime();
        return 0;
      });
    }
  }, [filters, sort]);

  useEffect(() => {
    pageView(PAGE_NAMES.searchResults, { resultCount: results.length });
    searchResultsViewed(results.length);
  }, []);

  const locationChip = [
    filters.destination,
    filters.dateFrom ? formatDateShort(filters.dateFrom) : null,
    filters.dateTo ? formatDateShort(filters.dateTo) : null,
    filters.category,
  ].filter(Boolean).join(' • ') || 'All';

  return (
    <MobileShell>
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Crimson header */}
        <div
          className="flex-shrink-0 pt-12 pb-5 px-5"
          style={{ background: 'linear-gradient(135deg, #8B1A1A 0%, #3A0808 100%)' }}
        >
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center mb-4"
          >
            <ArrowLeft size={18} className="text-white" />
          </button>
          {/* Location chip */}
          <div className="bg-gray-900/80 text-white text-sm font-semibold px-4 py-2.5 rounded-full inline-flex items-center gap-2 max-w-full">
            <MapPin size={14} />
            <span className="truncate">{locationChip}</span>
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto bg-white">
          <div className="flex items-center justify-between px-5 py-4">
            <h2 className="text-gray-900 text-2xl font-bold">
              {results.length} {filters.type === 'offers' ? 'Offers' : 'Promotions'}
            </h2>
            <SortButton value={sort} onChange={(v) => { setFilters({ sortBy: v }); setSort(v); }} />
          </div>

          {results.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
              <p className="text-gray-500 text-base font-semibold mb-2">No offers found</p>
              <p className="text-gray-400 text-sm mb-6">Try adjusting your filters</p>
              <button
                onClick={() => { clearFilters(); navigate(-1); }}
                className="px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-xl"
              >
                Clear filters
              </button>
            </div>
          ) : filters.type === 'offers' ? (
            <div className="grid grid-cols-2 gap-3 px-4 pb-6">
              {(results as typeof mockOffers).map((offer) => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4 pb-6">
              {(results as typeof mockPromotions).map((promo) => (
                <PromotionCard key={promo.id} promotion={promo} />
              ))}
            </div>
          )}
        </div>
      </div>
    </MobileShell>
  );
}

function formatDateShort(iso: string) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
