import { Rocket } from 'lucide-react';
import { TimelineItem } from './timeline-item';

const ActivitiesProductSpecific = () => {
  return (
    <TimelineItem icon={Rocket} line={false}>
      <div className="flex flex-col">
        <div className="text-sm text-foreground">
          Explored niche demo ideas for product-specific solutions.
        </div>
        <span className="text-xs text-secondary-foreground">
          3 weeks ago, 4:07 PM
        </span>
      </div>
    </TimelineItem>
  );
};

export { ActivitiesProductSpecific };
