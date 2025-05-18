import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';

interface IBlockListItem {
  avatar: string;
  name: string;
  commits: number;
}
type IBlockListItems = Array<IBlockListItem>;

interface IBlockListProps {
  text: string;
  limit?: number;
  className?: string;
}

const BlockList = ({ text, limit, className }: IBlockListProps) => {
  const items: IBlockListItems = [
    {
      avatar: 'gray/1.png',
      name: 'Esther Howard',
      commits: 6,
    },
    {
      avatar: 'gray/2.png',
      name: 'Tyler Hero',
      commits: 29,
    },
    {
      avatar: 'gray/3.png',
      name: 'Arlene McCoy',
      commits: 34,
    },
    {
      avatar: 'gray/4.png',
      name: 'Cody Fisher',
      commits: 1,
    },
  ];

  const renderItem = (item: IBlockListItem, index: number) => {
    return (
      <div key={index} className="flex items-center justify-between gap-2.5">
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9">
            <AvatarImage
              src={toAbsoluteUrl(`/media/avatars/${item.avatar}`)}
              alt="image"
            />
            <AvatarFallback>CH</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <Link
              to="/public-profile/teams"
              className="flex items-center gap-1.5 leading-none font-medium text-sm text-mono hover:text-primary"
            >
              {item.name}
            </Link>
            <span className="text-sm text-secondary-foreground">
              {item.commits} commit{item.commits > 1 ? 's' : ''}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <Button variant="ghost" mode="icon">
            <Trash2 />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Block List</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="text-sm text-foreground">{text}</div>
        <div className="flex items-center">
          <Input
            type="text"
            placeholder="Block new user"
            className="rounded-r-none border-r-0 focus:ring-0 focus:ring-offset-0"
          />
          <Button className="rounded-l-none border-l-0">Add</Button>
        </div>
        <div className="flex flex-col gap-5">
          {items.map((item, index) => {
            if (limit === undefined || index < limit) {
              return renderItem(item, index);
            }
            return null;
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export {
  BlockList,
  type IBlockListItem,
  type IBlockListItems,
  type IBlockListProps,
};
