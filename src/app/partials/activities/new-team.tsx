import { SquareDashedBottomCode, Users, Volleyball } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { AvatarGroup } from '../common/avatar-group';
import { Rating } from '../common/rating';
import { TimelineItem } from './timeline-item';

const ActivitiesNewTeam = () => {
  return (
    <TimelineItem icon={SquareDashedBottomCode} line={true}>
      <div className="grow">
        <div className="flex flex-col pb-2.5">
          <div className="text-sm text-foreground">
            A new team{' '}
            <Button
              mode="link"
              asChild
              className="text-sm font-medium text-mono hover:text-primary-active"
            >
              <Link to="#">Market Mavericks</Link>
            </Button>{' '}
            joined community
          </div>
          <span className="text-xs text-secondary-foreground">
            1 month ago, 11:45 AM
          </span>
        </div>
        <Card className="shadow-none p-4">
          <div className="flex flex-wrap justify-between items-center gap-7">
            <div className="flex items-center gap-4">
              <div className="relative size-[50px] shrink-0">
                <svg
                  className="w-full h-full stroke-blue-200 fill-blue-100 dark:stroke-blue-950 dark:fill-blue-950/30"
                  width="44"
                  height="48"
                  viewBox="0 0 44 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506
                      18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937
                      39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z"
                    fill="none"
                  />
                  <path
                    d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506
                      18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937
                      39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z"
                    stroke="none"
                    strokeOpacity="1"
                  />
                </svg>
                <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                  <Volleyball className="text-xl ps-px text-blue-500" />
                </div>
              </div>
              <div className="flex flex-col items-start gap-1.5">
                <Button
                  mode="link"
                  asChild
                  className="text-base font-medium hover:text-primary text-mono"
                >
                  <Link to="#">Market Mavericks</Link>
                </Button>
                <p className="text-sm text-secondary-foreground">
                  Navigating markets with strategic solutions
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6 lg:gap-12">
              <div className="flex flex-col items-end gap-5">
                <span className="text-xs text-secondary-foreground uppercase">
                  rating
                </span>
                <Rating rating={4} round={0.5} />
              </div>
              <div className="flex flex-col items-end gap-3 lg:min-w-24 shrink-0 max-w-auto">
                <span className="text-xs text-secondary-foreground uppercase">
                  members
                </span>
                <AvatarGroup
                  size="size-7"
                  group={[
                    { filename: '300-4.png' },
                    { filename: '300-1.png' },
                    { filename: '300-2.png' },
                    {
                      fallback: 'S',
                      variant:
                        'text-primary-foreground ring-background bg-primary',
                    },
                  ]}
                />
              </div>
              <div className="grid justify-end min-w-20">
                <Button variant="primary">
                  <Link to="#">
                    <Users />
                  </Link>{' '}
                  Join
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </TimelineItem>
  );
};

export { ActivitiesNewTeam };
