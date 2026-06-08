import { useLocation } from 'react-router-dom';
import { MobileShell } from '../components/layout/MobileShell';
import { BottomNav } from '../components/layout/BottomNav';
import { Sparkles } from 'lucide-react';

const labels: Record<string, string> = {
  '/home': 'Home',
  '/book': 'Book',
  '/discover': 'Discover',
};

export default function PlaceholderPage() {
  const location = useLocation();
  const label = labels[location.pathname] ?? 'Page';

  return (
    <MobileShell>
      <div className="flex-1 flex flex-col items-center justify-center bg-[#F2F2F2] px-8 text-center">
        <Sparkles size={48} strokeWidth={1.5} style={{ color: '#C9921A' }} className="mb-4 opacity-60" />
        <h2 className="text-gray-900 text-2xl font-bold mb-2">{label}</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          This section is coming soon. Continue prompting to build out this page.
        </p>
      </div>
      <BottomNav />
    </MobileShell>
  );
}
