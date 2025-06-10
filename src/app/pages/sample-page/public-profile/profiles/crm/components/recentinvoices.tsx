import { DropdownMenu1 } from '@/app/partials/dropdown-menu/dropdown-menu-1';
import { DropdownMenu2 } from '@/app/partials/dropdown-menu/dropdown-menu-2';
import {
  Barcode,
  EllipsisVertical,
  LucideIcon,
  Scroll,
  ShoppingBag,
  Tag,
  TicketPercent,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface IRecentInvoicesItem {
  icon: LucideIcon;
  number: string;
  date: string;
  ammount: string;
}
type IRecentInvoicesItems = Array<IRecentInvoicesItem>;

const RecentInvoices = () => {
  const items: IRecentInvoicesItems = [
    {
      icon: Scroll,
      number: 'INV-2023-001',
      date: '15 Nov, 2023',
      ammount: '500.00',
    },
    {
      icon: Tag,
      number: 'INV-2023-002',
      date: '30 Nov, 2023',
      ammount: '750.00',
    },
    {
      icon: TicketPercent,
      number: 'INV-2023-003',
      date: '10 Dec, 2023',
      ammount: '1,200.00',
    },
    {
      icon: Barcode,
      number: 'INV-2023-004',
      date: '05 Dec, 2023',
      ammount: '300.00',
    },
    {
      icon: ShoppingBag,
      number: 'INV-2023-005',
      date: '20 Nov, 2023',
      ammount: '950.00',
    },
  ];

  const renderItem = (item: IRecentInvoicesItem, index: number) => {
    return (
      <div key={index} className="flex justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center size-7.5 shrink-0 bg-accent/60 rounded-lg border border-input">
            <item.icon
              className="text-base text-secondary-foreground"
              size={16}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-medium text-mono cursor-pointer hover:text-primary mb-px">
              {item.number}
            </span>
            <span className="text-xs text-secondary-foreground">
              {item.date}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-sm text-foreground">${item.ammount}</span>
          <DropdownMenu1
            trigger={
              <Button variant="ghost" mode="icon">
                <EllipsisVertical />
              </Button>
            }
          />
        </div>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Invoices</CardTitle>
        <DropdownMenu2
          trigger={
            <Button variant="ghost" mode="icon">
              <EllipsisVertical />
            </Button>
          }
        />
      </CardHeader>
      <CardContent>
        <div className="grid gap-5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export { RecentInvoices, type IRecentInvoicesItem, type IRecentInvoicesItems };
