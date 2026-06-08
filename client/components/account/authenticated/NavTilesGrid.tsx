import { Link } from 'react-router-dom';
import { BookOpen, Tag, Wallet, Heart } from 'lucide-react';
import { useAnalytics } from '../../../analytics/useAnalytics';
import type { MemberProfile } from '../../../context/AuthContext';

interface NavTilesGridProps {
  member: MemberProfile;
}

const tiles = [
  { label: 'Bookings', icon: BookOpen, to: '/book', key: 'bookings' as const, iconColor: '#C9921A' },
  { label: 'Offers', icon: Tag, to: '/rewards', key: 'offers' as const, iconColor: '#C9921A' },
  { label: 'Wallet', icon: Wallet, to: '/home', key: 'wallet' as const, iconColor: '#C9921A' },
  { label: 'Favorites', icon: Heart, to: '/home', key: 'favorites' as const, iconColor: '#C9921A' },
];

export function NavTilesGrid({ member }: NavTilesGridProps) {
  const { navTileTapped } = useAnalytics();

  return (
    <div className="mx-4 grid grid-cols-2 gap-3">
      {tiles.map(({ label, icon: Icon, to, key }) => (
        <Link
          key={key}
          to={to}
          onClick={() => navTileTapped(key)}
          className="relative bg-gray-100 rounded-2xl p-4 flex flex-col min-h-[110px] hover:bg-gray-200 transition-colors overflow-hidden"
        >
          {key === 'bookings' && member.bookingsBadge > 0 && (
            <span className="absolute top-3 left-3 w-6 h-6 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
              {member.bookingsBadge}
            </span>
          )}
          <p className="text-gray-900 text-base font-semibold">{label}</p>
          <div className="flex-1 flex items-end justify-end">
            <Icon
              size={40}
              strokeWidth={1.5}
              style={{ color: '#C9921A' }}
              className="opacity-80"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
