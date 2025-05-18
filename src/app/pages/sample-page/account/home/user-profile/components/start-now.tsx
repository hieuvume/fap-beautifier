import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

const StartNow = () => {
  return (
    <Fragment>
      <style>
        {`
          .start-now-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/bg-5.png')}');
          }
          .dark .start-now-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/bg-5-dark.png')}');
          }
        `}
      </style>

      <Card className="flex-col gap-5 justify-between bg-[center_top_1.3rem] bg-no-repeat pt-5 lg:pt-10 px-5 start-now-bg bg-[length:700px]">
        <div className="text-center">
          <h3 className="text-mono text-lg font-semibold leading-6 mb-1.5">
            Individually Tailored
            <br />
            Deals for Personal Satisfaction
          </h3>
          <span className="text-secondary-foreground text-sm block mb-5">
            Discover promotions crafted to match your preferences.
          </span>
          <Button variant="mono">
            <Link to="/network/user-table/visitors">Start Now</Link>
          </Button>
        </div>
        <div className="text-center">
          <img
            src={toAbsoluteUrl('/media/images/2600x1200/3.png')}
            className="dark:hidden max-h-[300px]"
            alt=""
          />
          <img
            src={toAbsoluteUrl('/media/images/2600x1200/3-dark.png')}
            className="light:hidden max-h-[300px]"
            alt=""
          />
        </div>
      </Card>
    </Fragment>
  );
};

export { StartNow };
