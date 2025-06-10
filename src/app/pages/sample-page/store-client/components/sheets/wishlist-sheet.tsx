import { ShoppingCart, Star, TrashIcon } from 'lucide-react';
import { Link } from 'react-router';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { ScrollArea } from '@/app/components/ui/scroll-area';
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
    star: '5.0',
    brand: 'Nike',
  },
  {
    logo: '12.png',
    title: 'Titan Edge High Impact Stability Lightweight..',
    total: '99.00',
    star: '3.9',
    brand: 'Puma',
  },
  {
    logo: '13.png',
    title: 'Wave Strike Dynamic Boost Sneaker',
    label: '$179.00',
    total: '144.00',
    badge: true,
    star: '4.6',
    brand: 'Campers',
  },
  {
    logo: '15.png',
    title: 'Cloud Shift Lightweight Runner Pro Edition',
    label: '$179.00',
    total: '230.00',
    star: '4.2',
    brand: 'Puma',
  },
];

export function StoreClientWishlistSheet({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: () => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:w-[560px] sm:max-w-none inset-5 start-auto h-auto rounded-lg p-0 [&_[data-slot=sheet-close]]:top-4.5 [&_[data-slot=sheet-close]]:end-5">
        <SheetHeader className="border-b py-3.5 px-5 border-border">
          <SheetTitle>Wishlist</SheetTitle>
        </SheetHeader>
        <SheetBody className="px-5 py-0">
          <ScrollArea className="text-sm h-[calc(100dvh-12rem)] pe-3 -me-3">
            {items.map((item, index) => (
              <Card className="mb-7.5" key={index}>
                <CardContent className="p-2 pe-5 flex items-center justify-between gap-3.5">
                  <Card className="flex items-center justify-center bg-accent/50 h-[70px] w-[90px]">
                    <img
                      src={`/media/store/client/600x600/${item.logo}`}
                      className="size-15"
                      alt="img"
                    />
                  </Card>

                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center justify-between gap-2.5 -mt-1">
                      <Link
                        to="#"
                        className="hover:text-primary-active text-sm font-medium text-dark leading-5.5"
                      >
                        {item.title}
                      </Link>
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

                    <div className="flex items-center flex-wrap justify-between gap-3">
                      <div className="flex items-center flex-wrap gap-3">
                        <Badge
                          size="sm"
                          variant="warning"
                          shape="circle"
                          className="gap-1"
                        >
                          <Star className="text-white" fill="currentColor" />
                          {item.star}
                        </Badge>
                        <span className="text-xs font-normal text-secondary-foreground">
                          Brand:
                          <span className="text-xs font-medium text-foreground">
                            {item.brand}
                          </span>
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs font-normal text-secondary-foreground line-through">
                          {item.label}
                        </span>
                        <span className="text-sm font-medium text-dark">
                          ${item.total}
                        </span>
                        <Button variant="outline" size="sm">
                          <ShoppingCart />
                          Add
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          mode="icon"
                          className="justify-center"
                        >
                          <TrashIcon />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ScrollArea>
        </SheetBody>
        <SheetFooter className="border-t py-3.5 px-5 border-border">
          <Button variant="outline" className="w-full justify-center">
            Remove all
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
