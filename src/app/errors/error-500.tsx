import { Fragment } from 'react/jsx-runtime';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';

export function Error500() {
  return (
    <Fragment>
      <div className="mb-10">
        <img
          src={toAbsoluteUrl('/media/illustrations/20.svg')}
          className="dark:hidden max-h-[160px]"
          alt="image"
        />
        <img
          src={toAbsoluteUrl('/media/illustrations/20-dark.svg')}
          className="light:hidden max-h-[160px]"
          alt="image"
        />
      </div>

      <Badge variant="destructive" appearance="outline" className="mb-3">
        500 Error
      </Badge>

      <h3 className="text-2xl font-semibold text-mono text-center mb-2">
        Internal Server Error
      </h3>

      <div className="text-base text-center text-secondary-foreground mb-10">
        Server error occurred. Please try again later or &nbsp;
        <a
          href="https://devs.keenthemes.com"
          className="text-primary font-medium hover:text-primary-active"
        >
          Contact Us
        </a>
        &nbsp; for assistance.
      </div>

      <Button asChild>
        <Link to="/">Back to Home</Link>
      </Button>
    </Fragment>
  );
}
