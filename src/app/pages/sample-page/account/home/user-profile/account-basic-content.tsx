import { RecentUploads } from '@/app/pages/sample-page/public-profile/profiles/default';
import {
  BasicSettings,
  CalendarAccounts,
  CommunityBadges,
  Connections,
  PersonalInfo,
  StartNow,
  Work,
} from './components';

export function AccountUserProfileContent() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <PersonalInfo />
          <BasicSettings title="Basic Settings" />
          <Work />
          <CommunityBadges />
        </div>
      </div>
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <StartNow />
          <CalendarAccounts />
          <Connections url="#" />
          <RecentUploads title="My Files" />
        </div>
      </div>
    </div>
  );
}
