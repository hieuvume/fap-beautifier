import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from '@/app/components/ui/avatar';
import { Card } from '@/app/components/ui/card';

export default function Item8() {
  return (
    <div className="flex grow gap-2.5 px-5">
      <Avatar>
        <AvatarImage src="/media/avatars/300-12.png" alt="avatar" />
        <AvatarFallback>CH</AvatarFallback>
        <AvatarIndicator className="-end-1.5 -bottom-1.5">
          <AvatarStatus variant="online" className="size-2.5" />
        </AvatarIndicator>
      </Avatar>

      <div className="flex flex-col gap-3.5 grow">
        <div className="flex flex-col gap-1">
          <div className="text-sm font-medium mb-px">
            <Link to="#" className="hover:text-primary text-mono font-semibold">
              Skylar Frost
            </Link>
            <span className="text-secondary-foreground">
              {' '}
              uploaded 2 attachments{' '}
            </span>
          </div>
          <span className="flex items-center text-xs font-medium text-muted-foreground">
            3 days ago
            <span className="rounded-full size-1 bg-mono/30 mx-1.5"></span>
            Web Design
          </span>
        </div>

        <Card className="shadow-none flex items-center justify-between flex-row gap-1.5 p-2.5 rounded-lg bg-muted/70">
          <div className="flex items-center gap-1.5">
            <img
              src={toAbsoluteUrl('/media/file-types/word.svg')}
              className="h-5"
              alt="image"
            />

            <span className="font-medium text-secondary-foreground text-xs me-1">
              landing-page-ver1.docx
            </span>
            <span className="font-medium text-muted-foreground text-xs">
              Upload 3 days ago
            </span>
          </div>
          <Download size={16} className="text-muted-foreground text-md" />
        </Card>

        <Card className="shadow-none flex items-center justify-between flex-row gap-1.5 p-2.5 rounded-lg bg-muted/70">
          <div className="flex items-center gap-1.5">
            <img
              src={toAbsoluteUrl('/media/file-types/word.svg')}
              className="h-5"
              alt="image"
            />

            <span className="font-medium hover:text-primary text-secondary-foreground text-xs me-1">
              landing-page-ver2.docx
            </span>
            <span className="font-medium text-muted-foreground text-xs">
              Upload 3 days ago
            </span>
          </div>

          <Download size={16} className="text-muted-foreground text-md" />
        </Card>
      </div>
    </div>
  );
}
