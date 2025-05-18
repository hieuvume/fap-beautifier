import { DropdownMenu3 } from '@/app/partials/dropdown-menu/dropdown-menu-3';
import { DropdownMenu6 } from '@/app/partials/dropdown-menu/dropdown-menu-6';
import { EllipsisVertical } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

interface IContributorsItem {
  avatar: string;
  name: string;
  connections: number;
  connected: boolean;
}
type IContributorsItems = Array<IContributorsItem>;

const Contributors = () => {
  const items: IContributorsItems = [
    {
      avatar: '300-3.png',
      name: 'Tyler Hero',
      connections: 6,
      connected: false,
    },
    {
      avatar: '300-1.png',
      name: 'Esther Howard',
      connections: 29,
      connected: true,
    },
    {
      avatar: '300-14.png',
      name: 'Cody Fisher',
      connections: 34,
      connected: false,
    },
    {
      avatar: '300-7.png',
      name: 'Arlene McCoy',
      connections: 1,
      connected: true,
    },
  ];

  const renderItem = (item: IContributorsItem, index: number) => {
    return (
      <div key={index} className="flex items-center gap-2">
        <div className="flex items-center grow gap-2.5">
          <img
            src={toAbsoluteUrl(`/media/avatars/${item.avatar}`)}
            className="rounded-full size-9 shrink-0"
            alt="image"
          />
          <div className="flex flex-col">
            <Link
              to="#"
              className="text-sm font-semibold text-mono hover:text-primary-active mb-px"
            >
              {item.name}
            </Link>
            <span className="text-xs font-semibold text-secondary-foreground">
              {item.connections} contributors
            </span>
          </div>
        </div>
        <DropdownMenu3
          trigger={
            <Button variant="ghost" mode="icon">
              <EllipsisVertical />
            </Button>
          }
        />
      </div>
    );
  };

  return (
    <Card>
      <CardHeader className="gap-2">
        <CardTitle>Contributors</CardTitle>
        <DropdownMenu6
          trigger={
            <Button variant="ghost" mode="icon">
              <EllipsisVertical />
            </Button>
          }
        />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 lg:gap-5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button mode="link" underlined="dashed" asChild>
          <Link to="/public-profile/network">All Contributors</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { Contributors, type IContributorsItem, type IContributorsItems };
