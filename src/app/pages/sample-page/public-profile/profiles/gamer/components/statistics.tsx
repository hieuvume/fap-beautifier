import React from 'react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Card, CardContent } from '@/app/components/ui/card';

interface IStatisticsItem {
  image: string;
  number: string;
  label: string;
}
type IStatisticsItems = Array<IStatisticsItem>;

interface IStatisticsProps {
  details: IStatisticsItem[];
}

const Statistics = ({ details }: IStatisticsProps) => {
  const renderData = (item: IStatisticsItem, index: number) => {
    return (
      <React.Fragment key={index}>
        <div className="grid md:flex-1">
          <div className="flex justify-self-center items-center gap-3">
            <img
              src={toAbsoluteUrl(`/media/brand-logos/${item.image}`)}
              className="h-10 max-w-full"
              alt="image"
            />
            <div className="grid grid-cols-1 place-content-center flex-1">
              <span className="text-mono text-2xl lg:text-2xl font-semibold">
                {item.number}
              </span>
              <span className="text-secondary-foreground text-sm">
                {item.label}
              </span>
            </div>
          </div>
        </div>
        <span className="not-last:border-e border-e-input my-1"></span>
      </React.Fragment>
    );
  };

  return (
    <Card>
      <CardContent>
        <div className="flex flex-wrap px-5 lg:px-10 py-1 gap-2">
          {details.map((item, index) => {
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
