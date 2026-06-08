import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Compass, Ticket, User } from 'lucide-react';

const navItems = [
  { label: 'Home', icon: Home, to: '/home' },
  { label: 'Book', icon: BookOpen, to: '/book' },
  { label: 'Discover', icon: Compass, to: '/discover' },
  { label: 'Rewards', icon: Ticket, to: '/rewards' },
  { label: 'Account', icon: User, to: '/' },
];

export function BottomNav() {
  const location = useLocation();

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <nav className="bg-[#0D0D0D] border-t border-gray-800 flex-shrink-0">
      <div className="flex items-center justify-around py-2 px-1">
        {navItems.map(({ label, icon: Icon, to }) => {
          const active = isActive(to);
          return (
            <Link
              key={label}
              to={to}
              className="flex flex-col items-center gap-0.5 py-1.5 px-3 min-w-0"
            >
              <Icon
                size={22}
                className={active ? 'text-white' : 'text-gray-500'}
                strokeWidth={active ? 2 : 1.5}
              />
              <span
                className={`text-[10px] font-medium leading-none ${
                  active ? 'text-white' : 'text-gray-500'
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center pb-1">
        <div className="w-32 h-1 bg-white rounded-full opacity-30" />
      </div>
    </nav>
  );
}
