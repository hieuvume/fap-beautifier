import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';

export function Error404() {
  return (
    <>
      <div className="mb-10">
        <img
          src={toAbsoluteUrl('/media/illustrations/19.svg')}
          className="dark:hidden max-h-[160px]"
          alt="image"
        />
        <img
          src={toAbsoluteUrl('/media/illustrations/19-dark.svg')}
          className="hidden dark:block max-h-[160px]"
          alt="image"
        />
      </div>

      <span className="badge badge-primary badge-outline mb-3">404 Error</span>

      <h3 className="text-2xl font-semibold text-mono text-center mb-2">
        We have lost this page
      </h3>

      <div className="text-base text-center text-secondary-foreground mb-10">
        The requested page is missing. Check the URL or&nbsp;
        <Link
          to="/"
          className="text-primary font-medium hover:text-primary-active"
        >
          Return Home
        </Link>
        .
      </div>
    </>
  );
}
