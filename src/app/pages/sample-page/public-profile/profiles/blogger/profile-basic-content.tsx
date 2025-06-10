import { IStatisticsItems, Statistics, Summary } from '../creator';
import { CommunityBadges, Tags, UnlockPartnerships } from '../default';
import { Activity, Collaborate, Posts, Replies } from './components';

export function ProfileBloggerContent() {
  const data: IStatisticsItems = [
    { title: 'Topics', value: '397' },
    { title: 'Upvotes', value: '8.2k' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <Statistics data={data} />
          <Summary title="Profile" />
          <CommunityBadges title="Community Badges" />
          <Collaborate title="Collaborate" />
          <Tags title="Skills" />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <UnlockPartnerships />
          <Posts />
          <Replies />
          <Activity />
        </div>
      </div>
    </div>
  );
}
