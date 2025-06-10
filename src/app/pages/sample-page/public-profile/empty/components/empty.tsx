import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';

const Empty = () => {
  return (
    <Fragment>
      <Card className="p-8 lg:p-12">
        <CardContent>
          <div className="grid justify-center py-5">
            <img
              src={toAbsoluteUrl('/media/illustrations/11.svg')}
              className="dark:hidden max-h-[170px]"
              alt="image"
            />
            <img
              src={toAbsoluteUrl('/media/illustrations/11-dark.svg')}
              className="light:hidden max-h-[170px]"
              alt="image"
            />
          </div>
          <div className="text-lg font-medium text-mono text-center">
            Upload Item to Get Started
          </div>
          <div className="text-sm text-secondary-foreground text-center gap-1">
            Begin by crafting your inaugural list in minutes.&nbsp;
            <Link
              to="/account/billing/plans"
              className="text-sm font-medium link"
            >
              Get Started!
            </Link>
          </div>
        </CardContent>
      </Card>
      <div className="flex grow justify-center pt-5 lg:pt-7.5">
        <Button mode="link" underlined="dashed" asChild>
          <Link to="/public-profile/profiles/default">
            Check ready Templates
          </Link>
        </Button>
      </div>
    </Fragment>
  );
};

export { Empty };
