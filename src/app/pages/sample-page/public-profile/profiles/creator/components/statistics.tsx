import React from 'react';
import { Card, CardContent } from '@/app/components/ui/card';

interface IStatisticsItem {
  value: string;
  title: string;
}
type IStatisticsItems = Array<IStatisticsItem>;

interface IStatisticsProps {
  data: IStatisticsItem[];
}

const Statistics = ({ data }: IStatisticsProps) => {
  const renderData = (item: IStatisticsItem, index: number) => {
    return (
      <React.Fragment key={index}>
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-mono text-2xl lg:text-2xl font-semibold">
            {item.value}
          </span>
          <span className="text-secondary-foreground text-sm font-normal">
            {item.title}
          </span>
        </div>
        {index === 0 && (
          <span className="sm:ms-8 sm:ps-8 border-s border-s-border"></span>
        )}
      </React.Fragment>
    );
  };

  return (
    <Card>
      <CardContent>
        <div className="flex flex-wrap justify-center gap-2 py-1">
          {data.map((item, index) => {
            return renderData(item, index);
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
