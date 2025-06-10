import { Fragment } from 'react';
import {
  BadgeCheck,
  ChevronRight,
  CreditCard,
  LucideIcon,
  ShieldCheck,
  Users,
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
      title: 'Personal info',
      icon: BadgeCheck,
      desc: 'Central hub for users: view data, change settings, see activity logs, manage tasks, read notes, get alerts, and more',
      path: '/account/members/team-info',
    },
    {
      title: 'Login & Security',
      icon: ShieldCheck,
      desc: 'Set passwords, enable 2FA, view login logs, update security questions, track account activity for better safety',
      path: '/account/security/security-log',
    },
    {
      title: 'Billing & Payments',
      icon: CreditCard,
      desc: 'Manage billing info, update payment methods, view transaction history, set up autopay, and track expenses easily',
      path: '/account/billing/basic',
    },
    {
      title: 'Members, Teams & Roles',
      icon: Users,
      desc: 'Manage members, assign roles, create teams, update permissions, view activity logs, and streamline team collaboration',
      path: '/account/members/roles',
    },
  ];

  const renderItem = (item: IOptionsItem, index: number) => {
    return (
      <Card
        key={index}
        className="px-5 lg:px-7.5 h-full bg-[length:85%] [background-position:9rem_-4rem] rtl:[background-position:-4rem_-4rem] bg-no-repeat channel-stats-bg"
      >
        <div className="flex flex-col gap-4 pt-6">
          <item.icon className="text-2xl text-muted-foreground" />
          <div className="flex flex-col gap-2.5 mb-2">
            <h3 className="text-base font-medium leading-none text-mono">
              {item.title}
            </h3>
            <span className="text-sm text-foreground leading-5">
              {item.desc}
            </span>
          </div>
        </div>
        <div className="flex mb-4 items-center gap-1 cursor-pointer">
          <Button mode="link" className="px-0">
            <Link to={item.path}>View page</Link>
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
