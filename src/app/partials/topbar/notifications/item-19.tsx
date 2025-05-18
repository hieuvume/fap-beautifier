import { UserRoundCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from '@/app/components/ui/avatar';
import { Card } from '@/app/components/ui/card';

export default function Item19() {
  return (
    <div className="flex grow gap-2.5 px-5">
      <Avatar>
        <AvatarImage src="/media/avatars/300-17.png" alt="avatar" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-end-1.5 -bottom-1.5">
          <AvatarStatus variant="online" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>

      <div className="flex flex-col gap-2.5 grow">
        <div className="flex flex-col gap-1 mb-1">
          <div className="text-sm font-medium mb-px">
            <Link to="#" className="hover:text-primary text-mono font-semibold">
              Aaron Foster
            </Link>
            <span className="text-secondary-foreground">
              {' '}
              requested to view{' '}
            </span>
          </div>
          <span className="flex items-center text-xs font-medium text-muted-foreground">
            3 day ago
            <span className="rounded-full size-1 bg-mono/30 mx-1.5"></span>
            Larsen Ltd
          </span>
        </div>

        <Card className="kt-card shadow-none flex items-center flex-row gap-1.5 px-2.5 py-1.5 rounded-lg bg-muted/70">
          <UserRoundCheck size={16} className="text-green-500 text-base" />
          <span className="font-medium text-green-500 text-sm">
            You allowed Aaron to view
          </span>
        </Card>
      </div>
    </div>
  );
}
