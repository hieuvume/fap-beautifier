import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from '@/app/components/ui/avatar';
import { Badge } from '@/app/components/ui/badge';

export default function Item16() {
  return (
    <div className="flex grow gap-2 px-5">
      <Avatar>
        <AvatarImage src="/media/avatars/300-29.png" alt="avatar" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-end-1.5 -bottom-1.5">
          <AvatarStatus variant="online" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>

      <div className="flex flex-col gap-3 grow">
        <div className="flex flex-col gap-1">
          <div className="text-sm font-medium mb-px">
            <Link to="#" className="hover:text-primary text-mono font-semibold">
              Ethan Parker
            </Link>
            <span className="text-secondary-foreground">
              {' '}
              created a new tasks to{' '}
            </span>
            <Link to="#" className="hover:text-primary text-primary">
              Site Sculpt
            </Link>
            <span className="text-secondary-foreground"> project</span>
          </div>
          <span className="flex items-center text-xs font-medium text-muted-foreground">
            3 days ago
            <span className="rounded-full size-1 bg-mono/30 mx-1.5"></span>
            Web Designer
          </span>
        </div>

        <div className="kt-card shadow-none p-3.5 gap-3.5 rounded-lg bg-muted/70">
          <div className="flex items-center justify-between flex-wrap gap-2.5">
            <div className="flex flex-col gap-1">
              <span className="font-medium text-mono text-xs">
                Location history is erased after Logging In
              </span>
              <span className="font-medium text-muted-foreground text-xs">
                Due Date: 15 May, 2024
              </span>
            </div>

            <div className="flex -space-x-2">
              <Avatar className="size-6">
                <AvatarImage
                  src={toAbsoluteUrl('/media/avatars/300-3.png')}
                  alt="image"
                />
                <AvatarFallback>CH</AvatarFallback>
              </Avatar>
              <Avatar className="size-6">
                <AvatarImage
                  src={toAbsoluteUrl('/media/avatars/300-2.png')}
                  alt="image"
                />
                <AvatarFallback>CH</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Badge size="sm" variant="success" appearance="outline">
              Improvement
            </Badge>
            <Badge size="sm" variant="destructive" appearance="outline">
              Bug
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
