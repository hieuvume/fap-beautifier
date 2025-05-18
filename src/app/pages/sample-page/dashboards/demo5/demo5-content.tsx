import { TeamInfo } from '@/app/pages/sample-page/account/members/team-info/components/team-info';
import { Teams } from '@/app/pages/sample-page/dashboards/demo1';
import { Faq } from '@/app/partials/common/faq';
import { Options } from './components';

export function Demo5Content() {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <div className="grid lg:grid-cols-3 gap-y-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-5 lg:gap-7.5 h-full items-stretch">
            <TeamInfo />
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="grid grid-cols-1 gap-5 lg:gap-7.5 h-full items-stretch">
            <Options />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-1 gap-5 lg:gap-7.5 items-stretch">
        <Teams />
        <Faq />
      </div>
    </div>
  );
}
