import { MobileShell } from '../components/layout/MobileShell';
import { BottomNav } from '../components/layout/BottomNav';
import { UnauthenticatedLanding } from '../components/account/unauthenticated/UnauthenticatedLanding';
import { AuthenticatedLanding } from '../components/account/authenticated/AuthenticatedLanding';
import { useAuth } from '../context/AuthContext';

export default function Index() {
  const { isAuthenticated } = useAuth();

  return (
    <MobileShell>
      {isAuthenticated ? <AuthenticatedLanding /> : <UnauthenticatedLanding />}
      <BottomNav />
    </MobileShell>
  );
}
