import { Fragment } from 'react';
import {
  BadgeCheck,
  ChevronRight,
  LucideIcon,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

interface IOptionsItem {
  title: string;
  icon: LucideIcon;
  desc: string;
  path: string;
}
type IOptionsItems = Array<IOptionsItem>;

const Options = () => {
  const items: IOptionsItems = [
    {
      title: 'Seats',
      icon: BadgeCheck,
      desc: 'Central hub for users: view data, change settings, see activity logs',
      path: '/account/members/team-info',
    },
    {
      title: 'Login & Security',
      icon: ShieldCheck,
      desc: 'Set passwords, enable 2FA, view login logs, update security questions',
      path: '/account/security/security-log',
    },
  ];

  const renderItem = (item: IOptionsItem, index: number) => {
    return (
      <Card
        key={index}
        className="px-5 lg:px-7.5 h-full bg-[length:85%] [background-position:7.5rem_-3.5rem] bg-no-repeat channel-stats-bg"
      >
        <div className="flex flex-col gap-4 pt-6">
          <item.icon className="text-2xl text-muted-foreground" />
          <div className="flex flex-col gap-2.5 mb-2">
            <Link
              to={`${item.path}`}
              className="text-base font-semibold leading-none text-mono hover:text-primary-active"
            >
              {item.title}
            </Link>
            <span className="text-sm font-medium text-secondary-foreground leading-5">
              {item.desc}
            </span>
          </div>
        </div>
        <div className="flex mb-4 items-center gap-1 cursor-pointer">
          <Button mode="link" className="px-0">
            <Link to="/public-profile/network">View page</Link>
            <ChevronRight size={16} />
          </Button>
        </div>
      </Card>
    );
  };

  return (
    <Fragment>
      <style>
        {`
          .channel-stats-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/bg-3.png')}');
          }
          .dark .channel-stats-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/bg-3-dark.png')}');
          }
        `}
      </style>

      {items.map((item, index) => {
        return renderItem(item, index);
      })}
    </Fragment>
  );
};

export { Options, type IOptionsItem, type IOptionsItems };
