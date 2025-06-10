import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { Card2 } from '../../components/common/card2';

export interface INewArrivalsItem {
  logo: string;
  title: string;
  total: string;
  star: string;
}
export type INewArrivalsItems = Array<INewArrivalsItem>;

export function NewArrivals() {
  const items: INewArrivalsItems = [
    {
      logo: '8.png',
      title: 'Cloud Shift Lightweight Runner Pro Edition',
      total: '99.00',
      star: '5.0',
    },
    {
      logo: '9.png',
      title: 'Wave Strike Dynamic Boost Sneaker',
      total: '120.00',
      star: '4.7',
    },
    {
      logo: '5.png',
      title: 'Titan Edge High Impact Stability Lightweight Trainers',
      total: '65.99',
      star: '3.5',
    },
    {
      logo: '10.png',
      title: 'Velocity Boost Xtreme High  Shock Absorbers',
      total: '110.00',
      star: '4.9',
    },
  ];

  const renderItem = (item: INewArrivalsItem, index: number) => (
    <Card2
      logo={item.logo}
      star={item.star}
      title={item.title}
      total={item.total}
      key={index}
    />
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <span className="text-lg font-medium text-mono">New Arrivals</span>

        <Button mode="link" asChild>
          <Link to="/account/home/get-started" className="text-xs">
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
