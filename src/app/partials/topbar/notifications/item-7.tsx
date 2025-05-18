import { AvatarGroup } from '@/app/partials/common/avatar-group';
import {
  CalendarDays,
  Lock,
  MapPin,
  NotepadText,
  Timer,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from '@/app/components/ui/avatar';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

export default function Item7() {
  return (
    <div className="flex grow gap-2.5 px-5">
      <Avatar>
        <AvatarImage src="/media/avatars/300-15.png" alt="avatar" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-end-1.5 -bottom-1.5">
          <AvatarStatus variant="offline" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>

      <div className="flex flex-col gap-3.5 grow">
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

        <Card className="shadow-none gap-1.5 py-2.5 rounded-lg bg-muted/70">
          <div className="flex flex-col gap-2.5 px-2.5 mb-0.5">
            <span className="font-medium text-secondary-foreground text-xs">
              Peparation for Release
              <Lock size={16} />
            </span>

            <div className="flex items-center gap-2.5">
              <Badge
                size="sm"
                variant="warning"
                appearance="outline"
                className="text-yellow-400 me-1"
              >
                <NotepadText /> Project
              </Badge>
              <Badge
                size="sm"
                variant="secondary"
                appearance="outline"
                className="text-secondary-foreground me-1"
              >
                <Users /> DigitalDream
              </Badge>
            </div>
          </div>

          <div className="border-b border-b-border my-1.5"></div>

          <div className="flex items-center justify-between flex-wrap gap-2.5 px-2.5">
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5">
                  <CalendarDays
                    size={16}
                    className="text-muted-foreground me-0.5 text-xs"
                  />
                  <span className="font-medium text-muted-foreground text-xs">
                    22 April 2024
                  </span>
                </div>

                <div className="flex items-center gap-0.5">
                  <Timer size={16} className="text-muted-foreground text-xs" />
                  <span className="font-medium text-muted-foreground text-xs">
                    12:00 PM - 14:00 PM
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-0.5">
                <MapPin size={16} className="text-muted-foreground text-xs" />
                <div className="font-medium text-muted-foreground text-xs">
                  Online
                  <Link
                    to="#"
                    className="hover:text-primary text-primary font-medium"
                  >
                    Zoom Meeting
                  </Link>
                </div>
              </div>
            </div>

            <AvatarGroup
              size="size-6"
              group={[
                { path: '/media/avatars/300-4.png' },
                { path: '/media/avatars/300-1.png' },
                { path: '/media/avatars/300-2.png' },
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
