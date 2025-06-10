import { Link } from 'react-router-dom';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from '@/app/components/ui/avatar';
import { Badge } from '@/app/components/ui/badge';

export default function Item2() {
  return (
    <div className="flex grow gap-2.5 px-5">
      <Avatar>
        <AvatarImage src="/media/avatars/300-5.png" alt="avatar" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-end-1.5 -bottom-1.5">
          <AvatarStatus variant="online" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>

      <div className="flex flex-col gap-3.5">
        <div className="flex flex-col gap-1">
          <div className="text-sm font-medium mb-px">
            <Link to="#" className="hover:text-primary text-mono font-semibold">
              Leslie Alexander
            </Link>
            <span className="text-secondary-foreground">
              {' '}
              added new tags to{' '}
            </span>
            <Link to="#" className="hover:text-primary text-primary">
              Web Redesign 2024
            </Link>
          </div>

          <span className="flex items-center text-xs font-medium text-muted-foreground">
            53 mins ago
            <span className="rounded-full size-1 bg-mono/30 mx-1.5"></span>
            ACME
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <Badge size="sm" variant="info" appearance="outline">
            Client-Request
          </Badge>
          <Badge size="sm" variant="warning" appearance="outline">
            Figma
          </Badge>
          <Badge size="sm" variant="secondary" appearance="outline">
            Redesign
          </Badge>
        </div>
      </div>
    </div>
  );
}
