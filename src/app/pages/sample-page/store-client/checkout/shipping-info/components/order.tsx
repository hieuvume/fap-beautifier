import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { IOrderItem, IOrderItems } from '../../order-summary/components/order';

export function Order() {
  const items: IOrderItems = [
    { label: 'Subtotal', amount: 492.0 },
    { label: 'Shipping', amount: 0.0 },
    { label: 'VAT', amount: 0.0 },
  ];

  const renderItem = (item: IOrderItem, index: number) => (
    <div key={index} className="flex justify-between items-center px-5">
      <span className="text-sm font-normal text-secondary-foreground">
        {item.label}
      </span>
      <span className="text-sm font-medium text-mono">${item.amount}.0</span>
    </div>
  );

  return (
    <Card className="bg-accent/50">
      <CardHeader className="px-5">
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>

      <CardContent className="px-0 py-5 space-y-2">
        <div className="flex flex-col px-5">
          <span className="text-sm font-medium text-mono mb-1.5">
            Shipping to Jeroen's Home
          </span>

          <div className="flex flex-col gap-1 text-xs font-normal text-secondary-foreground">
            <span>Jeroen van Dijk</span>
            <span>Keizersgracht 172</span>
            <span>1016 DW, Amsterdam</span>
            <span>Netherlands</span>
          </div>
        </div>

        <div className="border-b border-border mb-4 mt-5"></div>
        <span className="text-sm font-medium block text-mono mb-3.5 px-5">
          Price Details
        </span>

        {items.map((item, index) => {
          return renderItem(item, index);
        })}
      </CardContent>

      <CardFooter className="flex justify-between items-center px-5">
        <span className="text-sm font-normal text-secondary-foreground">
          Total
        </span>
        <span className="text-base font-semibold text-mono">$492.00</span>
      </CardFooter>
    </Card>
  );
}
