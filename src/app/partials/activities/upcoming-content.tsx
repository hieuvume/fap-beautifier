import { Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { TimelineItem } from './timeline-item';

const ActivitiesUpcomingContent = () => {
  return (
    <TimelineItem icon={Share2} line={true}>
      <div className="flex flex-col">
        <div className="text-sm text-foreground">
          I couldn't resist sharing a sneak peek of our{' '}
          <Button mode="link" asChild>
            <Link to="/public-profile/profiles/blogger">upcoming content</Link>
          </Button>
        </div>
        <span className="text-xs text-secondary-foreground">
          5 days ago, 4:07 PM
        </span>
      </div>
    </TimelineItem>
  );
};

export { ActivitiesUpcomingContent };
