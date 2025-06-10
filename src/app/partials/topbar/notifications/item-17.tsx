import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from '@/app/components/ui/avatar';
import { Button } from '@/app/components/ui/button';

export default function Item17() {
  return (
    <div className="flex grow gap-2.5 px-5">
      <Avatar>
        <AvatarImage src="/media/avatars/300-19.png" alt="avatar" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-end-1.5 -bottom-1.5">
          <AvatarStatus variant="online" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>

      <div className="flex flex-col gap-2.5 grow">
        <div className="flex flex-col gap-1 mb-1">
          <div className="text-sm font-medium mb-px">
            <Link to="#" className="hover:text-primary text-mono font-semibold">
              Natalie Wood
            </Link>
            <span className="text-secondary-foreground">
              {' '}
              wants to edit marketing project{' '}
            </span>
          </div>
          <span className="flex items-center text-xs font-medium text-muted-foreground">
            1 day ago
            <span className="rounded-full size-1 bg-mono/30 mx-1.5"></span>
            Designer
          </span>
        </div>

        <div className="kt-card shadow-none flex items-center flex-row gap-1.5 p-2.5 rounded-lg bg-muted/70">
          <div className="flex items-center justify-center w-[26px] h-[30px] shrink-0 bg-white rounded-sm border border-border">
            <img
              src={toAbsoluteUrl('/media/brand-logos/jira.svg')}
              className="h-5"
              alt="image"
            />
          </div>

          <Link
            to="#"
            className="hover:text-primary font-medium text-secondary-foreground text-xs me-1"
          >
            User-feedback.jira
          </Link>
          <span className="font-medium text-muted-foreground text-xs">
            Edited 1 hour ago
          </span>
        </div>

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
