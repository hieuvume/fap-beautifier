import { Heart, Mails } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Card } from '@/app/components/ui/card';

interface IWorkProps {
  image: string;
  title: string;
  description?: string;
  authorAvatar: string;
  authorName: string;
  likes: number;
  comments: number;
}

const CardWork = ({
  image,
  title,
  authorAvatar,
  authorName,
  likes,
  comments,
}: IWorkProps) => {
  return (
    <Card className="border-0 shadow-sm shadow-black/8">
      <img
        src={toAbsoluteUrl(`/media/images/600x400/${image}`)}
        className="w-full h-auto rounded-t-xl"
        alt="image"
      />
      <div className="card-border card-rounded-b flex flex-col gap-2 px-5 py-4.5">
        <Link
          to="/public-profile/profiles/company"
          className="text-lg font-medium text-mono hover:text-primary"
        >
          {title}
        </Link>
        <div className="flex items-center justify-between grow">
          <div className="flex items-center grow">
            <img
              src={toAbsoluteUrl(`/media/avatars/${authorAvatar}`)}
              className="rounded-full size-7 me-2"
              alt="image"
            />
            <Link
              to="/public-profile/profiles/nft"
              className="text-sm text-foreground hover:text-primary mb-px"
            >
              {authorName}
            </Link>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex gap-1 items-center">
              <Heart size={16} className="text-base text-muted-foreground" />
              <span className="text-sm text-foreground py-2">{likes}</span>
            </div>
            <div className="flex gap-1 items-center">
              <Mails size={16} className="text-base text-muted-foreground" />
              <span className="text-sm text-foreground py-2">{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export { CardWork, type IWorkProps };
