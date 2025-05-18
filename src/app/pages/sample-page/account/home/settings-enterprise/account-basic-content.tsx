import { TrustedDevices } from '../../security/overview/components';
import { DataImport } from '../company-profile';
import { CalendarAccounts } from '../user-profile';
import {
  Account,
  AuthTwoFactor,
  Connections,
  PaymentHistory,
  SetGoal,
  Upgrade,
  YourCurrentPlan,
} from './components';

export function AccountSettingsEnterpriseContent() {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <Upgrade />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
        <div className="col-span-1">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            <Account title="Account" />
            <AuthTwoFactor />
            <CalendarAccounts />
            <DataImport />
            <TrustedDevices />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            <YourCurrentPlan />
            <SetGoal />
            <PaymentHistory />
            <Connections />
          </div>
        </div>
      </div>
    </div>
  );
}
