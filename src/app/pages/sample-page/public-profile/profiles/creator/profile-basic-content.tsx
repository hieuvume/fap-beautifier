import { Fragment } from 'react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { CommunityBadges, Tags } from '../default';
import {
  Activities,
  FeaturesHighlight,
  IStatisticsItems,
  IUsersItems,
  Statistics,
  Summary,
  UpcomingEvents,
  Users,
  Works,
} from './components';

export function ProfileCreatorContent() {
  const data: IStatisticsItems = [
    { title: 'Releases', value: '397' },
    { title: 'Earnigns', value: '89k' },
  ];

  const items: IUsersItems = [
    { image: '300-1.png' },
    { image: '300-2.png' },
    { image: '300-3.png' },
    { image: '300-5.png' },
    { image: '300-6.png' },
    { image: '300-11.png' },
    { image: '300-7.png' },
    { image: '300-12.png' },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <Statistics data={data} />
          <Users title="Members" items={items} />
          <Summary title="About" />
          <CommunityBadges title="Community Badges" />
          <Tags title="Skills" />
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <FeaturesHighlight
            image={
              <Fragment>
                <img
                  src={toAbsoluteUrl('/media/illustrations/18.svg')}
                  className="dark:hidden max-h-[200px]"
                  alt="image"
                />
                <img
                  src={toAbsoluteUrl('/media/illustrations/18-dark.svg')}
                  className="light:hidden max-h-[200px]"
                  alt="image"
                />
              </Fragment>
            }
            title={
              <>
                Restyle Your Space: <br /> Soft Goods Makeover Ideas
              </>
            }
            description="Transform your living space beautifully with our Restyle Your Space: Soft Goods Makeover Ideas tutorial"
            more={{ title: 'Get Started', url: '/network/get-started' }}
            features={[
              ['Time-Saving', 'Easy Revamp'],
              ['Budget-Friendly', 'Fresh Look'],
            ]}
          />
          <Works />
          <UpcomingEvents />
          <Activities />
        </div>
      </div>
    </div>
  );
}
