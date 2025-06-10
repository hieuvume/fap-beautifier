import { ShoppingCart, TrashIcon } from 'lucide-react';
import { Link } from 'react-router';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/app/components/ui/sheet';

const items = [
  {
    logo: '11.png',
    title: 'Cloud Shift Lightweight Runner Pro Edition',
    total: '120.00',
    sku: 'BT-A1-YLW-8',
  },
  {
    logo: '12.png',
    title: 'Titan Edge High Impact Stability Lightweight..',
    total: '99.00',
    sku: 'SNK-888-RED-42',
  },
  {
    logo: '13.png',
    title: 'Cloud Shift Lightweight Runner Pro Edition',
    total: '120.00',
    sku: 'SD-999-TAN-38',
  },
  {
    logo: '15.png',
    title: 'Wave Strike Dynamic Boost Sneaker',
    label: '$179.00',
    total: '144.00',
    badge: true,
    sku: 'BT-444-BRN-7',
  },
];

export function StoreClientCartSheet({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: () => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:w-[560px] sm:max-w-none inset-5 start-auto h-auto rounded-lg p-0 sm:max-w-none [&_[data-slot=sheet-close]]:top-4.5 [&_[data-slot=sheet-close]]:end-5">
        <SheetHeader className="border-b py-3.5 px-5 border-border">
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <SheetBody className="px-5 py-0">
          <ScrollArea className="h-[calc(100dvh-12rem)] pe-3 -me-3 space-y-5">
            {items.map((item, index) => (
              <Card className="mb-5" key={index}>
                <CardContent className="p-2 pe-5 flex items-center w-full justify-between gap-3.5">
                  <div className="flex items-center gap-4">
                    <Card className="flex items-center justify-center bg-accent/50 h-[70px] w-[90px]">
                      <img
                        src={`/media/store/client/600x600/${item.logo}`}
                        className="h-[70px]"
                        alt="img"
                      />
                    </Card>

                    <div className="flex flex-col justify-center gap-2.5 -mt-1">
                      <Link
                        to="#"
                        className="hover:text-primary text-sm font-medium text-mono leading-5.5"
                      >
                        {item.title}
                      </Link>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-normal text-secondary-foreground">
                          SKU:{' '}
                          <span className="text-xs font-medium text-foreground">
                            {item.sku}
                          </span>
                        </span>
                        {item.badge && (
                          <Badge
                            size="sm"
                            variant="destructive"
                            className="uppercase"
                          >
                            save 25%
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center flex-col gap-3">
                    <div className="flex items-center justify-end gap-2">
                      <Select defaultValue="high-to-low">
                        <SelectTrigger className="w-[50px]">
                          <SelectValue placeholder="1" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high-to-low">1</SelectItem>
                          <SelectItem value="0-50">2</SelectItem>
                          <SelectItem value="50-100">3</SelectItem>
                          <SelectItem value="100-200">4</SelectItem>
                        </SelectContent>
                      </Select>

                      <Button size="sm" variant="outline" mode="icon">
                        <TrashIcon className="size-5" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                      {item.label && (
                        <span className="text-sm font-normal text-secondary-foreground line-through">
                          {item.label}
                        </span>
                      )}
                      <span className="text-sm font-semibold text-mono">
                        ${item.total}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex items-center justify-end border-none rounded-md bg-accent/50 gap-5 py-2 px-3 !mt-[30px]">
              <span className="text-sm font-medium text-mono">Total</span>
              <span className="text-sm font-semibold text-dark">$492.00</span>
            </div>
          </ScrollArea>
        </SheetBody>
        <SheetFooter className="border-t py-3.5 px-5 border-border">
          <Button variant="outline">Clear Cart</Button>
          <Button variant="primary" className="grow">
            <ShoppingCart />
            Checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
