import { Fragment } from 'react';
import { HexagonBadge } from '@/app/partials/common/hexagon-badge';
import { Rocket } from 'lucide-react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Card, CardContent } from '@/app/components/ui/card';

interface IOfferRowProps {
  size: string;
  iconSize: string;
  title: string;
  subTitle: string;
}

const Offer = ({ size, iconSize, title, subTitle }: IOfferRowProps) => {
  return (
    <Fragment>
      <style>
        {`
          .offer-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/bg-4.png')}');
          }
          .dark .offer-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/bg-4-dark.png')}');
          }
        `}
      </style>

      <Card className="border-2 border-dashed border-orange-200 dark:border-orange-950 bg-center bg-[length:750px] bg-no-repeat offer-bg">
        <CardContent className="grid items-center">
          <div className="flex flex-col gap-5">
            <div className="flex justify-center pt-5">
              <HexagonBadge
                size={size}
                badge={<Rocket size={iconSize} className="text-orange-400" />}
                stroke="stroke-orange-200 dark:stroke-orange-950"
                fill="fill-white dark:fill-blue-950/30"
              />
            </div>
            <div className="flex flex-col text-center">
              <span className="text-xl font-semibold text-mono hover:text-primary-active mb-px">
                {title}
              </span>
              <span className="text-sm font-medium text-secondary-foreground">
                {subTitle}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export { Offer, type IOfferRowProps };
