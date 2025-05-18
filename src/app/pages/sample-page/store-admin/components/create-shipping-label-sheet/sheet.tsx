import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/app/components/ui/sheet';
import { Items } from './components/items';
import { Order } from './components/order';
import { Packaging } from './components/packaging';
import { ShippingDate } from './components/shipping-date';
import { Summary } from './components/summary';

export function StoreAdminCreateShippingLabelSheet({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: () => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="lg:w-[940px] sm:max-w-none inset-5 start-auto h-auto rounded-lg p-0 sm:max-w-none [&_[data-slot=sheet-close]]:top-4.5 [&_[data-slot=sheet-close]]:end-5">
        <SheetHeader className="border-b py-3.5 px-5 border-border">
          <SheetTitle>Create Shipping Label</SheetTitle>
        </SheetHeader>
        <SheetBody className="px-5 py-0">
          <ScrollArea className="h-[calc(100dvh-11.75rem)] pe-3 -me-3">
            <div className="grid xl:grid-cols-3 min-h-screen gap-5">
              <div className="lg:col-span-2 space-y-5 lg:border-e">
                <div className="space-y-5 lg:pe-5 py-5">
                  <Order />
                  <Items />
                  <Packaging />
                </div>
              </div>

              <div className="lg:col-span-1 space-y-4.5 lg:pt-5 pb-5">
                <Summary />
                <ShippingDate />
              </div>
            </div>
          </ScrollArea>
        </SheetBody>
        <SheetFooter className="border-t py-3.5 px-5 border-border">
          <div className="flex justify-between flex-wrap gap-5 grow">
            <div className="space-x-0.5 pt-0.5">
              <span className="text-xs text-foreground font-medium">
                Read Shipping
              </span>
              <Button mode="link" asChild>
                <Link to="#" className="text-xs font-medium">
                  Terms & Conditions
                </Link>
              </Button>
            </div>
            <div className="flex gap-2.5">
              <Button variant="outline">Cancel</Button>
              <Button variant="mono">Buy Shipping Label</Button>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
