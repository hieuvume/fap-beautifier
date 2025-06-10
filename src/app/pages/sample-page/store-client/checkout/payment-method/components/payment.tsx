import { Fragment, ReactElement } from 'react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface IPaymentItem {
  brandLogo: string;
  title: string;
  subTitle: string;
  description: ReactElement;
  badge?: boolean;
}
type IPaymentItems = Array<IPaymentItem>;

export function Payment() {
  const items: IPaymentItems = [
    {
      brandLogo: 'visa.svg',
      title: 'Jeroen’s Visa',
      subTitle: 'Jeroen van Dijk',
      description: (
        <span className="text-xs font-normal text-mono">
          Ending 3604 Expires on 12/2026
        </span>
      ),
      badge: true,
    },
    {
      brandLogo: 'ideal.svg',
      title: 'Sophie’s iDeal',
      subTitle: 'Sophie de Vries',
      description: (
        <span className="text-xs font-normal text-mono">
          iDeal with ABN Ambro
        </span>
      ),
    },
    {
      brandLogo: 'paypal.svg',
      title: 'Emma’s Paypal',
      subTitle: 'Emma van den Berg',
      description: (
        <Link
          to="#"
          className="hover:text-primary text-sm font-medium text-secondary-foreground"
        >
          emma@reui.io
        </Link>
      ),
    },
    {
      brandLogo: 'american-express.svg',
      title: 'Bob’s American Express',
      subTitle: 'Bob van den Berg',
      description: (
        <Link
          to="#"
          className="hover:text-primary text-sm font-medium text-secondary-foreground"
        >
          bob@reui.io
        </Link>
      ),
    },
  ];

  const renderItem = (item: IPaymentItem, index: number) => (
    <Card key={index}>
      <CardHeader className="px-5">
        <CardTitle>{item.title}</CardTitle>

        {item.badge && (
          <Badge variant="success" appearance="outline">
            Pay with this
          </Badge>
        )}
      </CardHeader>

      <CardContent className="px-5 space-y-5">
        <div className="flex items-center gap-3">
          <img
            src={toAbsoluteUrl(`/media/brand-logos/${item.brandLogo}`)}
            className="size-12"
            alt="image"
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-semibold text-mono">
              {item.subTitle}
            </span>
            {item.description}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <Button mode="link" underlined="dashed">
              <Link to="#">Edit</Link>
            </Button>

            <Button mode="link" underlined="dashed">
              <Link to="#">Remove</Link>
            </Button>
          </div>

          <Button size="sm" variant="outline">
            Select Card
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Fragment>
      {items.map((item, index) => {
        return renderItem(item, index);
      })}
    </Fragment>
  );
}
