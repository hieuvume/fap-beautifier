import { HexagonBadge } from '@/app/partials/common/hexagon-badge';
import {
  BadgePercent,
  CreditCard,
  LucideIcon,
  MessagesSquare,
  Truck,
} from 'lucide-react';
import { Link } from 'react-router';
import { Card, CardContent } from '@/app/components/ui/card';

interface IInfoItem {
  title: string;
  description: string;
  stroke: string;
  fill: string;
  icon: LucideIcon;
  iconColor: string;
}
type IInfoItems = Array<IInfoItem>;

export function Info() {
  const items: IInfoItems = [
    {
      title: 'Free Delivery',
      description: 'No extra shipping costs',
      stroke: 'stroke-primary-transparent',
      fill: 'fill-primary-soft',
      icon: Truck,
      iconColor: 'text-primary',
    },
    {
      title: '24/7 Support',
      description: 'Help anytime, anywhere',
      stroke: 'stroke-success-transparent',
      fill: 'fill-success-soft',
      icon: MessagesSquare,
      iconColor: 'text-green-500',
    },
    {
      title: 'Discounts',
      description: 'Save big on top deals',
      stroke: 'stroke-info-transparent',
      fill: 'fill-info-soft',
      icon: BadgePercent,
      iconColor: 'text-info',
    },
    {
      title: 'Money-Back',
      description: 'Full refund, no risk',
      stroke: 'stroke-warning-transparent',
      fill: 'fill-warning-soft',
      icon: CreditCard,
      iconColor: 'text-yellow-400',
    },
  ];

  const renderItem = (item: IInfoItem, index: number) => (
    <Card key={index}>
      <CardContent className="flex items-center gap-3.5 px-5">
        <HexagonBadge
          stroke={item.stroke}
          fill={item.fill}
          size="size-[50px]"
          badge={<item.icon className={`text-xl ps-px ${item.iconColor}`} />}
        />

        <div className="flex flex-col">
          <Link
            to="#"
            className="hover:text-primary text-md font-medium text-mono"
          >
            {item.title}
          </Link>
          <span className="text-xs font-normal text-secondary-foreground">
            {item.description}
          </span>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-2">
      {items.map((item, index) => {
        return renderItem(item, index);
      })}
    </div>
  );
}
