import { Fragment } from 'react';
import { Faq } from '@/app/partials/common/faq';
import { Help2 } from '@/app/partials/common/help2';
import { Starter } from '@/app/partials/common/starter';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Integrations } from './components';

export function AccountIntegrationsContent() {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <Integrations />
      <Starter
        image={
          <Fragment>
            <img
              src={toAbsoluteUrl('/media/illustrations/28.svg')}
              className="dark:hidden max-h-[230px]"
              alt="image"
            />
            <img
              src={toAbsoluteUrl('/media/illustrations/28-dark.svg')}
              className="light:hidden max-h-[230px]"
              alt="image"
            />
          </Fragment>
        }
        title="Add New Integration"
        subTitle={
          <Fragment>
            Explore New Integration: Expand Your Toolkit with Cutting-Edge,
            <br />
            User-Friendly Solutions Tailored for Efficient and Innovative
            Project Management.
          </Fragment>
        }
        engage={{
          path: '/network/user-cards/mini-cards',
          label: 'Start Now',
          btnColor: 'btn-primary',
        }}
      />
      <Faq />
      <Help2 />
    </div>
  );
}
