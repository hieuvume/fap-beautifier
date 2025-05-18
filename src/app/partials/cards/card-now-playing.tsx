import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Badge } from '@/app/components/ui/badge';
import { Card } from '@/app/components/ui/card';
import { AvatarGroup } from '../common/avatar-group';

interface INowPlayingItem {
  number: string;
  description: string;
}
type INowPlayingItems = Array<INowPlayingItem>;

interface INowPlayingProps {
  image: string;
  logo: string;
  title: string;
  date: string;
  statistics: INowPlayingItem[];
  label: number;
  team: {
    group: Array<{ filename: string }>;
    more?: {
      number: number;
      variant: string;
    };
  };
}

const CardNowPlaying = ({
  image,
  logo,
  title,
  date,
  statistics,
  team,
  label,
}: INowPlayingProps) => {
  const renderItem = (statistic: INowPlayingItem, index: number) => {
    return (
      <div key={index} className="grid grid-cols-1 gap-1.5 text-center">
        <span className="text-mono text-sm leading-none font-semibold">
          {statistic.number}%
        </span>
        <span className="text-secondary-foreground text-xs font-medium">
          {statistic.description}
        </span>
      </div>
    );
  };

  return (
    <Card className="shadow-none w-[280px] mb-5">
      <img
        src={toAbsoluteUrl(`/media/images/600x600/${image}`)}
        className="rounded-t-xl max-w-[280px] shrink-0"
        alt="image"
      />
      <div className="card-border card-rounded-b grid gap-6 px-5 py-3.5 mb-4.5">
        <div className="flex items-center gap-2.5">
          <img
            src={toAbsoluteUrl(`/media/images/600x600/${logo}`)}
            className="rounded-full size-10"
            alt="image"
          />
          <div className="grid grid-cols-1 gap-0.5">
            <Link
              to="#"
              className="text-mono hover:text-primary-active text-base font-semibold mb-px"
            >
              {title}
            </Link>
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              {date}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {statistics.map((statistic, index) => {
            return renderItem(statistic, index);
          })}
        </div>
        <div className="flex items-center place-content-between gap-2">
          <AvatarGroup group={team.group} more={team.more} />
          <Badge size="sm" variant="warning" appearance="outline">
            Rank {label}
          </Badge>
        </div>
      </div>
    </Card>
  );
};

export {
  CardNowPlaying,
  type INowPlayingItem,
  type INowPlayingItems,
  type INowPlayingProps,
};
