import { Heart, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from '@/app/components/ui/avatar';
import { Badge } from '@/app/components/ui/badge';
import { Card } from '@/app/components/ui/card';

export default function Item12() {
  return (
    <div className="flex grow gap-2.5 px-5">
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
              created message to{' '}
            </span>
            <Link to="#" className="hover:text-primary text-primary">
              SiteSculpt
            </Link>
            <span className="text-secondary-foreground"> project </span>
          </div>
          <span className="flex items-center text-xs font-medium text-muted-foreground">
            4 days ago
            <span className="rounded-full size-1 bg-mono/30 mx-1.5"></span>
            Manager
          </span>
        </div>

        <Card className="shadow-none flex flex-col gap-2.5 p-3.5 rounded-lg">
          <div className="font-semibold text-mono text-sm">Dashboards</div>
          <p className="font-medium text-secondary-foreground text-sm mb-1 leading-5">
            Hello everyone, question regarding the preparation of
            <br />
            new dashboards. The update is coming soon, when will the new themes
            be ready?
          </p>

          <div className="flex items-center gap-2.5">
            <Badge
              size="sm"
              variant="primary"
              appearance="outline"
              className="text-primary me-1 text-sm"
            >
              <Mail /> 26 Comments
            </Badge>
            <Badge
              size="sm"
              variant="secondary"
              appearance="outline"
              className="text-muted-foreground me-1 text-sm"
            >
              <Heart /> 13 Likes
            </Badge>
          </div>
        </Card>
      </div>
    </div>
  );
}
