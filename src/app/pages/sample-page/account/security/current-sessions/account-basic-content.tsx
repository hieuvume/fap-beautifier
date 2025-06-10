import { Faq } from '@/app/partials/common/faq';
import { Help } from '@/app/partials/common/help';
import { CurrentSessions } from './components/current-sessions';

export function AccountCurrentSessionsContent() {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <CurrentSessions />
      <Faq />
      <Help />
    </div>
  );
}
