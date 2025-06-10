import { EllipsisVertical } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { AvatarGroup } from '../common/avatar-group';
import { DropdownMenu1 } from '../dropdown-menu/dropdown-menu-1';
import {
  IProjectExtendedItem,
  IProjectExtendedProps,
} from './card-project-extended';

const CardProjectExtendedRow = ({
  status,
  logo,
  title,
  description,
  team,
  statistics,
  url,
}: IProjectExtendedProps) => {
  const renderItem = (statistic: IProjectExtendedItem, index: number) => {
    return (
      <div
        key={index}
        className="grid grid-cols-1 content-between gap-1.5 border border-dashed border-input shrink-0 rounded-md px-2.5 py-2 min-w-24 max-w-auto"
      >
        <span className="text-mono text-sm leading-none font-semibold">
          {statistic.total}
        </span>
        <span className="text-secondary-foreground text-xs font-medium">
          {statistic.description}
        </span>
      </div>
    );
  };

  return (
    <Card className="p-7.5">
      <div className="flex items-center flex-wrap justify-between gap-5">
        <div className="flex items-center gap-3.5">
          <div className="flex items-center justify-center min-w-12">
            <img
              src={toAbsoluteUrl(`/media/brand-logos/${logo}`)}
              className="min-w-12 shrink-0"
              alt="image"
            />
          </div>
          <div className="flex flex-col">
            <Link
              to={url}
              className="text-lg font-medium text-mono hover:text-primary"
            >
              {title}
            </Link>
            <div className="text-sm text-secondary-foreground">
              {description}
            </div>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-5 lg:gap-12">
          <div className="flex items-center flex-wrap gap-5 lg:gap-14">
            <div className="flex items-center lg:justify-center flex-wrap gap-2 lg:gap-5">
              {statistics.map((statistic, index) => {
                return renderItem(statistic, index);
              })}
            </div>
            <div className="w-[125px] shrink-0">
              <Badge size="lg" variant={status.variant} appearance="outline">
                {status.label}
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-5 lg:gap-14">
            <div className="grid justify-end  min-w-24">
              <AvatarGroup group={team.group} size={team.size} />
            </div>
            <DropdownMenu1
              trigger={
                <Button variant="ghost" mode="icon">
                  <EllipsisVertical />
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export { CardProjectExtendedRow };
