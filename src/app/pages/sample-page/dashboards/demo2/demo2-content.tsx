import {
  BlockList,
  ReportSettings,
} from '@/app/pages/sample-page/account/security/privacy-settings';
import { EntryCallout, Teams } from '@/app/pages/sample-page/dashboards/demo1';
import { Integrations, ManageData, MyBalance, Options } from './components';

export function Demo2Content() {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <div className="grid lg:grid-cols-3 gap-y-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-2">
          <div className="grid md:grid-cols-2 gap-5 lg:gap-7.5 h-full items-stretch">
            <Options />
          </div>
        </div>
        <div className="lg:col-span-1">
          <MyBalance className="h-full" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-2">
          <EntryCallout className="h-full" />
        </div>
        <div className="lg:col-span-1">
          <ReportSettings className="h-full" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-2">
          <Integrations />
        </div>
        <div className="lg:col-span-1">
          <BlockList
            className="h-full"
            text="Users on the block list are unable to send chat requests or messages to you anymore, ever, or again"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-2">
          <Teams />
        </div>
        <div className="lg:col-span-1">
          <ManageData className="h-full" />
        </div>
      </div>
    </div>
  );
}
