import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Engage } from './engage';

export function Help() {
  return (
    <div className="grid lg:grid-cols-2 gap-5 lg:gap-7.5">
      <Engage
        title="Questions ?"
        description="Visit our Help Center for detailed assistance on billing, payments, and subscriptions."
        image={
          <>
            <img
              src={toAbsoluteUrl('/media/illustrations/2.svg')}
              className="dark:hidden max-h-[150px]"
              alt="image"
            />
            <img
              src={toAbsoluteUrl('/media/illustrations/2-dark.svg')}
              className="light:hidden max-h-[150px]"
              alt="image"
            />
          </>
        }
        more={{ title: 'Go to Help Center', url: '#' }}
      />
      <Engage
        title="Contact Support"
        description="Need assistance? Contact our support team for prompt, personalized help your queries & concerns."
        image={
          <>
            <img
              src={toAbsoluteUrl('/media/illustrations/4.svg')}
              className="dark:hidden max-h-[150px]"
              alt="image"
            />
            <img
              src={toAbsoluteUrl('/media/illustrations/4-dark.svg')}
              className="light:hidden max-h-[150px]"
              alt="image"
            />
          </>
        }
        more={{
          title: 'Contact Support',
          url: 'https://devs.keenthemes.com/unresolved',
        }}
      />
    </div>
  );
}
