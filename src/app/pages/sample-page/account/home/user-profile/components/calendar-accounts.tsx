import { CalendarCog, Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface ICalendarAccountsItem {
  logo: string;
  title: string;
  email: string;
}
type ICalendarAccountsItems = Array<ICalendarAccountsItem>;

const CalendarAccounts = () => {
  const items: ICalendarAccountsItems = [
    {
      logo: 'google-calendar.svg',
      title: 'Google',
      email: 'jasontt@studio.co',
    },
    {
      logo: 'monday.svg',
      title: 'Monday',
      email: 'jasontatum@keenthemes.com',
    },
  ];

  const renderItem = (item: ICalendarAccountsItem, index: number) => {
    return (
      <div
        key={index}
        className="flex items-center justify-between flex-wrap border border-border rounded-xl gap-2 px-3.5 py-2.5"
      >
        <div className="flex items-center flex-wrap gap-3.5">
          <img
            src={toAbsoluteUrl(`/media/brand-logos/${item.logo}`)}
            className="size-6 shrink-0"
            alt=""
          />
          <div className="flex flex-col">
            <Link
              to="#"
              className="text-sm font-medium text-mono hover:text-primary-active mb-px"
            >
              {item.title}
            </Link>
            <Link
              to="#"
              className="text-sm text-secondary-foreground hover:text-primary-active"
            >
              {item.email}
            </Link>
          </div>
        </div>
        <Button variant="ghost">
          <Trash2 />
        </Button>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Calendar Accounts{' '}
          <span className="text-secondary-foreground font-medium text-sm">
            1/5
          </span>
        </CardTitle>
        <Button variant="outline">
          <CalendarCog size={16} /> Add New
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2.5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export {
  CalendarAccounts,
  type ICalendarAccountsItem,
  type ICalendarAccountsItems,
};
