import { Heart } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnalytics } from '../../analytics/useAnalytics';
import type { Offer } from '../../data/mockOffers';
import { GoldIcon } from './GoldIcon';

interface FeaturedOfferCardProps {
  offer: Offer;
}

export function FeaturedOfferCard({ offer }: FeaturedOfferCardProps) {
  const [favorited, setFavorited] = useState(offer.favorited);
  const navigate = useNavigate();
  const { featuredOfferCardTapped, favoriteToggled } = useAnalytics();

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !favorited;
    setFavorited(next);
    favoriteToggled(offer.id, next ? 'add' : 'remove', 'offer');
  };

  const handleClick = () => {
    featuredOfferCardTapped(offer.id, offer.title);
    navigate(`/rewards/offers/${offer.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="relative h-44 bg-gray-50 flex items-center justify-center">
        {offer.icon === 'Entries' ? (
          <div className="flex flex-col items-center gap-1">
            <p className="text-caesars-gold text-2xl font-bold italic" style={{ fontFamily: 'Georgia, serif' }}>Entries</p>
            <GoldIcon name="Ticket" size={60} />
          </div>
        ) : (
          <GoldIcon name={offer.icon} size={72} />
        )}
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 p-1.5 bg-white rounded-full shadow-sm hover:scale-110 transition-transform"
        >
          <Heart
            size={16}
            className={favorited ? 'text-gray-900 fill-gray-900' : 'text-gray-400'}
          />
        </button>
        {offer.status === 'expiring-soon' && (
          <span className="absolute bottom-3 left-3 bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded-full">
            Ends soon
          </span>
        )}
        {offer.status === 'expired' && (
          <span className="absolute bottom-3 left-3 bg-gray-100 text-gray-500 text-xs font-semibold px-2 py-0.5 rounded-full">
            Expired
          </span>
        )}
        {offer.status === 'redeemed' && (
          <span className="absolute bottom-3 left-3 bg-gray-100 text-gray-500 text-xs font-semibold px-2 py-0.5 rounded-full">
            Redeemed
          </span>
        )}
      </div>
      <div className="px-4 py-3">
        <p className="text-gray-900 text-sm font-semibold leading-snug">{offer.title}</p>
        <p className="text-gray-400 text-xs mt-0.5">{offer.property}</p>
        <p className="text-gray-400 text-xs">Valid: {formatDate(offer.validFrom)} – {formatDate(offer.validTo)}</p>
      </div>
    </div>
  );
}

function formatDate(iso: string) {
  if (!iso || iso === 'Ongoing') return iso;
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
