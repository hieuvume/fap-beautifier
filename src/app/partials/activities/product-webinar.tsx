import { CalendarCheck2, SquareDashedBottomCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Progress } from '@/app/components/ui/progress';
import { AvatarGroup } from '../common/avatar-group';
import { TimelineItem } from './timeline-item';

const ActivitiesProductWebinar = () => {
  return (
    <TimelineItem icon={CalendarCheck2} line={true}>
      <div className="flex flex-col pb-2.5">
        <span className="text-sm text-foreground">
          Jenny attended a webinar on new product features.
        </span>
        <span className="text-xs text-secondary-foreground">
          3 days ago, 11:45 AM
        </span>
      </div>
      <Card className="shadow-none p-4">
        <div className="flex flex-wrap gap-2.5">
          <SquareDashedBottomCode
            size={20}
            className="text-lg text-violet-500"
          />
          <div className="flex flex-col gap-5 grow">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-base font-medium text-mono cursor-pointer hover:text-primary mb-px">
                  Leadership Development Series: Part 1
                </span>
                <span className="text-xs text-secondary-foreground">
                  The first installment of a leadership development series.
                </span>
              </div>
              <Button mode="link" underlined="dashed">
                <Link to="/account/members/teams">View</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-7.5">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium text-secondary-foreground">
                  Code:
                </span>
                <span className="text-sm text-primary">#leaderdev-1</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm text-secondary-foreground">
                  Progress:
                </span>
                <Progress
                  value={80}
                  indicatorClassName="bg-green-500 min-w-[120px]"
                  className="h-1"
                />
              </div>
              <div className="flex items-center gap-1.5 lg:min-w-24 shrink-0 max-w-auto">
                <span className="text-sm text-secondary-foreground">
                  Guests:
                </span>
                <AvatarGroup
                  size="size-7"
                  group={[
                    { filename: '300-4.png' },
                    { filename: '300-1.png' },
                    { filename: '300-2.png' },
                    {
                      fallback: '+24',
                      variant:
                        'text-primary-foreground ring-background bg-primary',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </TimelineItem>
  );
};

export { ActivitiesProductWebinar };
