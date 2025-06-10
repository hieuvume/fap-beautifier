import { Help } from '@/app/partials/common/help';
import { Device } from './components';

export function AccountDeviceManagementContent() {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <Device />
      <Help />
    </div>
  );
}
