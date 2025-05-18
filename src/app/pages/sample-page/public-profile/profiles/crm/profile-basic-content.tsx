import { Contributors, Tags } from '../default';
import {
  Activity,
  ApiCredentials,
  Attributes,
  Deals,
  GeneralInfo,
  RecentInvoices,
} from './components';

export function ProfileCRMContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <GeneralInfo />
          <Attributes />
          <ApiCredentials />
          <Tags title="Skills" />
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            <Deals />
            <Activity />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
              <Contributors />
              <RecentInvoices />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
