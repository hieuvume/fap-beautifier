import { ChartSpline } from 'lucide-react';
import { TimelineItem } from './timeline-item';

const ActivitiesDesignerWelcome = () => {
  return (
    <TimelineItem icon={ChartSpline} line={true}>
      <div className="flex flex-col">
        <div className="text-sm text-foreground">
          Onboarded a talented designer to our creative team, adding valuable
          expertise to upcoming projects.
        </div>
        <span className="text-xs text-secondary-foreground">
          2 weeks ago, 10:45 AM
        </span>
      </div>
    </TimelineItem>
  );
};

export { ActivitiesDesignerWelcome };
