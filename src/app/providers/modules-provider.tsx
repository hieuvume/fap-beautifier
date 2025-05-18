import { ReactNode } from 'react';
import { StoreClientProvider } from '@/app/pages/sample-page/store-client/components/context';
import { StoreClientWrapper } from '@/app/pages/sample-page/store-client/components/wrapper';

export function ModulesProvider({ children }: { children: ReactNode }) {
  return (
    <StoreClientProvider>
      <StoreClientWrapper>{children}</StoreClientWrapper>
    </StoreClientProvider>
  );
}
