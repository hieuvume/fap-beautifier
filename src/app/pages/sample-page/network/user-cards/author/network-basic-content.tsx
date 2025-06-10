/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { CardAuthor, CardAuthorRow } from '@/app/partials/cards';
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

export interface IAuthorContentAvatar {
  className: string;
  image: string;
  imageClass: string;
  badgeClass: string;
}

export interface IAuthorContentWork {
  image: string;
  title: string;
  id: number;
}

export interface IAuthorContentItem {
  avatar: IAuthorContentAvatar;
  bgImage: string;
  name: string;
  location: string;
  url?: string;
  works: IAuthorContentWork[];
}
type IAuthorContentItems = Array<IAuthorContentItem>;

export function NetworkAuthorContent() {
  const [activeTab, setActiveTab] = useState('cards');
  const [searchInput, setSearchInput] = useState('');

  const items: IAuthorContentItems = [
    {
      avatar: {
        className:
          'size-[120px] in-[.authors-row]:size-[80px] shrink-0 relative',
        image: '300-1.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-3 bg-green-500 rounded-full ring-2 ring-white absolute bottom-2 start-[93px] in-[.authors-row]:start-[64px]',
      },
      bgImage: 'bg-7.png',
      name: 'Jenny Klabber',
      location: 'Houston, Texas',
      url: '#',
      works: [
        {
          image: '6.jpg',
          title: 'Geometric Patterns',
          id: 81023,
        },
        {
          image: '7.jpg',
          title: 'Artistic Expressions',
          id: 67890,
        },
        {
          image: '24.jpg',
          title: 'Duolingo Tech Hub',
          id: 59374,
        },
        {
          image: '27.jpg',
          title: 'Duolingo Language',
          id: 34214,
        },
      ],
    },
    {
      avatar: {
        className:
          'size-[120px] in-[.authors-row]:size-[80px] shrink-0 relative',
        image: '300-3.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-3 bg-green-500 rounded-full ring-2 ring-white absolute bottom-2 start-[93px] in-[.authors-row]:start-[64px]',
      },
      bgImage: 'bg-8.png',
      name: 'Ralph Edwards',
      location: 'Sacramento, California',
      url: '',
      works: [
        {
          image: '1.jpg',
          title: 'Geometric Patterns',
          id: 98472,
        },
        {
          image: '25.jpg',
          title: 'Artistic Expressions',
          id: 20194,
        },
        {
          image: '3.jpg',
          title: 'Geometric Patterns',
          id: 37649,
        },
        {
          image: '5.jpg',
          title: 'Geometric Patterns',
          id: 47264,
        },
      ],
    },
    {
      avatar: {
        className:
          'size-[120px] in-[.authors-row]:size-[80px] shrink-0 relative',
        image: '300-17.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-3 bg-accent rounded-full ring-2 ring-white absolute bottom-2 start-[93px] in-[.authors-row]:start-[64px]',
      },
      bgImage: 'bg-9.png',
      name: 'Jacob Jones',
      location: 'Boston, Massachusetts',
      url: '',
      works: [
        {
          image: '27.jpg',
          title: 'Geometric Patterns',
          id: 20495,
        },
        {
          image: '28.jpg',
          title: 'Artistic Expressions',
          id: 73651,
        },
        {
          image: '29.jpg',
          title: 'Geometric Patterns',
          id: 19482,
        },
        {
          image: '5.jpg',
          title: 'Geometric Patterns',
          id: 39184,
        },
      ],
    },
    {
      avatar: {
        className:
          'size-[120px] in-[.authors-row]:size-[80px] shrink-0 relative',
        image: '300-5.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-3 bg-accent rounded-full ring-2 ring-white absolute bottom-2 start-[93px] in-[.authors-row]:start-[64px]',
      },
      bgImage: 'bg-10.png',
      name: 'Kristin Watson',
      location: 'Cleveland, Ohio',
      url: '',
      works: [
        {
          image: '30.jpg',
          title: 'Geometric Patterns',
          id: 10382,
        },
        {
          image: '31.jpg',
          title: 'Artistic Expressions',
          id: 49273,
        },
        {
          image: '32.jpg',
          title: 'Geometric Patterns',
          id: 39104,
        },
        {
          image: '5.jpg',
          title: 'Geometric Patterns',
          id: 49183,
        },
      ],
    },
  ];

  const renderCard = (item: IAuthorContentItem, index: number) => (
    <CardAuthor
      avatar={item.avatar}
      bgImage={item.bgImage}
      name={item.name}
      location={item.location}
      works={item.works}
      key={index}
    />
  );

  const renderListItem = (item: IAuthorContentItem, index: number) => (
    <CardAuthorRow
      avatar={item.avatar}
      bgImage={item.bgImage}
      name={item.name}
      location={item.location}
      works={item.works}
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
        <div id="author_cards" className="flex flex-col gap-5 lg:gap-7.5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
            {items.map((item: any, index: number) => {
              return renderCard(item, index);
            })}
          </div>
          <div className="flex justify-center">
            <Button mode="link" underlined="dashed" asChild>
              <Link to="#">Show more Users</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="authors-row" id="author_list">
          <div className="grid grid-cols-1 gap-5 lg:gap-7.5">
            {items.map((item: any, index: number) => {
              return renderListItem(item, index);
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
