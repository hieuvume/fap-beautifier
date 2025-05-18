import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { Card2 } from '../../components/common/card2';

interface IDealsItem {
  logo: string;
  title: string;
  total: string;
  star: string;
  label: string;
  badge: boolean;
}
type IDealsItems = Array<IDealsItem>;

export function Deals() {
  const items: IDealsItems = [
    {
      logo: '3.png',
      title: 'Cloud Shift Lightweight Runner Pro Edition',
      total: '99.00',
      label: '$140.00',
      badge: true,
      star: '5.0',
    },
    {
      logo: '4.png',
      title: 'Titan Edge High Impact Stability Lightweight Trainers',
      total: '46.00',
      label: '$110.00',
      badge: true,
      star: '3.5',
    },
    {
      logo: '15.png',
      title: 'Wave Strike Dynamic Boost Sneaker',
      total: '140.00',
      label: '$179.00',
      badge: true,
      star: '4.7',
    },
    {
      logo: '2.png',
      title: 'Velocity Boost Xtreme High  Shock Absorbers',
      total: '315.00',
      label: '$280.00',
      badge: true,
      star: '4.9',
    },
  ];

  const renderItem = (item: IDealsItem, index: number) => (
    <Card2
      logo={item.logo}
      star={item.star}
      title={item.title}
      total={item.total}
      label={item.label}
      badge={item.badge}
      key={index}
    />
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <span className="text-lg font-medium text-mono">
          Limited-Time Deals
        </span>

        <Button mode="link" asChild>
          <Link to="/account/home/get-started">
            See All <ChevronRight />
          </Link>
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-2">
        {items.map((item, index) => {
          return renderItem(item, index);
        })}
      </div>
    </div>
  );
}
