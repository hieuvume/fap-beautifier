import { AvatarGroup } from '@/app/partials/common/avatar-group';
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

export default function Item10() {
  return (
    <div className="flex grow gap-2 px-5">
      <Avatar>
        <AvatarImage src="/media/avatars/300-15.png" alt="avatar" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-end-1.5 -bottom-1.5">
          <AvatarStatus variant="online" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>

      <div className="flex flex-col gap-3 grow">
        <div className="flex flex-col gap-1">
          <div className="text-sm font-medium mb-px">
            <Link to="#" className="hover:text-primary text-mono font-semibold">
              Nova Hawthorne
            </Link>
            <span className="text-secondary-foreground">
              {' '}
              sent you an meeting invation{' '}
            </span>
          </div>
          <span className="flex items-center text-xs font-medium text-muted-foreground">
            2 days ago
            <span className="rounded-full size-1 bg-mono/30 mx-1.5"></span>
            Dev Team
          </span>
        </div>

        <Card className="shadow-none p-2.5 rounded-lg bg-muted/70">
          <div className="flex items-center justify-between flex-wrap gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="border border-warning-transparent rounded-lg">
                <div className="flex items-center justify-center border-b border-b-warning-transparent bg-yellow-400/10 rounded-t-lg">
                  <span className="text-xs text-yellow-400 fw-medium p-1.5">
                    Apr
                  </span>
                </div>
                <div className="flex items-center justify-center size-9">
                  <span className="fw-semibold text-mono text-md tracking-tight">
                    12
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Link
                  to="#"
                  className="hover:text-primary font-medium text-secondary-foreground text-xs"
                >
                  Peparation For Release
                </Link>
                <span className="font-medium text-secondary-foreground text-xs">
                  9:00 PM - 10:00 PM
                </span>
              </div>
            </div>

            <AvatarGroup
              size="size-6"
              group={[
                { path: '/media/avatars/300-1.png' },
                { path: '/media/avatars/300-2.png' },
                { path: '/media/avatars/300-3.png' },
                {
                  fallback: '+3',
                  variant: 'text-white size-6 ring-background bg-green-500',
                },
              ]}
            />
          </div>
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
