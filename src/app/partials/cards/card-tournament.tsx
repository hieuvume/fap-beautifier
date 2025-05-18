import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Badge } from '@/app/components/ui/badge';
import { Card } from '@/app/components/ui/card';
import { Progress } from '@/app/components/ui/progress';

interface ITournamentProps {
  image: string;
  logo: string;
  title: string;
  time: string;
  labels: string[];
  progress: {
    variant: string;
    value: number;
    slotNumber: number;
    leftNumber: number;
  };
}

const CardTournament = ({
  image,
  logo,
  title,
  time,
  labels,
  progress,
}: ITournamentProps) => {
  const renderItem = (label: string, index: number) => {
    return (
      <Badge key={index} size="sm" variant="secondary" appearance="outline">
        {label}
      </Badge>
    );
  };

  return (
    <Card className="shadow-none w-[285px] mb-5">
      <div
        className="bg-cover bg-center bg-no-repeat rounded-t-xl h-56 w-[285px]"
        style={{
          backgroundImage: `url(${toAbsoluteUrl(`/media/images/600x600/${image}`)})`,
        }}
      ></div>
      <div className="card-border card-rounded-b grid gap-6 px-5 pt-3.5 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <img
            src={toAbsoluteUrl(`/media/brand-logos/${logo}`)}
            className="size"
            alt="image"
          />
          <div className="grid grid-cols-1 gap-0.5">
            <Link
              to="#"
              className="text-mono hover:text-primary-active text-base font-medium mb-px"
            >
              {title}
            </Link>
            <time className="flex items-center gap-1.5 text-xs text-secondary-foreground">
              <div className="rounded-full w-1.5 h-1.5 bg-destructive gap-1.5"></div>{' '}
              {time}
            </time>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {labels.map((label, index) => {
            return renderItem(label, index);
          })}
        </div>
        <div className="grid gap-1.5 mb-0.5">
          <Progress
            value={progress?.value}
            indicatorClassName={progress?.variant}
            className="h-1"
          />
          <div className="flex items-center place-content-between">
            <span className="text-secondary-foreground text-xs font-medium">
              {progress.slotNumber} slots
            </span>
            <span className="text-muted-foreground text-xs font-medium">
              {progress.leftNumber} left
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export { CardTournament, type ITournamentProps };
