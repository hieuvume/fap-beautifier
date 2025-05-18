import { Fragment } from 'react';
import { HexagonBadge } from '@/app/partials/common/hexagon-badge';
import { Rocket } from 'lucide-react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Card, CardContent } from '@/app/components/ui/card';
import { IOfferRowProps } from './offer';

const OfferRow = ({ size, iconSize, title, subTitle }: IOfferRowProps) => {
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

      <Card className="card border-2 border-dashed border-orange-200 dark:border-orange-950 bg-center bg-[length:600px] bg-no-repeat offer-bg">
        <CardContent>
          <div className="flex items-center justify-center gap-5">
            <div className="flex justify-center">
              <HexagonBadge
                size={size}
                badge={<Rocket size={iconSize} className="text-orange-400" />}
                stroke="stroke-orange-200 dark:stroke-orange-950"
                fill="fill-white dark:fill-blue-950/30"
              />
            </div>
            <div className="flex flex-col text-start">
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

export { OfferRow };
