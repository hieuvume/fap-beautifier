import { CircleCheck, LucideIcon, Users } from 'lucide-react';
import { Link } from 'react-router';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardFooter } from '@/app/components/ui/card';
import { AvatarGroup } from '../common/avatar-group';
import { Rating } from '../common/rating';

interface ITeamProps {
  icon: LucideIcon;
  title: string;
  description: string;
  labels: string[];
  team: {
    size?: string;
    group: Array<{ filename?: string; variant?: string; fallback?: string }>;
    more?: {
      number: number;
      variant: string;
    };
    className?: string;
  };
  connected: boolean;
  rating: {
    value: number;
    round: number;
  };
}

const CardTeam = ({
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
    <Card>
      <CardContent className="grid gap-7 py-7.5">
        <div className="grid place-items-center gap-4">
          <div className="flex justify-center items-center size-14 rounded-full ring-1 ring-input bg-accent/60">
            <Icon size={16} className="text-2xl text-secondary-foreground" />
          </div>
          <div className="grid place-items-center">
            <Link
              to="#"
              className="text-base font-medium text-mono hover:text-primary-active mb-px"
            >
              {title}
            </Link>
            <span className="text-sm text-secondary-foreground text-center">
              {description}
            </span>
          </div>
        </div>
        <div className="grid">
          <div className="flex items-center justify-between flex-wrap mb-3.5 gap-2">
            <span className="text-xs text-secondary-foreground uppercase">
              skills
            </span>
            <div className="flex flex-wrap gap-1.5">
              {labels.map((label, index) => {
                return renderItem(label, index);
              })}
            </div>
          </div>
          <div className="border-t border-input border-dashed"></div>
          <div className="flex items-center justify-between flex-wrap my-2.5 gap-2">
            <span className="text-xs text-secondary-foreground uppercase">
              rating
            </span>
            <Rating rating={rating.value} round={rating.round} />
          </div>
          <div className="border-t border-input border-dashed mb-3.5"></div>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs text-secondary-foreground uppercase">
              members
            </span>
            <AvatarGroup
              group={team.group}
              more={team.more}
              className={team.className}
              size={team.size}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
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
      </CardFooter>
    </Card>
  );
};

export { CardTeam, type ITeamProps };
