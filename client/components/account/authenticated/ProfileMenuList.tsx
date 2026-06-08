import { ChevronRight } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { useAnalytics } from '../../../analytics/useAnalytics';

export function ProfileMenuList() {
  const { logout } = useAuth();
  const { myProfileTapped, settingsTapped, signOutClicked } = useAnalytics();

  const items = [
    {
      label: 'My profile',
      sub: 'Your account details',
      onClick: myProfileTapped,
    },
    {
      label: 'Settings and support',
      sub: 'Notifications, help, and more',
      onClick: settingsTapped,
    },
  ];

  return (
    <div className="mx-4">
      {items.map(({ label, sub, onClick }) => (
        <button
          key={label}
          onClick={onClick}
          className="w-full flex items-center justify-between py-4 border-b border-gray-100 hover:bg-gray-50 -mx-0 px-0 transition-colors"
        >
          <div className="text-left">
            <p className="text-gray-900 text-base font-semibold">{label}</p>
            <p className="text-gray-400 text-sm mt-0.5">{sub}</p>
          </div>
          <ChevronRight size={18} className="text-gray-400 flex-shrink-0" />
        </button>
      ))}
      <button
        onClick={() => { signOutClicked(); logout(); }}
        className="w-full text-left py-4 text-caesars-red text-sm font-medium hover:opacity-70 transition-opacity"
      >
        Sign out
      </button>
    </div>
  );
}
