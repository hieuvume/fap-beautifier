import { Fragment } from 'react';
import { HexagonBadge } from '@/app/partials/common/hexagon-badge';
import { ScrollText } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

const Upgrade = () => {
  return (
    <Fragment>
      <style>
        {`
          .upgrade-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/bg-14.png')}');
          }
          .dark .upgrade-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/bg-14-dark.png')}');
          }
        `}
      </style>

      <Card className="rounded-xl">
        <div className="flex items-center justify-between grow gap-5 p-5 rtl:bg-[center_left_-8rem] bg-[center_right_-8rem] bg-no-repeat bg-[length:700px] upgrade-bg">
          <div className="flex items-center gap-4">
            <HexagonBadge
              stroke="stroke-blue-200 dark:stroke-blue-950"
              fill="fill-blue-50 dark:fill-blue-950/30"
              size="size-[50px]"
              badge={<ScrollText className="text-xl text-blue-400" />}
            />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5">
                <Link
                  to="#"
                  className="text-base font-medium text-mono hover:text-primary-active"
                >
                  Upgrade your Components.io to Enterprise
                </Link>
                <Badge variant="destructive" appearance="outline">
                  Trial expires in 29 days
                </Badge>
              </div>
              <div className="text-sm text-secondary-foreground">
                Enterprise Components.io is a website offering high-quality,
                advanced UI components designed for developers, enhancing
                efficiency and aesthetics in web and mobile app development.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <Button variant="ghost">
              <Link to="#">Cancel Trial</Link>
            </Button>
            <Button variant="mono">
              <Link to="#">Upgrade Now</Link>
            </Button>
          </div>
        </div>
      </Card>
    </Fragment>
  );
};

export { Upgrade };
