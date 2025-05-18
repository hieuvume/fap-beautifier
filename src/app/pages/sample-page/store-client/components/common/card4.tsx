import { Fragment } from 'react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Badge } from '@/app/components/ui/badge';
import { Card, CardContent } from '@/app/components/ui/card';

interface ICard4Props {
  limit: number;
}

interface ICard4Item {
  logo: string;
  title: string;
  total?: string;
  label: string;
  badge?: boolean;
  sku: string;
}
type ICard4Items = Array<ICard4Item>;

export function Card4({ limit }: ICard4Props) {
  const items: ICard4Items = [
    {
      logo: '11.png',
      title: 'Cloud Shift Lightweight Runner Pro Edition',
      label: '$120.00',
      sku: 'BT-A1-YLW-8',
    },
    {
      logo: '12.png',
      title: 'Titan Edge High Impact Stability Lightweight..',
      label: '$99.00',
      sku: 'SNK-888-RED-42',
    },
    {
      logo: '13.png',
      title: 'Cloud Shift Lightweight Runner Pro Edition',
      label: '$120.00',
      sku: 'SD-999-TAN-38',
    },
    {
      logo: '15.png',
      title: 'Cloud Shift Lightweight Runner Pro Edition',
      total: '$179.00',
      label: '$149.00',
      badge: true,
      sku: 'SD-Z9-BRN-39',
    },
  ];

  const renderItem = (item: ICard4Item, index: number) => (
    <Card key={index}>
      <CardContent className="flex items-center flex-wrap justify-between gap-4.5 p-2 pe-5">
        <div className="flex items-center gap-3.5">
          <Card className="flex items-center justify-center bg-accent/50 h-[70px] w-[90px] shadow-none">
            <img
              src={toAbsoluteUrl(`/media/store/client/600x600/${item.logo}`)}
              className="cursor-pointer h-[70px]"
              alt="image"
            />
          </Card>

          <div className="flex flex-col gap-1">
            <Link
              to="#"
              className="hover:text-primary text-sm font-medium text-mono leading-5.5"
            >
              {item.title}
            </Link>

            <div className="flex items-center gap-1.5">
              <span className="text-xs font-normal text-secondary-foreground uppercase">
                sku:{' '}
                <span className="text-xs font-medium text-foreground">
                  {item.sku}
                </span>
              </span>

              {item.badge && (
                <Badge size="sm" variant="destructive" className="uppercase">
                  save 25%
                </Badge>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-normal text-secondary-foreground text-end">
            1&nbsp;x
          </span>
          <div className="flex items-center flex-wrap gap-1.5">
            {item.label && (
              <span className="text-sm font-normal text-secondary-foreground line-through">
                {item.total}
              </span>
            )}
            <span className="text-sm font-semibold text-mono">
              {item.label}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Fragment>
      {items.slice(0, limit).map((item, index) => {
        return renderItem(item, index);
      })}
    </Fragment>
  );
}
