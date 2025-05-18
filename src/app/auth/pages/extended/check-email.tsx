import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';

const CheckEmail = () => {
  return (
    <>
      <div className="flex justify-center py-10">
        <img
          src={toAbsoluteUrl('/media/illustrations/30.svg')}
          className="dark:hidden max-h-[130px]"
          alt=""
        />
        <img
          src={toAbsoluteUrl('/media/illustrations/30-dark.svg')}
          className="light:hidden max-h-[130px]"
          alt=""
        />
      </div>

      <h3 className="text-lg font-medium text-mono text-center mb-3">
        Check your email
      </h3>
      <div className="text-sm text-center text-secondary-foreground mb-7.5">
        Please click the link sent to your email&nbsp;
        <a
          href="#"
          className="text-sm text-mono font-medium hover:text-primary-active"
        >
          bob@kt.com
        </a>
        <br />
        to verify your account. Thank you
      </div>

      <div className="flex justify-center mb-5">
        <Link to="/" className="btn btn-primary flex justify-center">
          Back to Home
        </Link>
      </div>

      <div className="flex items-center justify-center gap-1">
        <span className="text-sm text-secondary-foreground">
          Didn’t receive an email?
        </span>
        <Link
          to="/auth/signin"
          className="text-sm font-semibold text-foreground hover:text-primary"
        >
          Resend
        </Link>
      </div>
    </>
  );
};

export { CheckEmail };
