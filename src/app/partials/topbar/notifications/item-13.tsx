import { Link } from 'react-router-dom';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from '@/app/components/ui/avatar';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

export default function Item13() {
  return (
    <div className="flex grow gap-2.5 px-5">
      <Avatar>
        <AvatarImage src="/media/avatars/300-25.png" alt="avatar" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-end-1.5 -bottom-1.5">
          <AvatarStatus variant="online" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>

      <div className="flex flex-col gap-3.5 grow">
        <div className="flex flex-col gap-1">
          <div className="text-sm font-medium mb-px">
            <Link to="#" className="hover:text-primary text-mono font-semibold">
              Samuel Lee
            </Link>
            <span className="text-secondary-foreground">
              {' '}
              requested to add user to{' '}
            </span>
            <Link
              to="#"
              className="hover:text-primary text-primary font-semibold"
            >
              TechSynergy
            </Link>
          </div>

          <span className="flex items-center text-xs font-medium text-muted-foreground">
            22 hours ago
            <span className="rounded-full size-1 bg-mono/30 mx-1.5"></span>
            Dev Team
          </span>
        </div>

        <Card className="shadow-none flex items-center flex-row justify-between gap-1.5 px-2.5 py-2 rounded-lg bg-muted/70">
          <div className="flex flex-col">
            <Link
              to="#"
              className="hover:text-primary font-medium text-mono text-xs"
            >
              Ronald Richards
            </Link>
            <Link
              to="#"
              className="hover:text-primary text-muted-foreground font-medium text-xs"
            >
              ronald.richards@gmail.com
            </Link>
          </div>

          <Link
            to="#"
            className="hover:text-primary text-secondary-foreground font-medium text-xs"
          >
            Go to profile
          </Link>
        </Card>

        <div className="flex flex-wrap gap-2.5">
          <Button size="sm" variant="outline">
            Decline
          </Button>
          <Button size="sm" variant="mono">
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
