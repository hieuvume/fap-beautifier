import { Fragment, useState } from 'react';
import { CardUserMini } from '@/app/partials/cards';
import { Search, Settings2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';

export interface IAvatar {
  className: string;
  image?: string;
  imageClass?: string;
  fallback?: string;
  badgeClass: string;
}

export interface IMiniCardsContentItem {
  avatar: IAvatar;
  name: string;
  email: string;
  verify: boolean;
}
type IMiniCardsContentItems = Array<IMiniCardsContentItem>;

export function NetworkMiniCardsContent() {
  const [searchInput, setSearchInput] = useState('');

  const items: IMiniCardsContentItems = [
    {
      avatar: {
        className: 'size-20 relative',
        image: '300-1.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Jenny Klabber',
      email: 'starlight.eth',
      verify: true,
    },
    {
      avatar: {
        className:
          'flex items-center justify-center relative text-2xl text-violet-500 size-20 ring-1 ring-violet-200 bg-violet-50 dark:border-violet-950 dark:bg-violet-950/30 rounded-full',
        fallback: 'S',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Sarah Johnson',
      email: 'sarahjohnson.eth',
      verify: false,
    },
    {
      avatar: {
        className:
          'flex items-center justify-center relative text-2xl text-green-500 size-20 ring-1 ring-green-200 bg-green-50 dark:border-green-950 dark:bg-green-950/30 rounded-full',
        fallback: 'M',
        badgeClass:
          'flex size-2.5 bg-accent rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Megan Tayloy',
      email: 'megantaylor.eth',
      verify: true,
    },
    {
      avatar: {
        className: 'size-20 relative',
        image: '300-8.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Alex Martines',
      email: 'amartnes.eth',
      verify: true,
    },
    {
      avatar: {
        className: 'size-20 relative',
        image: '300-9.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-accent rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Brian Davis',
      email: 'briandavis.eth',
      verify: true,
    },
    {
      avatar: {
        className:
          'flex items-center justify-center relative text-2xl text-destructive size-20 ring-1 ring-red-200 bg-red-50 dark:border-red-950 dark:bg-red-950/30 rounded-full',
        fallback: 'k',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Kevin Wong',
      email: 'kevinwong.eth',
      verify: true,
    },
    {
      avatar: {
        className: 'size-20 relative',
        image: '300-5.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Jenny Wilson',
      email: 'jennyklabber.eth',
      verify: false,
    },
    {
      avatar: {
        className: 'size-20 relative',
        image: '300-4.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Robert Fox',
      email: 'roberfox.eth',
      verify: false,
    },
    {
      avatar: {
        className:
          'flex items-center justify-center relative text-2xl text-primary size-20 ring-1 ring-blue-200 bg-blue-50 dark:border-blue-950 dark:bg-blue-950/30 rounded-full',
        fallback: 'B',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Bessie Cooper',
      email: 'bscoop.eth',
      verify: true,
    },
    {
      avatar: {
        className: 'size-20 relative',
        image: '300-13.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-accent rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Eleanor Pena',
      email: 'pena_707.eth',
      verify: false,
    },
    {
      avatar: {
        className: 'size-20 relative',
        image: '300-23.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Darlene Robertson',
      email: 'msfoxy.eth',
      verify: true,
    },
    {
      avatar: {
        className:
          'flex items-center justify-center relative text-2xl text-yellow-500 size-20 ring-1 ring-yellow-200 bg-yellow-50 dark:border-yellow-950 dark:bg-yellow-950/30 rounded-full',
        fallback: 'J',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Jerome Bell',
      email: 'nbatrends.eth',
      verify: true,
    },
    {
      avatar: {
        className: 'size-20 relative',
        image: '300-3.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-accent rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Devon Lane',
      email: 'notabooker.eth',
      verify: true,
    },
    {
      avatar: {
        className: 'size-20 relative',
        image: '300-11.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Ralph Edwards',
      email: 'lorenstore.eth',
      verify: true,
    },
    {
      avatar: {
        className:
          'flex items-center justify-center relative text-2xl text-green-500 size-20 ring-1 ring-green-200 bg-green-50 dark:border-green-950 dark:bg-green-950/30 rounded-full',
        fallback: 'T',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Theresa Webb',
      email: 'betterthanvettel.eth',
      verify: false,
    },
  ];

  const renderItem = (item: IMiniCardsContentItem, index: number) => (
    <CardUserMini
      avatar={item.avatar}
      name={item.name}
      email={item.email}
      verify={item.verify}
      key={index}
    />
  );

  return (
    <Fragment>
      <div className="flex items-center justify-between gap-2.5 flex-wrap mb-7.5">
        <h3 className="text-base text-mono font-medium">
          Showing {items.length} Users
        </h3>
        <div className="flex items-center flex-wrap gap-2.5">
          <Select defaultValue="active">
            <SelectTrigger className="w-28">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="w-32">
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="disabled">Disabled</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="latest">
            <SelectTrigger className="w-28">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="w-32">
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="older">Older</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Settings2 size={16} /> Filters
          </Button>
          <div className="flex relative">
            <Search className="size-4 text-muted-foreground absolute start-3 top-1/2 -translate-y-1/2" />
            <Input
              placeholder="Type name, team"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="ps-9 w-40"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-7.5">
        {items.map((item, index) => {
          return renderItem(item, index);
        })}
      </div>
      <div className="flex grow justify-center pt-5 lg:pt-7.5">
        <Button mode="link" underlined="dashed" asChild>
          <Link to="#">Show more Users</Link>
        </Button>
      </div>
    </Fragment>
  );
}
