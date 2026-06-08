import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Copy } from 'lucide-react';
import { MobileShell } from '../components/layout/MobileShell';
import { mockPromotions } from '../data/mockPromotions';
import { useAnalytics } from '../analytics/useAnalytics';
import { PAGE_NAMES } from '../analytics/pageNames';

const categoryColors: Record<string, string> = {
  Discounts: 'bg-white text-gray-800',
  Sweepstakes: 'bg-red-800 text-white',
  Packages: 'bg-gray-900 text-white',
  Loyalty: 'bg-gray-900 text-white',
};

export default function PromotionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { pageView, promotionDetailViewed, favoriteToggled, detailBookNowClicked, promoCodeCopied } = useAnalytics();

  const promotion = mockPromotions.find((p) => p.id === id);
  const [favorited, setFavorited] = useState(promotion?.favorited ?? false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (promotion) {
      pageView(PAGE_NAMES.promotionDetail, { promotionTitle: promotion.title });
      promotionDetailViewed(promotion.id, promotion.title);
    }
  }, []);

  if (!promotion) {
    return (
      <MobileShell>
        <div className="flex flex-col items-center justify-center flex-1 gap-4">
          <p className="text-gray-500">Promotion not found</p>
          <button onClick={() => navigate(-1)} className="text-caesars-red font-semibold">Go back</button>
        </div>
      </MobileShell>
    );
  }

  const toggleFavorite = () => {
    const next = !favorited;
    setFavorited(next);
    favoriteToggled(promotion.id, next ? 'add' : 'remove', 'promotion');
  };

  const handleCopy = () => {
    if (promotion.promoCode) {
      navigator.clipboard.writeText(promotion.promoCode).catch(() => {});
      promoCodeCopied(promotion.promoCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <MobileShell>
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Hero image area */}
        <div className="relative flex-shrink-0 h-64">
          <img
            src={promotion.image}
            alt={promotion.title}
            className="w-full h-full object-cover"
          />
          {/* Top controls */}
          <div className="absolute top-10 left-0 right-0 flex items-center justify-between px-5">
            <button
              onClick={() => navigate(-1)}
              className="w-9 h-9 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center"
            >
              <ArrowLeft size={18} className="text-white" />
            </button>
            <button
              onClick={toggleFavorite}
              className="w-9 h-9 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center"
            >
              <Heart size={18} className={favorited ? 'text-white fill-white' : 'text-white'} />
            </button>
          </div>
          {/* Category badge */}
          <span
            className={`absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[promotion.category] ?? 'bg-white text-gray-800'}`}
          >
            {promotion.category === 'Discounts' ? 'Discount' : promotion.category}
          </span>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto bg-white px-5 py-5 pb-24">
          <h1 className="text-gray-900 text-2xl font-bold leading-tight mb-3">{promotion.title}</h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">{promotion.description}</p>

          {promotion.promoCode && (
            <div className="border-b border-gray-100 pb-4 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-500 text-sm">Promo code:</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  <span className="text-gray-900 font-bold text-sm">{promotion.promoCode}</span>
                  <Copy size={14} className="text-gray-400" />
                </button>
              </div>
              {copied && <p className="text-green-500 text-xs mt-1">Copied!</p>}
            </div>
          )}

          {promotion.bookBy !== 'Ongoing' && (
            <p className="text-gray-400 text-sm mb-5">Book by {formatDate(promotion.bookBy)}</p>
          )}

          <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-2">Terms</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{promotion.terms}</p>

          <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-2">Participating Resorts</p>
          <ul className="space-y-1">
            {promotion.participatingResorts.map((resort) => (
              <li key={resort} className="text-gray-700 text-sm flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                {resort}
              </li>
            ))}
          </ul>
        </div>

        {/* Fixed Book Now button */}
        <div className="flex-shrink-0 px-5 py-4 bg-white border-t border-gray-100">
          <button
            onClick={() => detailBookNowClicked(promotion.id, promotion.title)}
            className="w-full py-4 bg-gray-900 text-white text-base font-semibold rounded-2xl hover:bg-gray-800 transition-colors"
          >
            Book now
          </button>
        </div>
      </div>
    </MobileShell>
  );
}

function formatDate(iso: string) {
  if (!iso || iso === 'Ongoing') return iso;
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
