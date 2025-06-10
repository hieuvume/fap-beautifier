import { LogIn } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { TimelineItem } from './timeline-item';

const ActivitiesLogin = () => {
  return (
    <TimelineItem icon={LogIn} line={true}>
      <div className="flex flex-col">
        <div className="text-sm text-foreground">
          Jenny's last login to the{' '}
          <Button mode="link" asChild>
            <Link to="#">Customer Portal</Link>
          </Button>
        </div>
        <span className="text-xs text-secondary-foreground">
          5 days ago, 4:07 PM
        </span>
      </div>
    </TimelineItem>
  );
};

export { ActivitiesLogin };
