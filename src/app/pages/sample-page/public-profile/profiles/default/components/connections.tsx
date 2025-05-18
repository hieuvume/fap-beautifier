import { useState } from 'react';
import { DropdownMenu5 } from '@/app/partials/dropdown-menu/dropdown-menu-5';
import { Check, EllipsisVertical, Plus } from 'lucide-react';
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

interface IConnectionsItem {
  avatar: string;
  name: string;
  connections: number;
  connected: boolean;
}
type IConnectionsItems = Array<IConnectionsItem>;

interface IConnectionsProps {
  title: string;
}

const Connections = ({ title }: IConnectionsProps) => {
  const [items, setItems] = useState<IConnectionsItem[]>([
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
  ]);

  const toggleConnection = (index: number) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, connected: !item.connected } : item,
      ),
    );
  };

  const renderItem = (item: IConnectionsItem, index: number) => {
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
              className="text-sm font-medium text-mono hover:text-primary-active mb-px"
            >
              {item.name}
            </Link>
            <span className="text-xs text-secondary-foreground">
              {item.connections} connections
            </span>
          </div>
        </div>
        <Button
          className={`rounded-full ${
            item.connected
              ? 'bg-blue-500 text-white'
              : 'bg-blue-50 border border-blue-300 text-blue-600 hover:text-white hover:bg-blue-500 dark:border-blue-950 dark:bg-blue-950/30'
          }`}
          size="sm"
          mode="icon"
          variant={item.connected ? 'primary' : 'outline'}
          onClick={() => toggleConnection(index)}
        >
          {item.connected ? <Check size={18} /> : <Plus size={18} />}
        </Button>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader className="gap-2">
        <CardTitle className="card-title">{title}</CardTitle>
        <DropdownMenu5
          trigger={
            <Button variant="ghost" mode="icon">
              <EllipsisVertical />
            </Button>
          }
        />
      </CardHeader>
      <CardContent className="card-body">
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

export {
  Connections,
  type IConnectionsItem,
  type IConnectionsItems,
  type IConnectionsProps,
};
