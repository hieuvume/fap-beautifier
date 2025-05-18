import { Help } from '@/app/partials/common/help';
import { SecurityLog } from './components';

export function AccountSecurityLogContent() {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <SecurityLog />
      <Help />
    </div>
  );
}
