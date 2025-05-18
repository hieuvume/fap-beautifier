import { CircleCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from '@/app/components/ui/avatar';
import { Badge } from '@/app/components/ui/badge';

export default function Item9() {
  return (
    <div className="flex gap-2.5 px-5">
      <Avatar>
        <AvatarImage src="/media/avatars/300-21.png" alt="avatar" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-end-1.5 -bottom-1.5">
          <AvatarStatus variant="online" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>

      <div className="flex flex-col gap-3.5">
        <div className="flex flex-col gap-1">
          <div className="text-sm font-medium mb-px">
            <Link to="#" className="hover:text-primary text-mono font-semibold">
              Selene Silverleaf
            </Link>
            <span className="text-secondary-foreground">
              {' '}
              created a tasks in{' '}
            </span>
            <Link to="#" className="hover:text-primary text-primary">
              Design Project
            </Link>
          </div>

          <span className="flex items-center text-xs font-medium text-muted-foreground">
            4 days ago
            <span className="rounded-full size-1 bg-mono/30 mx-1.5"></span>
            Manager
          </span>
        </div>

        <div className="grid gap-1.5">
          <Badge
            size="sm"
            variant="success"
            appearance="outline"
            className="text-green-500 me-1 text-xs"
          >
            <CircleCheck /> Feature Prioritization
          </Badge>
          <Badge
            size="sm"
            variant="secondary"
            appearance="outline"
            className="text-secondary-foreground me-1 text-xs"
          >
            <CircleCheck /> Last Month User Research
          </Badge>
        </div>
      </div>
    </div>
  );
}
