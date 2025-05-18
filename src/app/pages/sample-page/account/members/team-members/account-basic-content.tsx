import { Faq } from '@/app/partials/common/faq';
import { Help2 } from '@/app/partials/common/help2';
import { InvitePeople, InviteWithLink, Members } from './components';

export function AccountTeamMembersContent() {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <Members />
      <div className="grid lg:grid-cols-2 gap-5 lg:gap-7.5">
        <InvitePeople />
        <InviteWithLink />
      </div>
      <Faq />
      <Help2 />
    </div>
  );
}
