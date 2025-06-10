import { EllipsisVertical, Heart, Mails } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { DropdownMenu2 } from '../dropdown-menu/dropdown-menu-2';
import { IWorkProps } from './card-work';

const CardWorkRow = ({
  image,
  description,
  title,
  authorAvatar,
  authorName,
  likes,
  comments,
}: IWorkProps) => {
  return (
    <Card className="p-5">
      <div className="flex flex-wrap justify-between items-center gap-7">
        <div className="flex flex-wrap items-center gap-5">
          <img
            src={toAbsoluteUrl(`/media/images/600x400/${image}`)}
            className="rounded-md max-h-20 max-w-full shrink-0"
            alt="image"
          />
          <div className="grid grid-col gap-1">
            <Link
              to="#"
              className="text-lg font-semibold text-mono hover:text-primary-active mb-px"
            >
              {title}
            </Link>
            <span className="text-sm font-medium text-secondary-foreground">
              {description}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-5 lg:gap-7.5">
          <div className="flex items-center gap-1.5">
            <img
              src={toAbsoluteUrl(`/media/avatars/${authorAvatar}`)}
              className="rounded-full h-7"
              alt="image"
            />
            <Link
              to="#"
              className="text-sm font-medium text-secondary-foreground hover:text-primary-active mb-px"
            >
              {authorName}
            </Link>
          </div>
          <div className="flex gap-1 items-center w-20 justify-end">
            <Heart size={16} className="text-base text-muted-foreground" />
            <span className="text-sm font-medium text-secondary-foreground py-2">
              {likes}
            </span>
            <span className="text-sm font-medium text-secondary-foreground">
              Likes
            </span>
          </div>
          <div className="flex gap-1 items-center w-28 justify-end">
            <Mails size={16} className="text-base text-muted-foreground" />
            <span className="text-sm font-medium text-secondary-foreground py-2">
              {comments}
            </span>
            <span className="text-sm font-medium text-secondary-foreground">
              Comments
            </span>
          </div>
          <DropdownMenu2
            trigger={
              <Button variant="ghost" mode="icon">
                <EllipsisVertical />
              </Button>
            }
          />
        </div>
      </div>
    </Card>
  );
};

export { CardWorkRow };
