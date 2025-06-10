import { ReactElement } from 'react';
import { Badge } from '@/app/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface IAboutItem {
  label: string;
  info: ReactElement | string;
}
type IAboutItems = Array<IAboutItem>;

const About = () => {
  const items: IAboutItems = [
    { label: 'Joined:', info: '26 Aug, 2021' },
    { label: 'Sector:', info: 'Online Education' },
    {
      label: 'Status:',
      info: (
        <Badge size="md" variant="success" appearance="outline">
          Subscribed
        </Badge>
      ),
    },
  ];

  const renderItems = (item: IAboutItem, index: number) => {
    return (
      <div key={index} className="flex items-center gap-2.5">
        <span className="text-sm text-secondary-foreground min-w-14 xl:min-w-24 shrink-0">
          {item.label}
        </span>
        <div className="text-sm text-mono">{item.info}</div>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>About</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3.5 mb-3.5">
          {items.map((item, index) => {
            return renderItems(item, index);
          })}
        </div>
        <p className="text-sm text-foreground leading-5.5 mb-2.5">
          Experienced and creative professional with a passion great as a
          commitment to best excellence.
        </p>
      </CardContent>
    </Card>
  );
};

export { About, type IAboutItem, type IAboutItems };
