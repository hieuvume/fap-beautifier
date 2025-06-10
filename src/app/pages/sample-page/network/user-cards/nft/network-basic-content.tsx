import { useState } from 'react';
import { CardNFT2, CardNFT2Row } from '@/app/partials/cards';
import { LayoutGrid, List, Search, Settings2 } from 'lucide-react';
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
import { ToggleGroup, ToggleGroupItem } from '@/app/components/ui/toggle-group';

export interface IAvatar {
  className: string;
  image?: string;
  imageClass?: string;
  fallback?: string;
  badgeClass: string;
}

export interface IStatistic {
  total: string;
  description: string;
}

export interface INFTContentItem {
  name: string;
  info: string;
  avatar: IAvatar;
  email: string;
  statistics: IStatistic[];
  bgImage: string;
}
type INFTContentItems = Array<INFTContentItem>;

export function NetworkNFTContent() {
  const [activeTab, setActiveTab] = useState('cards');
  const [searchInput, setSearchInput] = useState('');

  const items: INFTContentItems = [
    {
      bgImage: 'bg-11.png',
      avatar: {
        className: 'size-20 shrink-0 relative',
        image: '300-1.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full ring-2 ring-white absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Jenny Klabber',
      email: '@jenny',
      info: '0x4aD5..F89Aa',
      statistics: [
        {
          total: '196 ETH',
          description: 'Sales',
        },
        {
          total: '2972',
          description: 'Items',
        },
        {
          total: '5%',
          description: 'Listed',
        },
      ],
    },
    {
      bgImage: 'bg-12.png',
      avatar: {
        className:
          'flex items-center justify-center relative text-2xl text-destructive size-20 ring-1 ring-red-200 bg-red-50 dark:border-red-950 dark:bg-red-950/30 rounded-full',
        fallback: 'K',
        badgeClass:
          'flex size-2.5 bg-accent rounded-full ring-2 ring-white absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Kevin Warren',
      email: '@wadeart',
      info: '0x4aD5..b2b3D',
      statistics: [
        {
          total: '23 ETH',
          description: 'Sales',
        },
        {
          total: '82',
          description: 'Items',
        },
        {
          total: '2%',
          description: 'Listed',
        },
      ],
    },
    {
      bgImage: 'bg-7.png',
      avatar: {
        className: 'size-20 shrink-0 relative',
        image: '300-12.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-accent rounded-full ring-2 ring-white absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Guy Hawkins',
      email: '@hawkinsnyc',
      info: '@0x3eF8..7gF9B',
      statistics: [
        {
          total: '2508 ETH',
          description: 'Sales',
        },
        {
          total: '27k',
          description: 'Items',
        },
        {
          total: '57%',
          description: 'Listed',
        },
      ],
    },
    {
      bgImage: 'bg-10.png',
      avatar: {
        className:
          'flex items-center justify-center relative text-2xl text-primary size-20 ring-1 ring-blue-200 bg-blue-50 dark:border-blue-950 dark:bg-blue-950/30 rounded-full',
        fallback: 'B',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full ring-2 ring-white absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Bessie Lane',
      email: '@booker777',
      info: '0x1aC3..9kL2P',
      statistics: [
        {
          total: '4 ETH',
          description: 'Sales',
        },
        {
          total: '105',
          description: 'Items',
        },
        {
          total: '93%',
          description: 'Listed',
        },
      ],
    },
    {
      bgImage: 'bg-11.png',
      avatar: {
        className: 'size-20 shrink-0 relative',
        image: '300-5.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full ring-2 ring-white absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Bessie Cooper',
      email: '@bessie_c',
      info: '0x9bD4..6hN3M',
      statistics: [
        {
          total: '123 ETH',
          description: 'Sales',
        },
        {
          total: '3123',
          description: 'Items',
        },
        {
          total: '7%',
          description: 'Listed',
        },
      ],
    },
    {
      bgImage: 'bg-8.png',
      avatar: {
        className: 'size-20 shrink-0 relative',
        image: '300-2.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-accent rounded-full ring-2 ring-white absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Jerome Bell',
      email: '@jerome',
      info: '0x2gH5..4tR7U',
      statistics: [
        {
          total: '67 ETH',
          description: 'Sales',
        },
        {
          total: '904',
          description: 'Items',
        },
        {
          total: '46%',
          description: 'Listed',
        },
      ],
    },
    {
      bgImage: 'bg-8.png',
      avatar: {
        className: 'size-20 shrink-0 relative',
        image: '300-14.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full ring-2 ring-white absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Floyd Miles',
      email: '@milesandwales',
      info: '0x8jK6..3qV1Z',
      statistics: [
        {
          total: '205 ETH',
          description: 'Sales',
        },
        {
          total: '2979',
          description: 'Items',
        },
        {
          total: '11%',
          description: 'Listed',
        },
      ],
    },
    {
      bgImage: 'bg-13.png',
      avatar: {
        className: 'size-20 shrink-0 relative',
        image: '300-3.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full ring-2 ring-white absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Albert Flores',
      email: '@alberanstanton',
      info: '0x7lM2..5xW8Y',
      statistics: [
        {
          total: '2723 ETH',
          description: 'Sales',
        },
        {
          total: '306k',
          description: 'Items',
        },
        {
          total: '8%',
          description: 'Listed',
        },
      ],
    },
    {
      bgImage: 'bg-7.png',
      avatar: {
        className: 'size-20 shrink-0 relative',
        image: '300-17.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-accent rounded-full ring-2 ring-white absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Jacob Jones',
      email: '@jacobeth_99',
      info: '0x5nB3..0sG9Q',
      statistics: [
        {
          total: '2 ETH',
          description: 'Sales',
        },
        {
          total: '68',
          description: 'Items',
        },
        {
          total: '74%',
          description: 'Listed',
        },
      ],
    },
  ];

  const renderItem = (item: INFTContentItem, index: number) => (
    <CardNFT2
      bgImage={item.bgImage}
      avatar={item.avatar}
      name={item.name}
      email={item.email}
      info={item.info}
      statistics={item.statistics}
      key={index}
    />
  );

  const renderRowItem = (item: INFTContentItem, index: number) => (
    <CardNFT2Row
      bgImage={item.bgImage}
      avatar={item.avatar}
      name={item.name}
      email={item.email}
      info={item.info}
      statistics={item.statistics}
      key={index}
    />
  );

  return (
    <div className="flex flex-col items-stretch gap-5 lg:gap-7.5">
      <div className="flex flex-wrap items-center gap-5 justify-between">
        <h3 className="text-base text-mono font-medium">
          Showing {items.length} Users
        </h3>
        <div className="flex items-center flex-wrap gap-5">
          <div className="flex items-center gap-2.5">
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
          </div>
          <div className="flex relative">
            <Search className="size-4 text-muted-foreground absolute start-3 top-1/2 -translate-y-1/2" />
            <Input
              placeholder="Type name, team"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="ps-9 w-40"
            />
          </div>
          <ToggleGroup
            type="single"
            variant="outline"
            value={activeTab}
            onValueChange={(value) => {
              if (value) setActiveTab(value);
            }}
          >
            <ToggleGroupItem value="cards">
              <LayoutGrid size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem value="list">
              <List size={16} />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      {activeTab === 'cards' ? (
        <div id="network_cards">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5">
            {items.map((item, index) => {
              return renderItem(item, index);
            })}
          </div>
          <div className="flex grow justify-center pt-5 lg:pt-7.5">
            <Button mode="link" underlined="dashed" asChild>
              <Link to="/public-profile/profiles/nft">Show more Users</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div id="network_list">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            {items.map((item, index) => {
              return renderRowItem(item, index);
            })}
          </div>
          <div className="flex grow justify-center pt-5 lg:pt-7.5">
            <Button mode="link" underlined="dashed" asChild>
              <Link to="/public-profile/profiles/nft">Show more Users</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
