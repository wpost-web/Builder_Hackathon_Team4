import { useAnalytics } from '../../analytics/useAnalytics';

type Tab = 'offers' | 'promotions' | 'benefits' | 'earnRedeem' | 'winnersCircle';

const tabs: { key: Tab; label: string }[] = [
  { key: 'offers', label: 'Offers' },
  { key: 'promotions', label: 'Promotions' },
  { key: 'benefits', label: 'Benefits' },
  { key: 'earnRedeem', label: 'Earn & Redeem' },
  { key: 'winnersCircle', label: 'Winners Circle' },
];

interface RewardsTabBarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function RewardsTabBar({ activeTab, onTabChange }: RewardsTabBarProps) {
  const { rewardsTabSelected } = useAnalytics();

  const handleTabChange = (tab: Tab) => {
    rewardsTabSelected(tab);
    onTabChange(tab);
  };

  return (
    <div className="bg-white px-4 pb-3">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => handleTabChange(key)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
              activeTab === key
                ? 'bg-gray-900 text-white'
                : 'border border-gray-200 text-gray-700 bg-white hover:bg-gray-50'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
