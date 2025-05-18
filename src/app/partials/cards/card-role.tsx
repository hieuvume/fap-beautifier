import { ReactNode } from 'react';
import { EllipsisVertical } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { HexagonBadge } from '../common/hexagon-badge';
import { DropdownMenu5 } from '../dropdown-menu/dropdown-menu-5';

interface Badge {
  size: string;
  badge: ReactNode;
  fill: string;
  stroke: string;
}

interface IRoleProps {
  badge: Badge;
  title: string;
  subTitle: string;
  description: string;
  team: string;
  path: string;
}

const CardRole = ({
  path,
  title,
  subTitle,
  description,
  team,
  badge,
}: IRoleProps) => {
  return (
    <Card className="flex flex-col gap-5 p-5 lg:p-7.5">
      <div className="flex items-center flex-wrap justify-between gap-1">
        <div className="flex items-center gap-2.5">
          <HexagonBadge {...badge} />
          <div className="flex flex-col">
            <Link
              to={path}
              className="text-base font-medium text-mono hover:text-primary-active mb-px"
            >
              {title}
            </Link>
            <span className="text-sm text-secondary-foreground">
              {subTitle}
            </span>
          </div>
        </div>
        <DropdownMenu5
          trigger={
            <Button variant="ghost" mode="icon">
              <EllipsisVertical />
            </Button>
          }
        />
      </div>
      <p className="text-sm text-secondary-foreground">{description}</p>
      <span className="text-sm text-foreground">{team}</span>
    </Card>
  );
};

export { CardRole, type IRoleProps };
