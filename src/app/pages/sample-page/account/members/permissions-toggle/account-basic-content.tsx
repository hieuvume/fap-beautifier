import { Faq } from '@/app/partials/common/faq';
import { Help2 } from '@/app/partials/common/help2';
import { Members, PermissionsToggle } from './components';

export function AccountPermissionsToggleContent() {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <PermissionsToggle />
      <Members title="Team Members" />
      <Faq />
      <Help2 />
    </div>
  );
}
