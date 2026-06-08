import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Tag } from 'lucide-react';
import { MobileShell } from '../components/layout/MobileShell';
import { GoldIcon } from '../components/rewards/GoldIcon';
import { mockOffers } from '../data/mockOffers';
import { useAnalytics } from '../analytics/useAnalytics';
import { PAGE_NAMES } from '../analytics/pageNames';

export default function OfferDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { pageView, offerDetailViewed, favoriteToggled } = useAnalytics();

  const offer = mockOffers.find((o) => o.id === id);
  const [favorited, setFavorited] = useState(offer?.favorited ?? false);

  useEffect(() => {
    if (offer) {
      pageView(PAGE_NAMES.offerDetail, { offerTitle: offer.title });
      offerDetailViewed(offer.id, offer.title);
    }
  }, []);

  if (!offer) {
    return (
      <MobileShell>
        <div className="flex flex-col items-center justify-center flex-1 gap-4">
          <p className="text-gray-500">Offer not found</p>
          <button onClick={() => navigate(-1)} className="text-caesars-red font-semibold">Go back</button>
        </div>
      </MobileShell>
    );
  }

  const toggleFavorite = () => {
    const next = !favorited;
    setFavorited(next);
    favoriteToggled(offer.id, next ? 'add' : 'remove', 'offer');
  };

  return (
    <MobileShell>
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Crimson header */}
        <div
          className="flex-shrink-0 pt-12 pb-8 px-5 relative"
          style={{ background: 'linear-gradient(135deg, #8B1A1A 0%, #3A0808 100%)' }}
        >
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate(-1)}
              className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center"
            >
              <ArrowLeft size={18} className="text-white" />
            </button>
            <button
              onClick={toggleFavorite}
              className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center"
            >
              <Heart size={18} className={favorited ? 'text-white fill-white' : 'text-white'} />
            </button>
          </div>

          {/* Ticket card */}
          <div className="relative mx-4">
            <div className="bg-gray-50 rounded-3xl py-8 px-6 flex flex-col items-center relative overflow-visible">
              {/* Notch left */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#5A1010] rounded-full" />
              {/* Notch right */}
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#5A1010] rounded-full" />

              {offer.icon === 'Entries' ? (
                <div className="flex flex-col items-center gap-2">
                  <p className="text-caesars-gold text-3xl font-bold italic" style={{ fontFamily: 'Georgia, serif' }}>Entries</p>
                  <GoldIcon name="Ticket" size={72} />
                </div>
              ) : (
                <GoldIcon name={offer.icon} size={80} />
              )}
            </div>
          </div>

          {/* Category badge */}
          <div className="flex justify-center mt-4">
            <span className="flex items-center gap-1.5 bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              <Tag size={11} />
              {offer.category.toLowerCase()}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-white px-5 py-5">
          <h1 className="text-gray-900 text-2xl font-bold leading-tight mb-4">{offer.title}</h1>

          <div className="border-b border-gray-100 pb-3 mb-3">
            <div className="flex items-baseline justify-between">
              <div className="flex items-center gap-2">
                <Tag size={14} className="text-gray-400" />
                <span className="text-gray-500 text-sm">Offer:</span>
              </div>
              <span className="text-gray-900 text-sm font-semibold">{offer.offerCode}</span>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-4">
            Valid: {formatDate(offer.validFrom)} – {formatDate(offer.validTo)}
          </p>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">{offer.description}</p>

          <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-2">Participating Resorts</p>
          <ul className="mb-6 space-y-1">
            {offer.participatingResorts.map((resort) => (
              <li key={resort} className="text-gray-700 text-sm flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                {resort}
              </li>
            ))}
          </ul>

          <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-2">How to Redeem</p>
          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line pb-8">{offer.howToRedeem}</p>
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
