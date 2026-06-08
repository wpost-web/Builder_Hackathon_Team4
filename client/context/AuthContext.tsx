import { createContext, useContext, useState, ReactNode } from 'react';

export interface MemberProfile {
  name: string;
  tier: 'Gold' | 'Platinum' | 'Diamond' | 'Diamond Elite';
  tierCredits: number;
  tierCreditsToNext: number;
  nextTier: string;
  rewardsCredits: number;
  bookingsBadge: number;
}

interface AuthContextValue {
  isAuthenticated: boolean;
  member: MemberProfile | null;
  login: (profile: MemberProfile) => void;
  logout: () => void;
}

const mockMemberFull: MemberProfile = {
  name: 'Julius Caesar',
  tier: 'Gold',
  tierCredits: 3000,
  tierCreditsToNext: 1499,
  nextTier: 'Platinum',
  rewardsCredits: 3560,
  bookingsBadge: 3,
};

export const mockMemberEmpty: MemberProfile = {
  name: 'Julius Caesar',
  tier: 'Gold',
  tierCredits: 0,
  tierCreditsToNext: 5000,
  nextTier: 'Platinum',
  rewardsCredits: 0,
  bookingsBadge: 0,
};

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  member: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [member, setMember] = useState<MemberProfile | null>(null);

  const login = (profile: MemberProfile) => setMember(profile);
  const logout = () => setMember(null);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: member !== null,
        member,
        login: (profile) => login(profile),
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { mockMemberFull };
export function useAuth() {
  return useContext(AuthContext);
}
