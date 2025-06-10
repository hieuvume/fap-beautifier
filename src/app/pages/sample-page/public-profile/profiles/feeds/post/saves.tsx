import { Fragment } from 'react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';

const Saves = () => {
  return (
    <Fragment>
      <style>
        {`
          .post-saves-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/bg-2.png')}');
            margin-top: -1rem;
		        height: 7rem;
          }
          .dark .post-saves-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/bg-2-dark.png')}');
            height: 12rem;
		        margin-bottom: -4.5rem;
          }
        `}
      </style>

      <div className="text-center p-7.5 pt-5">
        <div className="bg-center bg-no-repeat bg-cover post-saves-bg"></div>
        <div className="text-xl font-medium text-mono text-center my-2">
          Access Restricted for this Option
        </div>
        <span className="text-sm text-secondary-foreground block mb-7.5">
          The user may not have the necessary privileges or permissions <br />
          to access this option in this page
        </span>
        <div className="flex justify-center">
          <Button variant="outline">Request Access</Button>
        </div>
      </div>
    </Fragment>
  );
};

export { Saves };
