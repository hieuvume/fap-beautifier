import { useState } from 'react';
import { CardConnection, CardConnectionRow } from '@/app/partials/cards';
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

export interface ITeamCrewAvatar {
  className: string;
  image?: string;
  imageClass?: string;
  fallback?: string;
  badgeClass: string;
}

export interface ITeamCrewGroup {
  filename: string;
}

export interface ITeamCrewTeam {
  size: string;
  group: ITeamCrewGroup[];
  more?: {
    number: number;
    variant: string;
  };
}

export interface ITeamCrewStatistic {
  total: string;
  description: string;
}

export interface ITeamCrewContentItem {
  name: string;
  info: string;
  avatar: ITeamCrewAvatar;
  email: string;
  team: ITeamCrewTeam;
  statistics: ITeamCrewStatistic[];
  connected: boolean;
}
type ITeamCrewContentItems = Array<ITeamCrewContentItem>;

export function NetworkUserCardsTeamCrewContent() {
  const [activeTab, setActiveTab] = useState('cards');
  const [searchInput, setSearchInput] = useState('');

  const items: ITeamCrewContentItems = [
    {
      name: 'Jenny Klabber',
      info: 'Pinnacle Innovate',
      avatar: {
        className: 'size-20 relative',
        image: '300-1.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      email: 'kevin@pinnacle.com',
      team: {
        size: 'size-7',
        group: [
          { filename: '300-4.png' },
          { filename: '300-1.png' },
          { filename: '300-2.png' },
        ],
        more: {
          number: 10,
          variant: 'text-white ring-background bg-green-500',
        },
      },
      statistics: [
        {
          total: '92',
          description: 'Purchases',
        },
        {
          total: '$69',
          description: 'Avg. Price',
        },
        {
          total: '$6,240',
          description: 'Total spent',
        },
      ],
      connected: true,
    },
    {
      name: 'Sarah Johnson',
      info: 'InnovateX',
      avatar: {
        className:
          'flex items-center justify-center relative text-2xl text-violet-500 size-20 ring-1 ring-violet-200 bg-violet-50 dark:border-violet-950 dark:bg-violet-950/30 rounded-full',
        fallback: 'S',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      email: 'sarahj@innx.com',
      team: {
        size: 'size-7',
        group: [
          { filename: '300-5.png' },
          { filename: '300-6.png' },
          { filename: '300-7.png' },
          { filename: '300-11.png' },
        ],
      },
      statistics: [
        {
          total: '123',
          description: 'Purchases',
        },
        {
          total: '$30',
          description: 'Avg. Price',
        },
        {
          total: '$3,713',
          description: 'Total spent',
        },
      ],
      connected: false,
    },
    {
      name: 'Kevin Wang',
      info: 'Pinnacle Innovate',
      avatar: {
        className:
          'flex items-center justify-center relative text-2xl text-destructive size-20 ring-1 ring-red-200 bg-red-50 dark:border-red-950 dark:bg-red-950/30 rounded-full',
        fallback: 'K',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      email: 'kevin@pinnacle.com',
      team: {
        size: 'size-7',
        group: [
          { filename: '300-29.png' },
          { filename: '300-33.png' },
          { filename: '300-23.png' },
          { filename: '300-31.png' },
        ],
      },
      statistics: [
        {
          total: '30',
          description: 'Purchases',
        },
        {
          total: '$150',
          description: 'Avg. Price',
        },
        {
          total: '$4,500',
          description: 'Total spent',
        },
      ],
      connected: true,
    },
    {
      name: 'Brian Davis',
      info: 'Vortex Tech',
      avatar: {
        className: 'size-20 relative',
        image: '300-9.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      email: 'brian@vortextech.com',
      team: {
        size: 'size-7',
        group: [
          { filename: '300-14.png' },
          { filename: '300-3.png' },
          { filename: '300-19.png' },
          { filename: '300-15.png' },
        ],
      },
      statistics: [
        {
          total: '87',
          description: 'Purchases',
        },
        {
          total: '$22',
          description: 'Avg. Price',
        },
        {
          total: '$1958',
          description: 'Total spent',
        },
      ],
      connected: true,
    },
    {
      name: 'Megan Taylor',
      info: 'Catalyst',
      avatar: {
        className:
          'flex items-center justify-center relative text-2xl text-green-500 size-20 ring-1 ring-green-200 bg-green-50 dark:border-green-950 dark:bg-green-950/30 rounded-full',
        fallback: 'M',
        badgeClass:
          'flex size-2.5 bg-accent rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      email: 'megan@catalyst.com',
      team: {
        size: 'size-7',
        group: [
          { filename: '300-5.png' },
          { filename: '300-26.png' },
          { filename: '300-6.png' },
          { filename: '300-1.png' },
        ],
      },
      statistics: [
        {
          total: '45',
          description: 'Purchases',
        },
        {
          total: '$300',
          description: 'Avg. Price',
        },
        {
          total: '$13,500',
          description: 'Total spent',
        },
      ],
      connected: false,
    },
    {
      name: 'Alex Martinez',
      info: 'Precision Solutions',
      avatar: {
        className: 'size-20 relative',
        image: '300-8.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      email: 'alex@kteam.com',
      team: {
        size: 'size-7',
        group: [
          { filename: '300-4.png' },
          { filename: '300-5.png' },
          { filename: '300-11.png' },
        ],
        more: {
          number: 10,
          variant: 'text-white ring-background bg-green-500',
        },
      },
      statistics: [
        {
          total: '63',
          description: 'Purchases',
        },
        {
          total: '$65',
          description: 'Avg. Price',
        },
        {
          total: '$4,095',
          description: 'Total spent',
        },
      ],
      connected: true,
    },
  ];

  const renderItem = (item: ITeamCrewContentItem, index: number) => (
    <CardConnection
      name={item.name}
      info={item.info}
      avatar={item.avatar}
      email={item.email}
      team={item.team}
      statistics={item.statistics}
      connected={item.connected}
      key={index}
    />
  );

  const renderRowItem = (item: ITeamCrewContentItem, index: number) => (
    <CardConnectionRow
      name={item.name}
      info={item.info}
      avatar={item.avatar}
      email={item.email}
      team={item.team}
      statistics={item.statistics}
      connected={item.connected}
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
        <div id="team_crew_card" className="flex flex-col gap-5 lg:gap-7.5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
            {items.map((item, index) => {
              return renderItem(item, index);
            })}
          </div>
          <div className="flex justify-center">
            <Button mode="link" underlined="dashed" asChild>
              <Link to="/public-profile/projects/3-columns">
                Show more projects
              </Link>
            </Button>
          </div>
        </div>
      ) : (
        <div id="team_crew_list">
          <div className="grid grid-cols-1 gap-5 lg:gap-7.5">
            {items.map((item, index) => {
              return renderRowItem(item, index);
            })}
          </div>
          <div className="flex grow justify-center pt-5 lg:pt-7.5">
            <Button mode="link" underlined="dashed" asChild>
              <Link to="/public-profile/projects/3-columns">
                Show more projects
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
