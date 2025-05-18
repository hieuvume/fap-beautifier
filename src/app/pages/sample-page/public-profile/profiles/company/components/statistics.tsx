import React from 'react';
import { Card, CardContent } from '@/app/components/ui/card';

interface IStatisticsItem {
  number: string;
  label: string;
}
type IStatisticsItems = Array<IStatisticsItem>;

interface IStatisticsProps {
  items: IStatisticsItem[];
}

const Statistics = ({ items }: IStatisticsProps) => {
  const renderItems = (item: IStatisticsItem, index: number) => {
    return (
      <React.Fragment key={index}>
        <div className="grid grid-cols-1 place-content-center flex-1 gap-1 text-center">
          <span className="text-mono text-2xl lg:text-2xl leading-none font-semibold">
            {item.number}
          </span>
          <span className="text-secondary-foreground text-sm">
            {item.label}
          </span>
        </div>
        <span className="not-last:border-e border-e-input my-1"></span>
      </React.Fragment>
    );
  };

  return (
    <Card>
      <CardContent>
        <div className="flex lg:px-10 py-1.5 gap-2">
          {items.map((item, index) => {
            return renderItems(item, index);
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export {
  Statistics,
  type IStatisticsItem,
  type IStatisticsItems,
  type IStatisticsProps,
};
