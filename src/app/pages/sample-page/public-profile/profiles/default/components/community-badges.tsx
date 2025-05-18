import { HexagonBadge } from '@/app/partials/common/hexagon-badge';
import {
  MessagesSquare,
  Truck,
  Volleyball,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface ICommunityBadgesItem {
  stroke: string;
  fill: string;
  icon: LucideIcon;
  iconColor: string;
}
type ICommunityBadgesItems = Array<ICommunityBadgesItem>;

interface ICommunityBadgesProps {
  title: string;
}

const CommunityBadges = ({ title }: ICommunityBadgesProps) => {
  const items: ICommunityBadgesItems = [
    {
      stroke: 'stroke-blue-200 dark:stroke-blue-950',
      fill: 'fill-blue-50 dark:fill-blue-950/30',
      icon: Volleyball,
      iconColor: 'text-blue-500',
    },
    {
      stroke: 'stroke-orange-200 dark:stroke-orange-950',
      fill: 'fill-orange-50 dark:fill-orange-950/30',
      icon: Zap,
      iconColor: 'text-orange-500',
    },
    {
      stroke: 'stroke-green-200 dark:stroke-green-950',
      fill: 'fill-green-50 dark:fill-green-950/30',
      icon: MessagesSquare,
      iconColor: 'text-green-500',
    },
    {
      stroke: 'stroke-violet-200 dark:stroke-violet-950',
      fill: 'fill-violet-50  dark:fill-violet-950/30',
      icon: Truck,
      iconColor: 'text-violet-500',
    },
  ];

  const renderItem = (item: ICommunityBadgesItem, index: number) => {
    return (
      <HexagonBadge
        key={index}
        stroke={item.stroke}
        fill={item.fill}
        size="size-[50px]"
        badge={<item.icon className={`text-xl ps-px ${item.iconColor}`} />}
      />
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-7.5">
        <div className="flex items-center flex-wrap gap-3 lg:gap-4">
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
  type ICommunityBadgesProps,
};
