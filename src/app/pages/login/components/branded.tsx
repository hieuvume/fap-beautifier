import { Link, Outlet } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Card, CardContent } from '@/app/components/ui/card';

export function BrandedLayout() {
  return (
    <>
      <style>
        {`
          .branded-bg {
            background-image: url('${toAbsoluteUrl('/media/fpt/background.png')}');
          }
        `}
      </style>
      <div className="grid lg:grid-cols-2 grow">
        <div className="flex justify-center items-center p-8 lg:p-10 order-2 lg:order-1">
          <Card className="w-full max-w-[400px]">
            <CardContent className="p-6">
              <Outlet />
            </CardContent>
          </Card>
        </div>

        <div className="lg:rounded-xl lg:border lg:border-border lg:m-5 order-1 lg:order-2 bg-top xxl:bg-center xl:bg-cover bg-no-repeat branded-bg">
          <div className="flex flex-col p-8 lg:p-16 gap-4">
            <Link to="/">
              <img
                src={toAbsoluteUrl('/media/fpt/fpt-logo.png')}
                className="h-[40px] max-w-none"
                alt=""
              />
            </Link>

            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold text-mono">
                FPT University Academic Portal
              </h3>
              <div className="text-base font-medium text-secondary-foreground">
                As an education brand with international influence,<br />
                FPT Education has expanded to a full range of educational levels, <br />
                contributing to nurturing high-quality human resources for the labor market.
              </div>
              <img
                className="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px pt-10"
                src={toAbsoluteUrl("/media/fpt/small-background.jpg")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
