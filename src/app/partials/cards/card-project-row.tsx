import { EllipsisVertical } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Progress } from '@/app/components/ui/progress';
import { AvatarGroup } from '../common/avatar-group';
import { DropdownMenu3 } from '../dropdown-menu/dropdown-menu-3';

interface IProjectRowProps {
  logo: string;
  name: string;
  description: string;
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
  progress: {
    variant: string;
    value: number;
  };
  team: {
    size?: string;
    group: Array<{ filename?: string; variant?: string; fallback?: string }>;
    more?: {
      variant?: string;
      number?: number;
    };
  };
}

const CardProjectRow = ({
  logo,
  name,
  description,
  status,
  progress,
  team,
}: IProjectRowProps) => {
  return (
    <Card className="p-7">
      <div className="flex items-center flex-wrap justify-between gap-5">
        <div className="flex items-center gap-3.5">
          <div className="flex items-center justify-center size-14 shrink-0 rounded-lg bg-accent/60">
            <img
              src={toAbsoluteUrl(`/media/brand-logos/${logo}`)}
              className=""
              alt="image"
            />
          </div>
          <div className="flex flex-col">
            <Link
              to="#"
              className="text-lg text-mono hover:text-primary-active mb-px"
            >
              {name}
            </Link>
            <span className="text-sm text-secondary-foreground">
              {description}
            </span>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-5 lg:gap-20">
          <div className="flex items-center flex-wrap gap-5 lg:gap-14">
            <Badge size="lg" variant={status.variant} appearance="outline">
              {status.label}
            </Badge>
            <Progress
              value={progress?.value}
              indicatorClassName={progress?.variant}
              className="h-1.5 w-36"
            />
          </div>
          <div className="flex items-center gap-5 lg:gap-14">
            <div className="flex justify-end w-24">
              <AvatarGroup
                group={team.group}
                size={team.size}
                more={team.more}
              />
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
      </div>
    </Card>
  );
};

export { CardProjectRow, type IProjectRowProps };
