import { useState } from 'react';
import { CardTeam, CardTeamRow } from '@/app/partials/cards';
import {
  Brain,
  Ghost,
  LayoutGrid,
  LineChart,
  List,
  LucideIcon,
  MessageSquareCode,
  ShieldOff,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/app/components/ui/toggle-group';

interface ITeamsItem {
  icon: LucideIcon;
  title: string;
  description: string;
  labels: string[];
  team: {
    size?: string;
    group: Array<{ filename?: string; variant?: string; fallback?: string }>;
    more?: {
      number: number;
      variant: string;
    };
    className?: string;
  };
  connected: boolean;
  rating: {
    value: number;
    round: number;
  };
}
type ITeamsItems = Array<ITeamsItem>;

const Teams = () => {
  const [activeView, setActiveView] = useState('cards');

  const items: ITeamsItems = [
    {
      icon: Ghost,
      title: 'Pixel Crafters',
      description: 'Crafting digital experiences for the world',
      labels: ['Ul', 'DevOps'],
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
      connected: true,
      rating: { value: 5, round: 0 },
    },
    {
      icon: Sparkles,
      title: 'Code Masters',
      description: 'Coding the future, one line at a time',
      labels: ['Dev', 'Al', 'Cloud'],
      team: {
        size: 'size-7',
        group: [
          { filename: '300-5.png' },
          { filename: '300-7.png' },
          { filename: '300-11.png' },
        ],
      },
      connected: true,
      rating: { value: 5, round: 0 },
    },
    {
      icon: Brain,
      title: 'Market Mavericks',
      description: 'Navigating markets with strategic solutions',
      labels: ['Marketing', 'Brand'],
      team: {
        size: 'size-7',
        group: [
          { filename: '300-4.png' },
          { filename: '300-1.png' },
          { filename: '300-2.png' },
          {
            fallback: 'S',
            variant: 'text-primary-foreground ring-background bg-primary',
          },
        ],
      },
      connected: false,
      rating: { value: 4, round: 0.5 },
    },
    {
      icon: ShieldOff,
      title: 'Data Dynamo',
      description: 'Transforming data into actionable insights',
      labels: ['Analytics', 'Data'],
      team: {
        size: 'size-7',
        group: [{ filename: '300-23.png' }, { filename: '300-31.png' }],
        className: 'lg:justify-end',
      },
      connected: true,
      rating: { value: 4, round: 0.5 },
    },
    {
      icon: LineChart,
      title: 'Market Mavericks',
      description: 'Navigating markets with strategic solutions',
      labels: ['Marketing', 'Brand'],
      team: {
        size: 'size-7',
        group: [
          { filename: '300-4.png' },
          { filename: '300-1.png' },
          { filename: '300-14.png' },
          {
            fallback: 'A',
            variant: 'text-primary-foreground ring-background bg-primary',
          },
        ],
      },
      connected: false,
      rating: { value: 5, round: 0 },
    },
    {
      icon: MessageSquareCode,
      title: 'Code Masters',
      description: 'Coding the future, one line at a time',
      labels: ['Dev', 'Al', 'Cloud'],
      team: {
        size: 'size-7',
        group: [
          { filename: '300-5.png' },
          { filename: '300-6.png' },
          { filename: '300-7.png' },
          { filename: '300-11.png' },
        ],
      },
      connected: true,
      rating: { value: 3, round: 0 },
    },
    {
      icon: Star,
      title: 'Fusion Thinkers',
      description: 'Merging strategy for impactful results',
      labels: ['Creative', 'Strat'],
      team: {
        size: 'size-7',
        group: [
          { filename: '300-2.png' },
          { filename: '300-17.png' },
          { filename: '300-12.png' },
        ],
        more: {
          number: 23,
          variant: 'text-white ring-background bg-green-500 size-7',
        },
      },
      connected: false,
      rating: { value: 5, round: 0 },
    },
    {
      icon: Users,
      title: ' Spark Surge',
      description: ' Igniting ideas into powerful solutions',
      labels: ['Innovation', 'Tech'],
      team: {
        size: 'size-7',
        group: [
          { filename: '300-14.png' },
          { filename: '300-3.png' },
          { filename: '300-19.png' },
          { filename: '300-9.png' },
        ],
      },
      connected: true,
      rating: { value: 2, round: 0.5 },
    },
    {
      icon: Star,
      title: 'Quantum Craft',
      description: 'Infusing concepts into cutting-edge tech',
      labels: ['Marketing', 'Brand'],
      team: {
        size: 'size-7',
        group: [
          { filename: '300-1.png' },
          { filename: '300-16.png' },
          {
            fallback: 'K',
            variant: 'text-white ring-background bg-violet-500',
          },
        ],
      },
      connected: false,
      rating: { value: 4, round: 0 },
    },
  ];

  const renderItem = (item: ITeamsItem, index: number) => {
    return (
      <CardTeam
        icon={item.icon}
        title={item.title}
        description={item.description}
        labels={item.labels}
        team={item.team}
        connected={item.connected}
        rating={item.rating}
        key={index}
      />
    );
  };

  const renderData = (data: ITeamsItem, index: number) => {
    return (
      <CardTeamRow
        icon={data.icon}
        title={data.title}
        description={data.description}
        labels={data.labels}
        team={data.team}
        connected={data.connected}
        rating={data.rating}
        key={index}
      />
    );
  };

  return (
    <div className="flex flex-col items-stretch gap-5 lg:gap-7.5">
      <div className="flex flex-wrap items-center gap-5 justify-between">
        <h3 className="text-lg text-foreground font-semibold">
          {items.length} Teams
        </h3>
        <ToggleGroup
          type="single"
          variant="outline"
          value={activeView}
          onValueChange={(value) => {
            if (value) setActiveView(value);
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
      {activeView === 'cards' && (
        <div id="teams_cards">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7.5">
            {items.map((item, index) => {
              return renderItem(item, index);
            })}
          </div>
          <div className="flex grow justify-center pt-5 lg:pt-7.5">
            <Button mode="link" underlined="dashed" asChild>
              <Link to="/account/members/teams">Show more Teams</Link>
            </Button>
          </div>
        </div>
      )}
      {activeView === 'list' && (
        <div id="teams_list">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            {items.map((data, index) => {
              return renderData(data, index);
            })}
          </div>
          <div className="flex grow justify-center pt-5 lg:pt-7.5">
            <Button mode="link" underlined="dashed" asChild>
              <Link to="/account/members/teams">Show more Teams</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export { Teams, type ITeamsItem, type ITeamsItems };
