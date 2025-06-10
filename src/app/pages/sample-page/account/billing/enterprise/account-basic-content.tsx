import { Help } from '@/app/partials/common/help';
import { PaymentMethods } from '../basic';
import {
  BillingInvoicing,
  CompanyProfile,
  LatestPayment,
  NextPayment,
  Upgrade,
} from './components';

export function AccountEnterpriseContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
      <div className="col-span-2">
        <Upgrade />
      </div>
      <div className="col-span-2">
        <CompanyProfile />
      </div>
      <div className="col-span-2 lg:col-span-1 flex">
        <LatestPayment />
      </div>
      <div className="col-span-2 lg:col-span-1 flex">
        <NextPayment />
      </div>
      <div className="col-span-2 lg:col-span-1 flex">
        <PaymentMethods />
      </div>
      <div className="col-span-2 lg:col-span-1">
        <BillingInvoicing />
      </div>
      <div className="col-span-2">
        <Help />
      </div>
    </div>
  );
}
