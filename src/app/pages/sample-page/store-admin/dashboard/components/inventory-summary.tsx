import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

export function InventorySummary() {
  return (
    <Card className="h-full">
      <CardHeader className="px-3 bg-accent/50">
        <CardTitle>Inventory summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2.5 px-4">
        <div className="flex items-center justify-between gap-5">
          <span className="text-sm font-normal text-secondary-foreground uppercase">
            quantity in hand
          </span>
          <span className="text-2xl font-medium text-mono">12746</span>
        </div>

        <div className="border-b border-b-border mt-1"></div>

        <div className="text-sm flex items-center justify-between gap-5">
          <span className="font-normal text-secondary-foreground uppercase">
            quantity to be received
          </span>
          <span className="text-2xl font-medium text-mono">62</span>
        </div>
      </CardContent>
    </Card>
  );
}
