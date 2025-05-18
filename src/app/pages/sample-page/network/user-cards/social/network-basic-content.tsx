import { useState } from 'react';
import { CardUserSocial, CardUserSocialRow } from '@/app/partials/cards';
import { LayoutGrid, List, Search, Settings2 } from 'lucide-react';
import { Link } from 'react-router';
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

export interface ISocialContentItem {
  avatar: {
    className: string;
    image?: string;
    imageClass?: string;
    badgeClass?: string;
    fallback?: string;
  };
  name: string;
  description: string;
  verify: boolean;
}
type ISocialContentItems = Array<ISocialContentItem>;

export function NetworkSocialContent() {
  const [activeTab, setActiveTab] = useState('cards');
  const [searchInput, setSearchInput] = useState('');

  const items: ISocialContentItems = [
    {
      avatar: {
        className: 'size-20 relative',
        image: '300-1.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full ring-2 ring-white absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Jenny Klabber',
      description: 'San Antonio, TX',
      verify: true,
    },
    {
      avatar: {
        className:
          'flex items-center justify-center relative text-2xl text-destructive size-20 ring-1 ring-red-200 bg-red-50 dark:border-red-950 dark:bg-red-950/30 rounded-full',
        fallback: 'K',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full ring-2 ring-white absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Kevin Warren',
      description: 'Fort Wayne, IN',
      verify: true,
    },
    {
      avatar: {
        className: 'size-20 relative',
        image: '300-9.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full ring-2 ring-white absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Brian Davis',
      description: 'Reno, NV',
      verify: false,
    },
    {
      avatar: {
        className: 'size-20 relative',
        image: '300-11.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full ring-2 ring-white absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Guy Hawkins',
      description: 'Irving, TX',
      verify: true,
    },
    {
      avatar: {
        className: 'size-20 relative',
        image: '300-30.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full ring-2 ring-white absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Albert Flores',
      description: 'Boise, ID',
      verify: false,
    },
    {
      avatar: {
        className:
          'flex items-center justify-center relative text-2xl text-info size-20 ring-1 ring-violet-200 bg-violet-50 dark:border-violet-950 dark:bg-violet-950/30 rounded-full',
        fallback: 'S',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full ring-2 ring-white absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Savannah Nguyen',
      description: 'Spokane, WA',
      verify: true,
    },
    {
      avatar: {
        className:
          'flex items-center justify-center relative text-2xl text-green-500 size-20 ring-1 ring-green-200 bg-green-50 dark:border-green-950 dark:bg-green-950/30 rounded-full',
        fallback: 'M',
        badgeClass:
          'flex size-2.5 bg-accent rounded-full ring-2 ring-white absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Marvin McKinney',
      description: 'Richmond, VA',
      verify: false,
    },
    {
      avatar: {
        className: 'size-20 relative',
        image: '300-3.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full ring-2 ring-white absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Darrell Steward',
      description: 'Baton Rouge, LA',
      verify: true,
    },
    {
      avatar: {
        className: 'size-20 relative',
        image: '300-5.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full ring-2 ring-white absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      name: 'Eleanor Pena',
      description: 'Des Moines, IA',
      verify: true,
    },
  ];

  const renderItem = (item: ISocialContentItem, index: number) => (
    <CardUserSocial
      avatar={item.avatar}
      name={item.name}
      description={item.description}
      verify={item.verify}
      key={index}
    />
  );

  const renderRowItem = (item: ISocialContentItem, index: number) => (
    <CardUserSocialRow
      avatar={item.avatar}
      name={item.name}
      description={item.description}
      verify={item.verify}
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
        <div id="social_card" className="flex flex-col gap-5 lg:gap-7.5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5">
            {items.map((item, index) => {
              return renderItem(item, index);
            })}
          </div>
          <div className="flex justify-center">
            <Button mode="link" underlined="dashed" asChild>
              <Link to="#">Show more Users</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div id="social_list">
          <div className="grid grid-cols-1 gap-5 lg:gap-7.5">
            {items.map((item, index) => {
              return renderRowItem(item, index);
            })}
          </div>
          <div className="flex grow justify-center pt-5 lg:pt-7.5">
            <Button mode="link" underlined="dashed" asChild>
              <Link to="#">Show more Users</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
