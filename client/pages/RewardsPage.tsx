import { useState, useEffect } from 'react';
import { MobileShell } from '../components/layout/MobileShell';
import { BottomNav } from '../components/layout/BottomNav';
import { RewardsHeader } from '../components/rewards/RewardsHeader';
import { TierMiniCard } from '../components/rewards/TierMiniCard';
import { RewardsTabBar } from '../components/rewards/RewardsTabBar';
import { OffersTab } from '../components/rewards/tabs/OffersTab';
import { PromotionsTab } from '../components/rewards/tabs/PromotionsTab';
import { WinnersCircleTab } from '../components/rewards/tabs/WinnersCircleTab';
import { BenefitsTab } from '../components/rewards/tabs/BenefitsTab';
import { EarnRedeemTab } from '../components/rewards/tabs/EarnRedeemTab';
import { useAnalytics } from '../analytics/useAnalytics';
import { PAGE_NAMES } from '../analytics/pageNames';

type Tab = 'offers' | 'promotions' | 'benefits' | 'earnRedeem' | 'winnersCircle';

export default function RewardsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('offers');
  const { pageView } = useAnalytics();

  useEffect(() => {
    pageView(PAGE_NAMES.rewardsOffers);
  }, []);

  return (
    <MobileShell>
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-shrink-0">
          <RewardsHeader />
          <TierMiniCard />
          <RewardsTabBar activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
        <div className="flex-1 overflow-y-auto bg-[#F2F2F2]">
          {activeTab === 'offers' && <OffersTab />}
          {activeTab === 'promotions' && <PromotionsTab />}
          {activeTab === 'benefits' && <BenefitsTab />}
          {activeTab === 'earnRedeem' && <EarnRedeemTab />}
          {activeTab === 'winnersCircle' && <WinnersCircleTab />}
        </div>
        <BottomNav />
      </div>
    </MobileShell>
  );
}
