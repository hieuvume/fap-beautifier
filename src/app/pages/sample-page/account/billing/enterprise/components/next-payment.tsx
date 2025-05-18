import { HexagonBadge } from '@/app/partials/common/hexagon-badge';
import { CalendarDays, Check } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

const NextPayment = () => {
  return (
    <Card className="grow">
      <CardHeader>
        <CardTitle>Next Payment</CardTitle>
      </CardHeader>
      <CardContent className="lg:7.5">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between flex-wrap border border-border rounded-xl gap-2 px-4 py-4 bg-secondary-clarity">
            <div className="flex items-center gap-3.5">
              <HexagonBadge
                stroke="stroke-orange-200 dark:stroke-orange-950"
                fill="fill-orange-50 dark:fill-orange-950/30"
                size="size-[50px]"
                badge={<CalendarDays className="text-xl text-orange-400" />}
              />
              <div className="flex flex-col">
                <Link
                  to="#"
                  className="text-sm font-medium hover:text-primary text-mono"
                >
                  on 17 Aug, 2024
                </Link>
                <p className="text-sm text-secondary-foreground">Due date</p>
              </div>
            </div>
            <Button
              variant="outline"
              shape="circle"
              mode="icon"
              className="bg-green-200 dark:border-green-950 dark:bg-green-950/30"
            >
              <Check className="text-green-600" />
            </Button>
          </div>
          <div className="place-self-end lg:pb-2.5">
            <Button>Manage Payment</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { NextPayment };
