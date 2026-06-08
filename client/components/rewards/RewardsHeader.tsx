import { CreditCard } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export function RewardsHeader() {
  const { member } = useAuth();

  return (
    <div className="bg-white px-5 pt-4 pb-0">
      {/* iOS status bar */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-black text-sm font-semibold">9:41</span>
        <div className="w-24 h-5 bg-black rounded-full absolute left-1/2 -translate-x-1/2" />
        <div className="flex items-center gap-1">
          <svg width="17" height="12" viewBox="0 0 17 12" fill="black">
            <rect x="0" y="4" width="3" height="8" rx="0.5" opacity="0.4" />
            <rect x="4.5" y="2.5" width="3" height="9.5" rx="0.5" opacity="0.6" />
            <rect x="9" y="0.5" width="3" height="11.5" rx="0.5" opacity="0.8" />
            <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
          </svg>
          <div className="flex items-center gap-0.5">
            <div className="w-6 h-3 border border-black rounded-sm relative">
              <div className="absolute inset-0.5 right-1 bg-black rounded-sm" />
              <div className="absolute right-0 top-0.5 w-0.5 h-2 bg-black rounded-r-sm" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pb-3">
        <h1 className="text-gray-900 text-2xl font-bold">Rewards</h1>
        <div className="flex items-center gap-1.5 border border-gray-300 rounded-full px-3 py-1.5">
          <CreditCard size={13} className="text-gray-600" />
          <span className="text-gray-700 text-sm font-semibold">
            {(member?.rewardsCredits ?? 3500).toLocaleString()} CR
          </span>
        </div>
      </div>
    </div>
  );
}
