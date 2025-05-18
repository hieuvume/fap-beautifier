import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { useSettings } from '@/app/providers/settings-provider';
import { Button } from '@/app/components/ui/button';

const ResetPasswordChanged = () => {
  const { settings } = useSettings();

  return (
    <div className="px-4 py-8">
      <div className="flex justify-center mb-5">
        <img
          src={toAbsoluteUrl('/media/illustrations/32.svg')}
          className="dark:hidden max-h-[180px]"
          alt=""
        />
        <img
          src={toAbsoluteUrl('/media/illustrations/32-dark.svg')}
          className="light:hidden max-h-[180px]"
          alt=""
        />
      </div>

      <h3 className="text-lg font-medium text-mono text-center mb-4">
        Your password is changed
      </h3>
      <div className="text-sm text-center text-secondary-foreground mb-7.5">
        Your password has been successfully updated. Your account's security is
        our priority.
      </div>

      <Button asChild className="w-full">
        <Link
          to={
            settings?.layout === 'auth-branded'
              ? '/auth/signin'
              : '/auth/classic/signin'
          }
        >
          Sign in
        </Link>
      </Button>
    </div>
  );
};

export { ResetPasswordChanged };
