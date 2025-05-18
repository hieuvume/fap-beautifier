import { HexagonBadge } from '@/app/partials/common/hexagon-badge';
import { DropdownMenu2 } from '@/app/partials/dropdown-menu/dropdown-menu-2';
import {
  CircleAlert,
  MessagesSquare,
  Truck,
  Volleyball,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface ICommunityBadgesItem {
  title: string;
  stroke: string;
  fill: string;
  icon: LucideIcon;
  iconColor: string;
}
type ICommunityBadgesItems = Array<ICommunityBadgesItem>;

const CommunityBadges = () => {
  const items: ICommunityBadgesItems = [
    {
      title: 'Expert Contributor Badge',
      stroke: 'stroke-blue-200 dark:stroke-blue-950',
      fill: 'fill-blue-50 dark:fill-blue-950/30',
      icon: Volleyball,
      iconColor: 'text-primary',
    },
    {
      title: 'Innovation Trailblazer',
      stroke: 'stroke-orange-200 dark:stroke-orange-950',
      fill: 'fill-orange-50 dark:fill-orange-950/30',
      icon: Zap,
      iconColor: 'text-orange-500',
    },
    {
      title: 'Impact Recognition',
      stroke: 'stroke-green-200 dark:stroke-green-950',
      fill: 'fill-green-50 dark:fill-green-950/30',
      icon: MessagesSquare,
      iconColor: 'text-green-500',
    },
    {
      title: 'Performance Honor',
      stroke: 'stroke-violet-200 dark:stroke-violet-950',
      fill: 'fill-violet-50 dark:fill-violet-950/30',
      icon: Truck,
      iconColor: 'text-violet-500',
    },
  ];

  const renderItem = (item: ICommunityBadgesItem, index: number) => {
    return (
      <div
        key={index}
        className="flex items-center justify-between flex-wrap group border border-border rounded-xl gap-2 px-3.5 py-2.5"
      >
        <div className="flex items-center flex-wrap gap-2.5">
          <HexagonBadge
            size="size-[50px]"
            badge={<item.icon className={`text-xl ps-px ${item.iconColor}`} />}
            stroke={item.stroke}
            fill={item.fill}
          />
          <span className="text-mono text-sm font-medium">{item.title}</span>
        </div>
        <Button
          mode="icon"
          appearance="ghost"
          variant="dim"
          className="text-input group-hover:text-primary-active"
        >
          <svg
            className="size-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="3"
              y="14.5"
              width="18"
              height="3"
              rx="1.5"
              fill="currentColor"
            />
            <rect
              x="3"
              y="6.5"
              width="18"
              height="3"
              rx="1.5"
              fill="currentColor"
            />
          </svg>
        </Button>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader className="gap-2">
        <CardTitle>Badges</CardTitle>
        <DropdownMenu2
          trigger={
            <Button variant="ghost" mode="icon">
              <CircleAlert />
            </Button>
          }
        />
      </CardHeader>
      <CardContent className="pb-7.5">
        <div className="grid gap-2.5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export {
  CommunityBadges,
  type ICommunityBadgesItem,
  type ICommunityBadgesItems,
};
