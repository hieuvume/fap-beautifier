import { Link } from 'react-router';
import { Badge, BadgeDot } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface IInventoryItem {
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
  label: string;
}
type IInventoryItems = Array<IInventoryItem>;

interface IInventoryRow {
  text: string;
  total: number;
  stats: string;
  increase: boolean;
}
type IInventoryRows = Array<IInventoryRow>;

export function Inventory() {
  const items: IInventoryItems = [
    { badgeColor: 'success', label: 'Available' },
    { badgeColor: 'warning', label: 'Low stock' },
    { badgeColor: 'destructive', label: 'Out of stock' },
  ];

  const rows: IInventoryRows = [
    { text: 'Nike Shift Runner', total: 4, stats: '3.9', increase: true },
    { text: 'Puma Wace Strike', total: 7, stats: '0.7', increase: false },
    { text: 'Adidas Xtreme High', total: 1, stats: '8.2', increase: true },
  ];

  const renderItem = (item: IInventoryItem, index: number) => (
    <div key={index} className="flex items-center">
      <Badge appearance="ghost" variant={item.badgeColor}>
        <BadgeDot className="size-2" />
      </Badge>
      <span className="text-sm font-normal text-foreground">{item.label}</span>
    </div>
  );

  const renderRows = (row: IInventoryRow, index: number) => (
    <div
      key={index}
      className="flex items-center justify-between flex-wrap bg-accent/50 p-2.5 rounded-md gap-2"
    >
      <span className="text-sm text-mono">{row.text}</span>

      <div className="flex items-center gap-2">
        <span className="text-sm text-mono">Qty: {row.total}</span>
        <span className="border-l border-input h-[12px]"> </span>
        <span className="text-sm font-medium text-primary">Order</span>
      </div>
    </div>
  );

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Inventory</CardTitle>
        <Button mode="link" asChild>
          <Link to="#">See All</Link>
        </Button>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 p-5 lg:p-7.5 lg:pt-4">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-normal text-secondary-foreground">
            Total Asset Value
          </span>
          <span className="text-3xl font-semibold text-mono">$329.7k</span>
        </div>

        <div className="flex items-center gap-1 mb-1.5">
          <Badge
            variant="success"
            className="h-2 w-full max-w-[60%] rounded-xs"
          ></Badge>
          <Badge
            variant="warning"
            className="h-2 w-full max-w-[25%] rounded-xs"
          ></Badge>
          <Badge
            variant="destructive"
            className="h-2 w-full max-w-[15%] rounded-xs"
          ></Badge>
        </div>

        <div className="flex items-center flex-wrap gap-3 mb-1">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>

        <div className="grid gap-3.5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-mono font-medium">Low stock</span>
            <Button mode="link" asChild>
              <Link to="#">See All</Link>
            </Button>
          </div>

          {rows.map((row, index) => {
            return renderRows(row, index);
          })}
        </div>
      </CardContent>
    </Card>
  );
}
