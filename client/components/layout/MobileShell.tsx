import { ReactNode } from 'react';

interface MobileShellProps {
  children: ReactNode;
  className?: string;
}

export function MobileShell({ children, className = '' }: MobileShellProps) {
  return (
    <div className="min-h-screen h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      <div
        className={`relative w-full max-w-[430px] h-full bg-white overflow-hidden flex flex-col ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
