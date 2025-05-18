import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface IInventoryItem {
  product: string;
  name: string;
  sku: string;
}
type IInventoryItems = Array<IInventoryItem>;

export function Bestsellers() {
  const items: IInventoryItems = [
    {
      product: '5.png',
      name: 'Cloud Shift Lightweight Runner Pro..',
      sku: 'BT-A1-YLW-8',
    },
    {
      product: '2.png',
      name: 'Titan Edge High Impact Stability..',
      sku: 'SNK-888-RED-42',
    },
    {
      product: '3.png',
      name: 'Cloud Shift Lightweight Runner Pro..',
      sku: 'SD-999-TAN-38',
    },
    {
      product: '4.png',
      name: 'Velocity Boost Xtreme High  Shock..',
      sku: 'WRK-77-BLK-9',
    },
  ];

  const renderItem = (item: IInventoryItem, index: number) => (
    <div key={index} className="flex items-center grow gap-2.5">
      <div className="flex items-center justify-center border border-border rounded-md  bg-accent/50 h-[50px] w-[60px]">
        <img
          src={toAbsoluteUrl(`/media/store/client/600x600${item.product}`)}
          className="rounded-full size-12 shrink-0"
          alt="image"
        />
      </div>

      <div className="flex flex-col gap-3.5 mb-0.5">
        <div className="flex flex-col gap-3">
          <Link
            to="#"
            className="text-sm font-medium text-mono hover:text-primary"
          >
            {item.name}
          </Link>
          <div className="text-xs text-secondary-foreground">
            SKU:
            <span className="text-foreground font-medium">{item.sku}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Card>
      <CardHeader className="gap-2">
        <CardTitle>Bestsellers</CardTitle>
        <Button mode="link" asChild>
          <Link to="#">See All</Link>
        </Button>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-2 lg:gap-7.5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </CardContent>
    </Card>
  );
}
