import { Faq } from '@/app/partials/common/faq';
import { Help } from '@/app/partials/common/help';
import { IPAddresses } from './components';

export function AccountAllowedIPAddressesContent() {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <IPAddresses />
      <Faq />
      <Help />
    </div>
  );
}
