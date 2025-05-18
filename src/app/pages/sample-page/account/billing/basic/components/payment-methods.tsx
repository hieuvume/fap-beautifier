import { SquarePen, SquarePlus, Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface IPaymentMethodsItem {
  logo: string;
  title: string;
  email: string;
  label: boolean;
}
type IPaymentMethodsItems = Array<IPaymentMethodsItem>;

const PaymentMethods = () => {
  const items: IPaymentMethodsItems = [
    {
      logo: 'visa.svg',
      title: 'Jason Tatum',
      email: 'Ending 3604  Expires on 12/2026',
      label: true,
    },
    {
      logo: 'ideal.svg',
      title: 'Jason Tatum',
      email: 'iDeal with ABN Ambro',
      label: false,
    },
    {
      logo: 'paypal.svg',
      title: 'Jason Tatum',
      email: 'jasontt@studio.co',
      label: false,
    },
  ];

  const renderItem = (item: IPaymentMethodsItem, index: number) => {
    return (
      <div
        key={index}
        className="flex items-center justify-between border border-border rounded-xl gap-2 px-4 py-4 bg-secondary-clarity"
      >
        <div className="flex items-center gap-3.5">
          <img
            src={toAbsoluteUrl(`/media/brand-logos/${item.logo}`)}
            className="w-10 shrink-0"
            alt="image"
          />
          <div className="flex flex-col">
            <Link
              to="#"
              className="text-sm font-medium text-mono hover:text-primary-active mb-px"
            >
              {item.title}
            </Link>
            <span className="text-sm text-secondary-foreground">
              {item.email}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          {item.label && (
            <Badge variant="success" appearance="outline">
              Primary
            </Badge>
          )}
          <div className="flex gap-0.5">
            <Button variant="ghost">
              <SquarePen />
            </Button>
            <Button variant="ghost">
              <Trash2 />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="grow">
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <Button variant="outline">
          <SquarePlus size={16} />
          Add New
        </Button>
      </CardHeader>
      <CardContent className="lg:pb-7.5">
        <div className="grid gap-5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export { PaymentMethods, type IPaymentMethodsItem, type IPaymentMethodsItems };
