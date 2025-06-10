import { CircleCheck, Users } from 'lucide-react';
import { Link } from 'react-router';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { AvatarGroup } from '../common/avatar-group';
import { Rating } from '../common/rating';
import { ITeamProps } from './card-team';

const CardTeamRow = ({
  icon: Icon,
  title,
  description,
  labels,
  rating,
  team,
  connected,
}: ITeamProps) => {
  const renderItem = (label: string, index: number) => {
    return (
      <Badge key={index} size="md" variant="secondary" appearance="outline">
        {label}
      </Badge>
    );
  };

  return (
    <Card className="p-7.5">
      <div className="flex flex-wrap justify-between items-center gap-7">
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center size-14 shrink-0 rounded-full ring-1 ring-input bg-accent/60">
            <Icon size={16} className="text-2xl text-secondary-foreground" />
          </div>
          <div className="grid grid-col gap-1">
            <Link
              to="#"
              className="text-base font-medium text-mono hover:text-primary-active mb-px"
            >
              {title}
            </Link>
            <span className="text-sm text-secondary-foreground">
              {description}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6 lg:gap-12">
          <div className="grid gap-5 justify-end lg:text-end">
            <span className="text-xs font-normal text-muted-foreground uppercase">
              skills
            </span>
            <div className="flex gap-1.5">
              {labels.map((label, index) => {
                return renderItem(label, index);
              })}
            </div>
          </div>
          <div className="grid justify-end gap-6 lg:text-end">
            <div className="text-xs text-secondary-foreground uppercase">
              rating
            </div>
            <Rating rating={rating.value} round={rating.round} />
          </div>
          <div className="grid justify-end gap-3.5 lg:text-end lg:min-w-24 shrink-0 max-w-auto">
            <span className="text-xs text-secondary-foreground uppercase">
              memebers
            </span>
            <AvatarGroup
              group={team.group}
              more={team.more}
              className={team.className}
              size={team.size}
            />
          </div>
          <div className="grid justify-end min-w-20">
            {connected ? (
              <Button variant="outline">
                <Link to="#">
                  <CircleCheck size={16} />
                </Link>{' '}
                Joined
              </Button>
            ) : (
              <Button variant="primary">
                <Link to="#">
                  <Users size={16} />
                </Link>{' '}
                Join
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export { CardTeamRow };
