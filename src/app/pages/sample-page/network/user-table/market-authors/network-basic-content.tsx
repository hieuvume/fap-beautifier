import { Faq } from '@/app/partials/common/faq';
import { Help2 } from '@/app/partials/common/help2';
import { Users } from './components';

export function NetworkMarketAuthorsContent() {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <Users />
      <Faq />
      <Help2 />
    </div>
  );
}
