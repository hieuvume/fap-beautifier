import { Card, CardContent, CardHeader } from '@/app/components/ui/card';
import { Card4 } from '../../components/common/card4';

export function MyOrders() {
  return (
    <div className="grid xl:grid-cols-1 gap-5 lg:gap-9">
      <div className="lg:col-span-1">
        <Card>
          <CardHeader className="justify-start bg-muted/70 gap-9 h-auto py-5">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-normal text-secondary-foreground">
                Order ID
              </span>
              <span className="text-sm font-medium text-mono">X319330-S24</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-normal text-secondary-foreground">
                Order placed
              </span>
              <span className="text-sm font-medium text-mono">
                26 June, 2025
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-normal text-secondary-foreground">
                Total
              </span>
              <span className="text-sm font-medium text-mono">$512.60</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-normal text-secondary-foreground">
                Ship to
              </span>
              <span className="text-sm font-medium text-mono">
                Jeroen van Dijk
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-normal text-secondary-foreground">
                Estimated Delivery
              </span>
              <span className="text-sm font-medium text-mono">
                07 July, 2025
              </span>
            </div>
          </CardHeader>
          <CardContent className="p-5 lg:p-7.5 space-y-5">
            <Card4 limit={4} />
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1">
        <Card>
          <CardHeader className="justify-start bg-muted/70 gap-9 h-auto py-5">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-normal text-secondary-foreground">
                Order ID
              </span>
              <span className="text-sm font-medium text-mono">X319330-S24</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-normal text-secondary-foreground">
                Order placed
              </span>
              <span className="text-sm font-medium text-mono">
                26 June, 2025
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-normal text-secondary-foreground">
                Total
              </span>
              <span className="text-sm font-medium text-mono">$512.60</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-normal text-secondary-foreground">
                Ship to
              </span>
              <span className="text-sm font-medium text-mono">
                Jeroen van Dijk
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-normal text-secondary-foreground">
                Estimated Delivery
              </span>
              <span className="text-sm font-medium text-mono">
                07 July, 2025
              </span>
            </div>
          </CardHeader>
          <CardContent className="p-5 lg:p-7.5 space-y-5">
            <Card4 limit={1} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
