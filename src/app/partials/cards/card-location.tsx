import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Card } from '@/app/components/ui/card';

interface ILocationProps {
  image: string;
  title: string;
  description: string;
}

const CardLocation = ({ image, title, description }: ILocationProps) => {
  return (
    <Card className="shadow-none w-[280px] border-0 mb-4">
      <img
        src={toAbsoluteUrl(`/media/images/600x400/${image}`)}
        className="rounded-t-xl max-w-[280px] shrink-0"
        alt="image"
      />
      <div className="card-border card-rounded-b px-3.5 h-full pt-3 pb-3.5">
        <Link
          to="#"
          className="font-medium block text-mono hover:text-primary text-base mb-2"
        >
          {title}
        </Link>
        <p className="text-sm text-secondary-foreground">{description}</p>
      </div>
    </Card>
  );
};

export { CardLocation, type ILocationProps };
