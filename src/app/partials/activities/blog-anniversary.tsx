import { Rocket } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { TimelineItem } from './timeline-item';

const ActivitiesBlogAnniversary = () => {
  return (
    <TimelineItem icon={Rocket} line={false}>
      <div className="flex flex-col">
        <div className="text-sm text-foreground">
          We recently
          <Button mode="link" asChild>
            <Link to="#">celebrated</Link>
          </Button>
          the blog's 1-year anniversary
        </div>
        <span className="text-xs text-secondary-foreground">
          3 weeks ago, 4:07 PM
        </span>
      </div>
    </TimelineItem>
  );
};

export { ActivitiesBlogAnniversary };
