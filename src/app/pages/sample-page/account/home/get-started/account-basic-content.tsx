import { Fragment } from 'react';
import {
  Bell,
  Boxes,
  FileText,
  IdCard,
  KeySquare,
  LineChart,
  MonitorSmartphone,
  MousePointerSquareDashed,
  Palette,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { IOptionsItems, Options } from './components';

export function AccountGetStartedContent() {
  const items: IOptionsItems = [
    {
      icon: IdCard,
      title: 'Personal info',
      desc: "We're open to partnerships, guest posts, promo bannersand more.",
      path: '/account/members/team-info',
    },
    {
      icon: ShieldCheck,
      title: 'Login & Security',
      desc: 'Safeguarding your information with strong authentication measures.',
      path: '/account/security/security-log',
    },
    {
      icon: FileText,
      title: 'Billing & Payments',
      desc: 'Simplify payments today with secure, user-friendly transaction processes.',
      path: 'account/billing/basic',
    },
    {
      icon: Bell,
      title: 'Notifications',
      desc: 'Keep updated with important notices and event reminders.',
      path: '/account/notifications',
    },
    {
      icon: Boxes,
      title: 'Integrations',
      desc: 'Enhance Workflows with Advanced Integrations.',
      path: '/account/integrations',
    },
    {
      icon: Users,
      title: 'Members, Teams & Roles',
      desc: 'Efficient management of members, teams, and roles.',
      path: '/account/members/roles',
    },
    {
      icon: KeySquare,
      title: 'API Keys',
      desc: 'Secure and manage Your API Keys effectively and efficiently.',
      path: '/account/api-keys',
    },
    {
      icon: MousePointerSquareDashed,
      title: 'Appearance',
      desc: 'Transforming your online presence with flawless appearance.',
      path: '/account/appearance',
    },
    {
      icon: MonitorSmartphone,
      title: 'Devices',
      desc: 'Stay ahead with the latest devices and innovations news',
      path: '#',
    },
    {
      icon: Palette,
      title: 'Brand',
      desc: 'Trending brand designs, identities, and logos.',
      path: '/account/invite-a-friend',
    },
    {
      icon: LineChart,
      title: 'Activity',
      desc: 'Central Hub for Personal Customization.',
      path: '/account/activity',
    },
  ];

  return (
    <Fragment>
      <Options items={items} dropdown={true} />
      <div className="flex grow justify-center pt-5 lg:pt-7.5">
        <Button mode="link" underlined="dashed" asChild>
          <Link to="/account/members/team-info">More Account Options</Link>
        </Button>
      </div>
    </Fragment>
  );
}
