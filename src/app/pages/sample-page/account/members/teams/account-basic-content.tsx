import { Faq } from '@/app/partials/common/faq';
import { Help2 } from '@/app/partials/common/help2';
import { Teams } from './components';

export function AccountTeamsContent() {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <Teams />
      <Faq />
      <Help2 />
    </div>
  );
}
