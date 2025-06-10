import { Link } from 'react-router';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Slider } from '@/app/components/ui/slider';

interface IPlanItem {
  total: string;
  description: string;
}
type IPlanItems = Array<IPlanItem>;

const Plan = () => {
  const statistics: IPlanItems = [
    {
      total: '$769.00',
      description: 'Annual Total',
    },
    {
      total: '$69.00',
      description: 'Next Bill Amount',
    },
    {
      total: '23 Aug, 24',
      description: 'Next Billing Date',
    },
  ];

  const renderItem = (statistic: IPlanItem, index: number) => {
    return (
      <div
        key={index}
        className="grid grid-cols-1 content-between gap-1.5 border border-dashed border-input shrink-0 rounded-md px-3.5 py-2 min-w-24 max-w-auto"
      >
        <span className="text-mono text-base leading-none font-medium">
          {statistic.total}
        </span>
        <span className="text-secondary-foreground text-sm">
          {statistic.description}
        </span>
      </div>
    );
  };

  return (
    <Card>
      <CardContent className="lg:py-7.5">
        <div className="flex flex-col items-stretch gap-5 lg:gap-7.5">
          <div className="flex flex-wrap items-center gap-5 justify-between">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2.5">
                <h2 className="text-2xl font-semibold text-mono">Basic Plan</h2>
                <Badge size="md" variant="success" appearance="outline">
                  Monthly
                </Badge>
              </div>
              <p className="text-sm text-secondary-foreground">
                Essential Features for Startups and Individuals
              </p>
            </div>
            <div className="flex gap-2.5">
              <Button variant="outline">
                <Link to="#">Cancel Plan</Link>
              </Button>
              <Button>
                <Link to="#">Upgrade Plan</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-2 lg:gap-5">
            {statistics.map((statistic, index) => {
              return renderItem(statistic, index);
            })}
          </div>
          <div className="flex flex-col gap-3.5">
            <span className="text-sm text-secondary-foreground">
              Usage (32 of 40 users)
            </span>
            <Slider defaultValue={[80]} max={100} step={1}></Slider>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { Plan, type IPlanItem, type IPlanItems };
