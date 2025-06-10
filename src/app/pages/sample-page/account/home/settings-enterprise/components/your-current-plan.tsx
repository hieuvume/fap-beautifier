import { DropdownMenu3 } from '@/app/partials/dropdown-menu/dropdown-menu-3';
import { EllipsisVertical } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

interface IYourCurrentPlanItem {
  title: string;
  summary: string;
  link: string;
  path: string;
}
type IYourCurrentPlanItems = Array<IYourCurrentPlanItem>;

const YourCurrentPlan = () => {
  const items: IYourCurrentPlanItems = [
    {
      title: 'DevOps Integration',
      summary: 'Achieve faster releases, continuous integration & deployment',
      link: 'DevOps Features',
      path: '#',
    },
    {
      title: 'Data Encryption',
      summary:
        'End-to-end encryption, protecting info from unauthorized access',
      link: 'Setup Encryption',
      path: '#',
    },
    {
      title: 'API Integration',
      summary: 'Integrate your systems with our robust API capabilities.',
      link: 'Get API Key',
      path: '#',
    },
  ];

  const renderItem = (item: IYourCurrentPlanItem, index: number) => {
    return (
      <div key={index} className="flex flex-col items-start gap-2.5">
        <Link
          to={item.path}
          className="text-base text-mono font-medium hover:text-primary"
        >
          {item.title}
        </Link>
        <p className="text-sm text-secondary-foreground">{item.summary}</p>
        <Button mode="link" underlined="dashed" asChild>
          <Link to={item.path}>{item.link}</Link>
        </Button>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader className="gap-2" id="settings_auth_two_factor">
        <CardTitle>Your Current Plan</CardTitle>
        <DropdownMenu3
          trigger={
            <Button variant="ghost" mode="icon">
              <EllipsisVertical />
            </Button>
          }
        />
      </CardHeader>
      <CardContent className="lg:py-7.5">
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:gap-7.5 gap-5">
          <div className="md:flex-1 grid content-between border border-border rounded-xl">
            <div
              className="bg-cover bg-no-repeat rounded-t-lg h-48"
              style={{
                backgroundImage: `url(${toAbsoluteUrl(`/media/images/600x600/22.jpg`)})`,
              }}
            ></div>
            <div className="flex flex-col gap-2 p-5 pt-4">
              <Link
                to="#"
                className="text-base text-mono font-medium hover:text-primary"
              >
                Premium Plan
              </Link>
              <p className="text-sm text-secondary-foreground mb-2">
                Access premium perks through our exclusive Premium Plan
              </p>
              <div>
                <Button variant="outline">Change Plan</Button>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <div className="flex flex-col lg:gap-7.5 gap-5">
              {items.map((item, index) => {
                return renderItem(item, index);
              })}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button mode="link" underlined="dashed" asChild>
          <Link to="#">Go to Billing</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export {
  YourCurrentPlan,
  type IYourCurrentPlanItem,
  type IYourCurrentPlanItems,
};
