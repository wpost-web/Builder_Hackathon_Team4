import { Heart, Copy } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnalytics } from '../../analytics/useAnalytics';
import type { Promotion } from '../../data/mockPromotions';

const categoryColors: Record<string, string> = {
  Discounts: 'bg-white text-gray-800',
  Sweepstakes: 'bg-red-800 text-white',
  Packages: 'bg-gray-900 text-white',
  Loyalty: 'bg-gray-900 text-white',
};

interface PromotionCardProps {
  promotion: Promotion;
}

export function PromotionCard({ promotion }: PromotionCardProps) {
  const [favorited, setFavorited] = useState(promotion.favorited);
  const navigate = useNavigate();
  const { promotionCardTapped, favoriteToggled, promoCodeCopied } = useAnalytics();

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !favorited;
    setFavorited(next);
    favoriteToggled(promotion.id, next ? 'add' : 'remove', 'promotion');
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (promotion.promoCode) {
      navigator.clipboard.writeText(promotion.promoCode).catch(() => {});
      promoCodeCopied(promotion.promoCode);
    }
  };

  const handleClick = () => {
    promotionCardTapped(promotion.id, promotion.title);
    navigate(`/rewards/promotions/${promotion.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="mx-4 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="relative">
        <img
          src={promotion.image}
          alt={promotion.title}
          className="w-full h-48 object-cover"
        />
        {/* Badge */}
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[promotion.category] ?? 'bg-white text-gray-800'}`}
        >
          {promotion.category === 'Discounts' ? 'Discount' : promotion.category === 'Sweepstakes' ? 'Sweepstakes' : promotion.category === 'Packages' ? 'Package' : 'Loyalty'}
        </span>
        {/* Favorite */}
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:scale-110 transition-transform"
        >
          <Heart size={16} className={favorited ? 'text-gray-900 fill-gray-900' : 'text-gray-400'} />
        </button>
        {/* Status badge */}
        {promotion.status === 'expiring-soon' && (
          <span className="absolute bottom-14 left-3 bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded-full">
            Ends soon
          </span>
        )}
        {/* Promo code bar */}
        {promotion.promoCode && (
          <div
            className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm flex items-center justify-between px-3 py-2"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-gray-500 text-xs">Promo code:</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
            >
              <span className="text-gray-900 text-xs font-bold">{promotion.promoCode}</span>
              <Copy size={13} className="text-gray-500" />
            </button>
          </div>
        )}
      </div>
      <div className="px-4 py-3">
        <p className="text-gray-900 text-base font-semibold leading-snug">{promotion.title}</p>
        <p className="text-gray-400 text-[13px] mt-0.5">{promotion.location}</p>
        <p className="text-gray-400 text-[13px]">
          {promotion.bookBy !== 'Ongoing' ? `Book by ${formatDate(promotion.bookBy)}` : 'Ongoing'}
        </p>
      </div>
    </div>
  );
}

function formatDate(iso: string) {
  if (!iso || iso === 'Ongoing') return iso;
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
