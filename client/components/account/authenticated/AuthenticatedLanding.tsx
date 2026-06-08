import { useEffect } from 'react';
import { MemberHeader } from './MemberHeader';
import { GoldCoin } from './GoldCoin';
import { TierCreditsCard } from './TierCreditsCard';
import { RewardsCreditsCard } from './RewardsCreditsCard';
import { NavTilesGrid } from './NavTilesGrid';
import { ProfileMenuList } from './ProfileMenuList';
import { useAuth } from '../../../context/AuthContext';
import { useAnalytics } from '../../../analytics/useAnalytics';
import { PAGE_NAMES } from '../../../analytics/pageNames';

export function AuthenticatedLanding() {
  const { member } = useAuth();
  const { pageView } = useAnalytics();

  useEffect(() => {
    pageView(PAGE_NAMES.accountAuthenticated, { memberTier: member?.tier });
  }, []);

  if (!member) return null;

  return (
    <div className="flex-1 overflow-y-auto bg-[#F2F2F2]">
      {/* iOS status bar */}
      <div className="bg-white px-5 pt-3 pb-1 flex items-center justify-between">
        <span className="text-black text-sm font-semibold">9:41</span>
        <div className="w-24 h-5 bg-black rounded-full mx-auto absolute left-1/2 -translate-x-1/2 top-3" />
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

      <div className="bg-white pb-2">
        <MemberHeader member={member} />
        <GoldCoin />
      </div>

      <div className="flex flex-col gap-3 py-4">
        <TierCreditsCard member={member} />
        <RewardsCreditsCard member={member} />
        <NavTilesGrid member={member} />
        <div className="bg-white mx-4 rounded-2xl px-4 py-2 shadow-sm border border-gray-100">
          <ProfileMenuList />
        </div>
      </div>
    </div>
  );
}
