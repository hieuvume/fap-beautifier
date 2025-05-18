import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from '@/app/components/ui/avatar';
import { Card } from '@/app/components/ui/card';

export default function Item6() {
  return (
    <div className="flex grow gap-2.5 px-5">
      <Avatar>
        <AvatarImage src="/media/avatars/300-14.png" alt="avatar" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-end-1.5 -bottom-1.5">
          <AvatarStatus variant="offline" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>

      <div className="flex flex-col gap-3.5 grow">
        <div className="flex flex-col gap-1">
          <div className="text-sm font-medium mb-px">
            <Link to="#" className="hover:text-primary text-mono font-semibold">
              Tyler Hero{' '}
            </Link>
            <span className="text-secondary-foreground">
              {' '}
              wants to view your design project{' '}
            </span>
          </div>
          <span className="flex items-center text-xs font-medium text-muted-foreground">
            3 day ago
            <span className="rounded-full size-1 bg-mono/30 mx-1.5"></span>
            Metronic Launcher mockups
          </span>
        </div>

        <Card className="shadow-none flex items-center flex-row gap-1.5 p-2.5 rounded-lg bg-muted/70">
          <div className="flex items-center justify-center w-[26px] h-[30px] shrink-0 bg-background rounded-sm border border-border">
            <img
              src={toAbsoluteUrl('/media/file-types/figma.svg')}
              className="h-5"
              alt="image"
            />
          </div>

          <Link
            to="#"
            className="hover:text-primary font-medium text-secondary-foreground text-xs me-1"
          >
            Launcher-UIkit.fig
          </Link>
          <span className="font-medium text-muted-foreground text-xs">
            Edited 2 mins ago
          </span>
        </Card>
      </div>
    </div>
  );
}
