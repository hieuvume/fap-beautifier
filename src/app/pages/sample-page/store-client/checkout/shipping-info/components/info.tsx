import { Fragment } from 'react';
import { Link } from 'react-router';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface IInfoItem {
  default: boolean;
  title: string;
  name: string;
  street: string;
  city: string;
  number: string;
  badge?: boolean;
}
type IInfoItems = Array<IInfoItem>;

export function Info() {
  const items: IInfoItems = [
    {
      default: true,
      title: 'Jeroen’s Home',
      name: 'Jeroen van Dijk',
      street: 'Keizersgracht 172',
      city: '1016 DW, Amsterdam',
      number: '+31612345678',
      badge: true,
    },
    {
      default: false,
      title: 'Sophie’s Office',
      name: 'Sophie de Vries',
      street: 'Laan van Meerdervoort 88',
      city: '2517 AN, Den Haag',
      number: '+31687654321',
    },
    {
      default: false,
      title: 'Jeroen’s Home',
      name: 'Jeroen van Dijk',
      street: 'Keizersgracht 172',
      city: '1016 DW, Amsterdam',
      number: '+31612345678',
    },
    {
      default: false,
      title: 'Emma’s Apartment',
      name: 'Emma van den Berg',
      street: 'Vondelstreet 45',
      city: '1054 GE, Amsterdam',
      number: '+31623456789',
    },
  ];

  const renderItem = (item: IInfoItem, index: number) => (
    <Card key={index}>
      <CardHeader className="px-5">
        <CardTitle>{item.title}</CardTitle>

        {item.badge && (
          <Badge variant="success" appearance="outline">
            Ship here
          </Badge>
        )}
      </CardHeader>

      <CardContent className="px-5 space-y-4">
        <div className="flex flex-col gap-1.5">
          <span className="text-2sm font-semibold text-mono mb-1.5">
            {item.name}
          </span>

          <div className="flex flex-col gap-2 text-sm font-normal text-mono">
            <span>{item.street}</span>
            <span>{item.city}</span>
            <span>Netherlands</span>
            <span>Phone number: {item.number}</span>
          </div>
        </div>

        <div className="flex justify-between items-center min-h-8.5">
          <div className="flex items-center gap-5">
            <Button mode="link" underlined="dashed">
              <Link to="#">Edit</Link>
            </Button>

            <Button mode="link" underlined="dashed">
              <Link to="#">Remove</Link>
            </Button>
          </div>

          {item.default === false && (
            <Button size="sm" variant="outline">
              Select Address
            </Button>
          )}
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
