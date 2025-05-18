import { Badge } from '@/app/components/ui/badge';
import { Card, CardContent } from '@/app/components/ui/card';

interface ITotalAssetValueItem {
  badgeColor:
    | 'success'
    | 'warning'
    | 'destructive'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'mono'
    | null
    | undefined;
  lebel: string;
  number: number;
}
type ITotalAssetValueItems = Array<ITotalAssetValueItem>;

export function TotalAssetValue() {
  const items: ITotalAssetValueItems = [
    { badgeColor: 'success', lebel: 'stock:', number: 1892 },
    { badgeColor: 'warning', lebel: 'Low stock:', number: 164 },
    { badgeColor: 'destructive', lebel: 'Out of stock:', number: 257 },
  ];

  const renderItem = (item: ITotalAssetValueItem, index: number) => (
    <div key={index} className="flex items-center gap-1.5">
      <Badge variant={item.badgeColor} className="size-1.5"></Badge>
      <div className="flex items-center gap-1">
        <span className="text-xs font-normal text-foreground">
          {item.lebel}
        </span>
        <span className="text-xs font-semibold text-mono">{item.number}</span>
      </div>
    </div>
  );

  return (
    <Card className="h-full">
      <CardContent className="flex items-center flex-wrap sm:flex-nowrap gap-8">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium text-secondary-foreground">
            Total Asset Value
          </span>
          <span className="text-3xl font-semibold text-mono">$106,576.00</span>
        </div>

        <span className="border-e border-e-border h-[70px]"></span>

        <div className="w-full space-y-2.5">
          <div className="flex items-center gap-1">
            <span className="text-lg font-semibold text-mono">2258</span>
            <span className="text-xs font-medium text-secondary-foreground">
              products
            </span>
          </div>

          <div className="flex items-center gap-1 pb-1">
            <Badge
              variant="success"
              className="h-2 w-full max-w-[70%] rounded-xs"
            ></Badge>
            <Badge
              variant="warning"
              className="h-2 w-full max-w-[10%] rounded-xs"
            ></Badge>
            <Badge
              variant="destructive"
              className="h-2 w-full max-w-[20%] rounded-xs"
            ></Badge>
          </div>

          <div className="flex items-center flex-wrap gap-4">
            {items.map((item, index) => {
              return renderItem(item, index);
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
