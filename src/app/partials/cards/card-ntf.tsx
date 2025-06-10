import { SquareSigma } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Card } from '@/app/components/ui/card';

interface INFTProps {
  image: string;
  title: string;
  id: number;
  info: string;
  date: string;
}

const CardNFT = ({ image, id, title, info, date }: INFTProps) => {
  return (
    <Card className="shadow-none mb-5">
      <div
        className="rounded-t-xl w-[280px] h-[240px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${toAbsoluteUrl(`/media/images/600x600/${image}`)})`,
        }}
      ></div>
      <div className="card-border card-rounded-b px-3.5 pt-5 pb-3.5">
        <div className="pb-6">
          <Link
            to="#"
            className="block font-medium text-mono hover:text-primary text-base leading-4 mb-2"
          >
            {title}
          </Link>
          <div className="text-sm text-secondary-foreground">
            Token ID:
            <span className="text-sm font-medium text-foreground"> {id}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-secondary-foreground">
              Current bid
            </span>
            <div className="flex items-center gap-1">
              <SquareSigma
                size={16}
                className="text-lg text-orange-400 leading-none"
              />
              <span className="text-sm font-semibold text-mono leading-none tracking-tight">
                {info}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-self-end text-end gap-2">
            <span className="text-sm text-secondary-foreground">Ending in</span>
            <span className="text-sm font-semibold text-mono leading-none tracking-tight">
              {date}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export { CardNFT, type INFTProps };
