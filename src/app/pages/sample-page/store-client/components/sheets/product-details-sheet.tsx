import { ShoppingCart, Star } from 'lucide-react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
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
    text: 'Availability',
    info: (
      <Badge size="sm" variant="success">
        In Stock
      </Badge>
    ),
  },
  {
    text: 'SKU',
    info: (
      <span className="text-xs font-medium text-foreground">SH-001-BLK-42</span>
    ),
  },
  {
    text: 'Category',
    info: <span className="text-xs font-medium text-foreground">Sneakers</span>,
  },
  {
    text: 'Rating',
    info: null, // rating uchun alohida component bor
  },
  {
    text: 'More Info',
    info: (
      <span className="text-xs font-normal text-foreground">
        10g powder, powder measure & water dispensing bottle (empty)
      </span>
    ),
  },
];

interface StoreClientProductDetailsSheetProps {
  open: boolean;
  onOpenChange: () => void;
  productId: string | null;
  addToCart: ({ productId }: { productId: string }) => void;
}

interface RatingProps {
  rating: number;
  outOf?: number;
}

export function Rating({ rating, outOf = 5 }: RatingProps) {
  const stars = [];

  for (let i = 1; i <= outOf; i++) {
    stars.push(
      <Star
        key={i}
        className={`w-4 h-4 ${i <= rating ? 'text-yellow-400' : 'text-input'}`}
        fill={i <= rating ? 'currentColor' : 'none'}
      />,
    );
  }

  return <div className="flex items-center gap-1">{stars}</div>;
}

export function StoreClientProductDetailsSheet({
  open,
  onOpenChange,
  productId,
  addToCart,
}: StoreClientProductDetailsSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:w-[520px] sm:max-w-none inset-5 start-auto h-auto rounded-lg p-0 [&_[data-slot=sheet-close]]:top-4.5 [&_[data-slot=sheet-close]]:end-5">
        <SheetHeader className="border-b py-3.5 px-5 border-border">
          <SheetTitle>Product Details</SheetTitle>
        </SheetHeader>
        <SheetBody className="px-5 py-0">
          <ScrollArea className="h-[calc(100dvh-11.75rem)] pe-3 -me-3">
            <CardContent className="flex flex-col space-y-3 p-5 p-0">
              <Card className="relative items-center justify-center bg-accent/50 mb-6.5 h-[280px]">
                <Badge
                  size="sm"
                  variant="destructive"
                  className="absolute top-4 right-4 uppercase"
                >
                  save 40%
                </Badge>
                <img
                  src={toAbsoluteUrl('/media/store/client/600x600/1.png')}
                  className="size-80"
                  alt="image"
                />
                <Card className="absolute items-center justify-center bg-light w-[75px] h-[45px] overflow-hidden rounded-sm bottom-4 right-4">
                  <img
                    src={toAbsoluteUrl('/media/brand-logos/vector.svg')}
                    className="size-full"
                    alt="image"
                  />
                </Card>
              </Card>

              <span className="text-base font-medium text-mono">
                Cloud Shift Lightweight Runner Pro Edition
              </span>
              <span className="text-sm font-normal text-foreground block mb-7">
                Lightweight and stylish, these sneakers offer all-day comfort
                with <br />
                breathable mesh, cushioned soles, and a durable grip. Perfect
                for <br />
                casual wear, workouts, or daily adventures. Available in
                multiple colors and sizes.
              </span>

              <div className="flex flex-col gap-2.5 lg:mb-11">
                {items.map((item, index) => (
                  <div className="flex items-center gap-2.5" key={index}>
                    <span className="text-xs font-normal text-foreground min-w-14 xl:min-w-24 shrink-0">
                      {item.text}
                    </span>
                    <div>
                      {item.text === 'Rating' ? (
                        <Rating rating={5} />
                      ) : (
                        item.info
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-2">
                <span className="text-base font-normal text-secondary-foreground line-through">
                  $140.00
                </span>

                <span className="text-lg font-medium text-mono">$99.00</span>
              </div>
            </CardContent>
          </ScrollArea>
        </SheetBody>
        <SheetFooter className="border-t py-3.5 px-5 border-border">
          <Button
            onClick={() => {
              if (productId) {
                addToCart({ productId });
              }
            }}
            disabled={!productId}
            className="grow"
          >
            <ShoppingCart />
            Add to Cart
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
