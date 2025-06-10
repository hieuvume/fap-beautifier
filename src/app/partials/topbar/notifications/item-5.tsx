import { Link } from 'react-router-dom';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from '@/app/components/ui/avatar';

interface Item5Props {
  userName: string;
  avatar: string;
  badgeColor: 'online' | 'offline' | 'busy' | 'away' | null | undefined;
  description: string;
  day: string;
  link: string;
  date: string;
  info: string;
}

export default function Item5({
  userName,
  avatar,
  badgeColor,
  description,
  day,
  link,
  date,
  info,
}: Item5Props) {
  return (
    <div className="flex grow gap-2.5 px-5">
      <Avatar>
        <AvatarImage src={`/media/avatars/${avatar}`} alt="avatar" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-end-1.5 -bottom-1.5">
          <AvatarStatus variant={badgeColor} className="size-2.5" />
        </AvatarIndicator>
      </Avatar>

      <div className="flex flex-col gap-1">
        <div className="text-sm font-medium mb-px">
          <Link to="#" className="hover:text-primary text-mono font-semibold">
            {userName}
          </Link>
          <span className="text-secondary-foreground"> {description} </span>
          <Link to="#" className="hover:text-primary text-primary">
            {link}
          </Link>{' '}
          {day}
        </div>

        <span className="flex items-center text-xs font-medium text-muted-foreground">
          {date}
          <span className="rounded-full size-1 bg-mono/30 mx-1.5"></span>
          {info}
        </span>
      </div>
    </div>
  );
}
