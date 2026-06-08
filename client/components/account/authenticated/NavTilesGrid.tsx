import { Link } from 'react-router-dom';
import { useAnalytics } from '../../../analytics/useAnalytics';
import type { MemberProfile } from '../../../context/AuthContext';
import { BookingsIcon, OffersNavIcon, WalletIcon, FavoritesIcon } from './NavTileIcons';

interface NavTilesGridProps {
  member: MemberProfile;
}

const tiles = [
  { label: 'Bookings', Icon: BookingsIcon, to: '/book', key: 'bookings' as const },
  { label: 'Offers', Icon: OffersNavIcon, to: '/rewards', key: 'offers' as const },
  { label: 'Wallet', Icon: WalletIcon, to: '/home', key: 'wallet' as const },
  { label: 'Favorites', Icon: FavoritesIcon, to: '/home', key: 'favorites' as const },
];

export function NavTilesGrid({ member }: NavTilesGridProps) {
  const { navTileTapped } = useAnalytics();

  return (
    <div className="mx-4 grid grid-cols-2 gap-3">
      {tiles.map(({ label, Icon, to, key }) => (
        <Link
          key={key}
          to={to}
          onClick={() => navTileTapped(key)}
          className="relative bg-gray-100 rounded-2xl p-4 flex flex-col min-h-[120px] hover:bg-gray-200 transition-colors overflow-hidden"
        >
          {key === 'bookings' && member.bookingsBadge > 0 && (
            <span className="absolute top-3 left-3 w-6 h-6 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center z-10">
              {member.bookingsBadge}
            </span>
          )}
          <p className="text-gray-900 text-base font-semibold">{label}</p>
          <div className="flex-1 flex items-end justify-end -mb-1 -mr-1">
            <Icon size={56} />
          </div>
        </Link>
      ))}
    </div>
  );
}
