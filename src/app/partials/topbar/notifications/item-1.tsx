import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from '@/app/components/ui/avatar';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';

interface ItemProps {
  userName: string;
  avatar: string;
  description: string;
  link: string;
  label: string;
  time: string;
  specialist: string;
  text: string;
}

export default function Item1({
  userName,
  avatar,
  description,
  link,
  label,
  time,
  specialist,
  text,
}: ItemProps) {
  const [emailInput, setEmailInput] = useState('');
  return (
    <div className="flex grow gap-2.5 px-5">
      <Avatar>
        <AvatarImage src={`/media/avatars/${avatar}`} alt="avatar" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-end-1.5 -bottom-1.5">
          <AvatarStatus variant="online" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>

      <div className="flex flex-col gap-3.5">
        <div className="flex flex-col gap-1">
          <div className="text-sm font-medium">
            <Link to="#" className="hover:text-primary text-mono font-semibold">
              {userName}
            </Link>
            <span className="text-secondary-foreground"> {description} </span>
            <Link to="#" className="hover:text-primary text-primary">
              {link}
            </Link>
            <span className="text-secondary-foreground"> {label} </span>
          </div>

          <span className="flex items-center text-xs font-medium text-muted-foreground">
            {time}
            <span className="rounded-full size-1 bg-mono/30 mx-1.5"></span>
            {specialist}
          </span>
        </div>

        <Card className="shadow-none flex flex-col gap-2.5 p-3.5 rounded-lg bg-muted/70">
          <div className="text-sm font-semibold text-secondary-foreground mb-px">
            <Link to="#" className="hover:text-primary text-mono font-semibold">
              @Cody{' '}
            </Link>
            <span className="text-secondary-foreground font-medium">
              {text}
            </span>
          </div>

          <div className="relative sm:max-w-full w-full">
            <ImageIcon
              className="absolute end-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4"
            />
            <Input
              type="text"
              placeholder="Reply"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
