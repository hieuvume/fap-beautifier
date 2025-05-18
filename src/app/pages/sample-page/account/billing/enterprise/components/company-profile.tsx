import { AvatarGroup, Avatars } from '@/app/partials/common/avatar-group';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Slider } from '@/app/components/ui/slider';

interface ICompanyProfileItem {
  total: string;
  description: string;
}
type ICompanyProfileItems = Array<ICompanyProfileItem>;

const CompanyProfile = () => {
  const statistics: ICompanyProfileItems = [
    {
      total: 'Trial',
      description: 'Status',
    },
    {
      total: '10,000',
      description: 'Query runs',
    },
    {
      total: 'Unlimited',
      description: 'API calls',
    },
    {
      total: '$99.00',
      description: 'Price',
    },
    {
      total: '17 Aug, 2024',
      description: 'Next bill date',
    },
  ];

  const group: Avatars = [
    { filename: '300-4.png', variant: 'size-6' },
    { filename: '300-1.png', variant: 'size-6' },
    { filename: '300-2.png', variant: 'size-6' },
    {
      fallback: '+16',
      variant: 'text-primary-foreground size-6 ring-background bg-green-500',
    },
  ];

  const renderItem = (statistic: ICompanyProfileItem, index: number) => {
    return (
      <div
        key={index}
        className="flex flex-col gap-1.5 px-2.75 py-2.25 border border-dashed border-input rounded-md"
      >
        <span className="text-mono text-sm leading-none font-medium">
          {statistic.total}
        </span>
        <span className="text-secondary-foreground text-xs">
          {statistic.description}
        </span>
      </div>
    );
  };

  return (
    <Card>
      <CardContent className="lg:py-7.5">
        <div className="flex flex-wrap gap-7.5">
          <div className="flex flex-col gap-3 items-center justify-center size-[140px] rounded-xl ring-1 ring-border bg-secondary-clarity">
            <img
              src={toAbsoluteUrl('/media/brand-logos/cloud-one.svg')}
              className="size-[70px]"
              alt="image"
            />
            <span className="text-sm font-semibold text-mono">Cloud One</span>
          </div>
          <div className="flex flex-col gap-5 lg:gap-7.5 grow">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2.5">
                  <h2 className="text-2xl font-semibold text-mono">
                    Cloud One Enterprise
                  </h2>
                  <Badge size="md" variant="success" appearance="outline">
                    Monthly Plan
                  </Badge>
                </div>
                <p className="text-sm text-secondary-foreground">
                  Essential Features for Startups and Individuals
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Button variant="outline">
                  <Link to="#">Cancel Plan</Link>
                </Button>
                <Button>
                  <Link to="#">Upgrade Plan</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-3 lg:gap-5">
              {statistics.map((statistic, index) => {
                return renderItem(statistic, index);
              })}
            </div>
            <div className="flex flex-wrap gap-6 lg:gap-12">
              <div className="flex flex-col gap-3.5 grow">
                <div className="text-sm text-secondary-foreground">
                  UQuery runs:{' '}
                  <span className="text-sm font-medium text-mono">
                    2239 of 10,000 used
                  </span>
                </div>
                <Slider defaultValue={[40]} max={100} step={1}></Slider>
              </div>
              <div className="flex flex-col gap-2.5 lg:min-w-24 shrink-0 -mt-3 max-w-auto">
                <div className="text-sm font-medium text-secondary-foreground">
                  Seats:{' '}
                  <span className="text-sm font-semibold text-foreground">
                    29 of 120 used
                  </span>
                </div>
                <AvatarGroup group={group} />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { CompanyProfile, type ICompanyProfileItem, type ICompanyProfileItems };
