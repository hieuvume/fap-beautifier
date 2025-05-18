import { Fragment } from 'react';
import { Faq } from '@/app/partials/common/faq';
import { Help2 } from '@/app/partials/common/help2';
import { Starter } from '@/app/partials/common/starter';
import { toAbsoluteUrl } from '@/app/lib/helpers';

export function AccountMembersStarterContent() {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <Starter
        image={
          <Fragment>
            <img
              src={toAbsoluteUrl('/media/illustrations/22.svg')}
              className="dark:hidden max-h-[230px]"
              alt="image"
            />
            <img
              src={toAbsoluteUrl('/media/illustrations/22-dark.svg')}
              className="light:hidden max-h-[230px]"
              alt="image"
            />
          </Fragment>
        }
        title="New Member Onboarding and Registration"
        subTitle={
          <Fragment>
            A streamlined process to welcome and integrate new members into the
            team,
            <br />
            ensuring a smooth and efficient start.
          </Fragment>
        }
        engage={{
          path: '/account/home/user-profile',
          label: 'Add New Member',
          btnColor: 'btn-primary',
        }}
      />
      <Faq />
      <Help2 />
    </div>
  );
}
