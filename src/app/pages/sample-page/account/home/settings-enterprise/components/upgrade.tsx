import { HexagonBadge } from '@/app/partials/common/hexagon-badge';
import { OctagonAlert } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

const Upgrade = () => {
  return (
    <>
      <style>
        {`
          .upgrade-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/bg-5.png')}');
          }
          .dark .upgrade-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/bg-5-dark.png')}');
          }
        `}
      </style>

      <Card className="rounded-xl">
        <div className="flex items-center flex-wrap sm:flex-wrap justify-between grow gap-2 p-5 rtl:[background-position:-30%_41%] [background-position:121%_41%] bg-no-repeat bg-[length:660px_310px] upgrade-bg">
          <div className="flex items-center gap-4">
            <HexagonBadge
              stroke="stroke-orange-200 dark:stroke-orange-950"
              fill="fill-orange-50 dark:fill-orange-950/30"
              size="size-[50px]"
              badge={
                <OctagonAlert size={20} className="text-xl text-orange-400" />
              }
            />
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center flex-wrap gap-2.5">
                <Link
                  to="#"
                  className="text-base font-medium text-mono hover:text-primary-active"
                >
                  Upgrade your business info
                </Link>
                <Badge variant="secondary" appearance="outline">
                  16 days left
                </Badge>
              </div>
              <div className="text-sm text-foreground">
                Elevate business information for a standout profile. Utilize
                premium features, ensuring success with enhanced details.
                <br />
                Upgrade now for heightened visibility and broader impact.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Button variant="mono">Start</Button>
            <Button variant="ghost">Skip</Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export { Upgrade };
