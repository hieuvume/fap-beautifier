import { EllipsisVertical } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { DropdownMenu3 } from '../dropdown-menu/dropdown-menu-3';
import { ICampaignItem, ICampaignProps } from './card-campaign';

const CardCampaignRow = ({
  logo,
  logoSize,
  logoDark,
  title,
  description,
  status,
  statistics,
  url,
}: ICampaignProps) => {
  const renderItem = (statistic: ICampaignItem, index: number) => {
    return (
      <div
        key={index}
        className="flex flex-col gap-1.5 border border-dashed border-input rounded-md px-2.5 py-2"
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
    <Card className="p-5 lg:p-7.5">
      <div className="flex items-center flex-wrap justify-between gap-5">
        <div className="flex items-center gap-3.5">
          <div className="flex items-center justify-center w-[50px]">
            {logoDark ? (
              <>
                <img
                  src={toAbsoluteUrl(`/media/brand-logos/${logo}`)}
                  className={`dark:hidden size-[${logoSize}] shrink-0`}
                  alt="image"
                />
                <img
                  src={toAbsoluteUrl(`/media/brand-logos/${logoDark}`)}
                  className={`light:hidden size-[${logoSize}] shrink-0`}
                  alt="image"
                />
              </>
            ) : (
              <img
                src={toAbsoluteUrl(`/media/brand-logos/${logo}`)}
                className={`size-[${logoSize}] shrink-0`}
                alt="image"
              />
            )}
          </div>
          <div>
            <Link
              to={url}
              className="text-lg font-medium text-mono hover:text-primary"
            >
              {title}
            </Link>
            <div className="flex items-center text-sm text-secondary-foreground">
              {description}
            </div>
          </div>
        </div>
        <div className="flex items-center flex-wrap justify-between gap-5 lg:gap-12">
          <div className="flex items-center flex-wrap gap-2 lg:gap-5">
            {statistics.map((statistic, index) => {
              return renderItem(statistic, index);
            })}
          </div>
          <div className="flex justify-center w-20">
            <Badge size="lg" variant={status.variant} appearance="outline">
              {status.label}
            </Badge>
          </div>
          <DropdownMenu3
            trigger={
              <Button variant="ghost" mode="icon">
                <EllipsisVertical />
              </Button>
            }
          />
        </div>
      </div>
    </Card>
  );
};

export { CardCampaignRow };
