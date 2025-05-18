import { Fragment } from 'react';
import {
  CheckCircle,
  FileText,
  LucideIcon,
  PackageCheck,
  Truck,
} from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface ISalesActivityItem {
  totalColor: string;
  total: string;
  label: string;
  description: string;
  icon: LucideIcon;
}
type ISalesActivityItems = Array<ISalesActivityItem>;

export function SalesActivity() {
  const items: ISalesActivityItems = [
    {
      totalColor: 'text-primary',
      total: '51',
      label: 'Qty',
      description: 'to be packed',
      icon: CheckCircle,
    },
    {
      totalColor: 'text-destructive',
      total: '40',
      label: 'Pkgs',
      description: 'to be shipped',
      icon: Truck,
    },
    {
      totalColor: 'text-green-500',
      total: '52',
      label: 'Pkgs',
      description: 'to be delevered',
      icon: PackageCheck,
    },
    {
      totalColor: 'text-yellow-400',
      total: '97',
      label: 'Qty',
      description: 'to be invoiced',
      icon: FileText,
    },
  ];

  const renderItem = (item: ISalesActivityItem, index: number) => (
    <Fragment key={index}>
      <div className="grid grid-cols-1 place-content-center flex-1 gap-1 text-center">
        <div className="flex flex-col gap-1">
          <span className={`text-4xl font-medium ${item.totalColor}`}>
            {item.total}
          </span>
          <span className="text-xs font-normal text-secondary-foreground">
            {item.label}
          </span>

          <div className="flex items-start justify-center gap-1 mt-4">
            <item.icon size={16} className="text-sm text-muted-foreground" />
            <span className="text-xs font-medium text-secondary-foreground uppercase">
              {item.description}
            </span>
          </div>
        </div>
      </div>

      <span className="not-last:border-e border-e-input my-1"></span>
    </Fragment>
  );

  return (
    <Card>
      <CardHeader className="px- bg-accent/50">
        <CardTitle>Sales Activity</CardTitle>
        <Button mode="link" asChild>
          <Link to="#">See All</Link>
        </Button>
      </CardHeader>

      <CardContent className="flex gap-2 lg:pb-7">
        {items.map((item, index) => {
          return renderItem(item, index);
        })}
      </CardContent>
    </Card>
  );
}
