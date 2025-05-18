import { Rocket } from 'lucide-react';
import { TimelineItem } from './timeline-item';

const ActivitiesProjectStatus = () => {
  return (
    <TimelineItem icon={Rocket} line={false}>
      <div className="flex flex-col">
        <div className="text-sm text-mono">
          Completed phase one of client project ahead of schedule.
        </div>
        <span className="text-xs text-secondary-foreground">
          6 days ago, 10:45 AM
        </span>
      </div>
    </TimelineItem>
  );
};

export { ActivitiesProjectStatus };
