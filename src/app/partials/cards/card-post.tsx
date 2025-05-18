import { Clock9 } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Card } from '@/app/components/ui/card';

interface IPostProps {
  image: string;
  label: string;
  description: string;
  time: string;
}

const CardPost = ({ image, label, description, time }: IPostProps) => {
  return (
    <Card className="shadow-none w-[280px] mb-5">
      <div
        className="rounded-t-xl w-[280px] h-[240px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${toAbsoluteUrl(`/media/images/600x400/${image}`)})`,
        }}
      ></div>
      <div className="card-border card-rounded-b grid gap-1.5 px-5 py-4">
        <Link
          to="#"
          className="font-medium text-orange-400 text-sm hover:text-primary"
        >
          {label}
        </Link>
        <Link
          to="#"
          className="font-medium text-mono text-lg leading-6 mb-1.5 hover:text-primary"
        >
          {description}
        </Link>
        <time className="flex items-center gap-1.5 text-sm font-medium text-secondary-foreground leading-none">
          <Clock9 size={16} className="text-lg text-muted-foreground" /> {time}
        </time>
      </div>
    </Card>
  );
};

export { CardPost, type IPostProps };
