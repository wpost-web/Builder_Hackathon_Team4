import { Heart } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnalytics } from '../../analytics/useAnalytics';
import type { Offer } from '../../data/mockOffers';
import { GoldIcon } from './GoldIcon';

interface OfferCardProps {
  offer: Offer;
}

export function OfferCard({ offer }: OfferCardProps) {
  const [favorited, setFavorited] = useState(offer.favorited);
  const navigate = useNavigate();
  const { offerCardTapped, favoriteToggled } = useAnalytics();

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !favorited;
    setFavorited(next);
    favoriteToggled(offer.id, next ? 'add' : 'remove', 'offer');
  };

  const handleClick = () => {
    offerCardTapped(offer.id, offer.title);
    navigate(`/rewards/offers/${offer.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="relative h-28 bg-gray-50 flex items-center justify-center">
        <GoldIcon name={offer.icon} size={44} />
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-1 hover:scale-110 transition-transform"
        >
          <Heart
            size={16}
            className={favorited ? 'text-gray-900 fill-gray-900' : 'text-gray-300'}
          />
        </button>
        {offer.status === 'expiring-soon' && (
          <span className="absolute bottom-2 left-2 bg-amber-100 text-amber-700 text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
            Ends soon
          </span>
        )}
        {offer.status === 'expired' && (
          <span className="absolute bottom-2 left-2 bg-gray-100 text-gray-400 text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
            Expired
          </span>
        )}
        {offer.status === 'redeemed' && (
          <span className="absolute bottom-2 left-2 bg-gray-100 text-gray-400 text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
            Redeemed
          </span>
        )}
      </div>
      <div className="px-3 py-2.5">
        <p className="text-gray-900 text-[13px] font-semibold leading-snug line-clamp-2">{offer.title}</p>
        <p className="text-gray-400 text-[11px] mt-0.5">{offer.property}</p>
        <p className="text-gray-400 text-[11px]">Valid: {formatDate(offer.validFrom)}–{formatDateShort(offer.validTo)}</p>
      </div>
    </div>
  );
}

function formatDate(iso: string) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function formatDateShort(iso: string) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
