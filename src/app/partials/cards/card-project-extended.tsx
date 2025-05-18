import { EllipsisVertical } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Progress } from '@/app/components/ui/progress';
import { AvatarGroup } from '../common/avatar-group';
import { DropdownMenu5 } from '../dropdown-menu/dropdown-menu-5';

interface IProjectExtendedItem {
  total: string;
  description: string;
}
type IProjectExtendedItems = Array<IProjectExtendedItem>;

interface IProjectExtendedProps {
  status: {
    variant?:
      | 'primary'
      | 'mono'
      | 'destructive'
      | 'secondary'
      | 'info'
      | 'success'
      | 'warning'
      | null
      | undefined;
    label: string;
  };
  logo: string;
  title: string;
  description: string;
  team: {
    size?: string;
    group: Array<{ filename?: string; variant?: string; fallback?: string }>;
  };
  statistics: IProjectExtendedItem[];
  progress?: {
    variant: string;
    value: number;
  };
  url: string;
}

const CardProjectExtended = ({
  status,
  logo,
  title,
  description,
  team,
  statistics,
  progress,
  url,
}: IProjectExtendedProps) => {
  const renderItem = (statistic: IProjectExtendedItem, index: number) => {
    return (
      <div
        key={index}
        className="grid grid-cols-1 content-between gap-1.5 border border-dashed border-input shrink-0 rounded-md px-2.5 py-2 min-w-24 max-w-auto"
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
    <Card className="overflow-hidden grow justify-between">
      <div className="p-5 mb-5">
        <div className="flex items-center justify-between mb-5">
          <Badge size="lg" variant={status.variant} appearance="outline">
            {status.label}
          </Badge>
          <DropdownMenu5
            trigger={
              <Button variant="ghost" mode="icon">
                <EllipsisVertical />
              </Button>
            }
          />
        </div>
        <div className="flex justify-center mb-2">
          <img
            src={toAbsoluteUrl(`/media/brand-logos/${logo}`)}
            className="min-w-12 shrink-0"
            alt="image"
          />
        </div>
        <div className="text-center mb-7">
          <Link
            to={url}
            className="text-lg font-medium text-mono hover:text-primary"
          >
            {title}
          </Link>
          <div className="text-sm text-secondary-foreground">{description}</div>
        </div>
        <div className="grid justify-center gap-1.5 mb-7.5">
          <span className="text-xs uppercase text-secondary-foreground text-center">
            team
          </span>
          <AvatarGroup group={team.group} size={team.size} />
        </div>
        <div className="flex items-center justify-center flex-wrap gap-2 lg:gap-5">
          {statistics.map((statistic, index) => {
            return renderItem(statistic, index);
          })}
        </div>
      </div>
      <Progress
        value={progress?.value}
        indicatorClassName={progress?.variant}
        className="h-1"
      />
    </Card>
  );
};

export {
  CardProjectExtended,
  type IProjectExtendedItem,
  type IProjectExtendedItems,
  type IProjectExtendedProps,
};
