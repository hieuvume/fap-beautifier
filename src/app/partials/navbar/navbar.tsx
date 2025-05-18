import { ReactNode } from 'react';

function Navbar({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center flex-wrap md:flex-nowrap lg:items-end justify-between border-b border-border gap-3 lg:gap-6 mb-5 lg:mb-10">
      {children}
    </div>
  );
}

function NavbarActions({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-end grow lg:grow-0 lg:pb-4 gap-2.5 mb-1.5 lg:mb-0">
      {children}
    </div>
  );
}

export { Navbar, NavbarActions };
