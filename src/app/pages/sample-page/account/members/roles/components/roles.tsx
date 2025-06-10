import { ReactNode } from 'react';
import { CardAddNew, CardRole } from '@/app/partials/cards';
import {
  Eye,
  Fingerprint,
  LineChart,
  PenTool,
  Settings,
  Truck,
  Users,
} from 'lucide-react';

interface Badge {
  size: string;
  badge: ReactNode;
  fill: string;
  stroke: string;
}

interface IRolesItem {
  badge: Badge;
  title: string;
  subTitle: string;
  description: string;
  team: string;
  path: string;
}
type IRolesItems = Array<IRolesItem>;

const Roles = () => {
  const items: IRolesItems = [
    {
      badge: {
        size: 'size-[44px]',
        badge: <Settings className="text-xl text-blue-400" />,
        stroke: 'stroke-blue-200 dark:stroke-blue-950',
        fill: 'fill-blue-50 dark:fill-blue-950/30',
      },
      title: 'Administrator',
      subTitle: 'Default role',
      description:
        'Manages system settings and user access, ensures system stability.',
      team: '1 person',
      path: '/public-profile/profiles/creator',
    },
    {
      badge: {
        size: 'size-[44px]',
        badge: <Eye className="text-xl text-orange-400" />,
        stroke: 'stroke-orange-200 dark:stroke-orange-950',
        fill: 'fill-orange-50 dark:fill-orange-950/30',
      },
      title: 'Viewer',
      subTitle: 'Default role',
      description: "Can view data but doesn't have editing privileges.",
      team: '32 people',
      path: '/public-profile/profiles/company',
    },
    {
      badge: {
        size: 'size-[44px]',
        badge: <Fingerprint className="text-xl text-green-400" />,
        stroke: 'stroke-green-200 dark:stroke-green-950',
        fill: 'fill-green-50 dark:fill-green-950/30',
      },
      title: 'Remote Developer',
      subTitle: 'Remote role',
      description:
        'Provides assistance and resolves customer inquiries and issues.',
      team: '6 people',
      path: '/public-profile/profiles/nft',
    },
    {
      badge: {
        size: 'size-[44px]',
        badge: <Truck className="text-xl text-red-400" />,
        stroke: 'stroke-red-200 dark:stroke-red-950',
        fill: 'fill-red-50  dark:fill-red-950/30',
      },
      title: 'Customer Support',
      subTitle: 'Default role',
      description:
        'Provides assistance and resolves customer inquiries and issues.',
      team: '32 people',
      path: '/public-profile/profiles/blogger',
    },
    {
      badge: {
        size: 'size-[44px]',
        badge: <LineChart className="text-xl text-violet-400" />,
        stroke: 'stroke-violet-200 dark:stroke-violet-950',
        fill: 'fill-violet-50  dark:fill-violet-950/30',
      },
      title: 'Project Manager',
      subTitle: 'Default role',
      description:
        "Oversees projects, ensures they're on time and within budget.",
      team: '6 people',
      path: '/public-profile/profiles/crm',
    },
    {
      badge: {
        size: 'size-[44px]',
        badge: <PenTool className="text-xl text-muted-foreground" />,
        fill: 'fill-muted/30',
        stroke: 'stroke-input',
      },
      title: 'Remote Designer',
      subTitle: 'Remote role',
      description: 'Creates visual designs remotely for various projects.',
      team: '6 people',
      path: '/public-profile/profiles/gamer',
    },
    {
      badge: {
        size: 'size-[44px]',
        badge: <Users className="text-xl text-green-400" />,
        stroke: 'stroke-green-200 dark:stroke-green-950',
        fill: 'fill-green-50 dark:fill-green-950/30',
      },
      title: 'HR Manager',
      subTitle: 'Default role',
      description:
        'Manages human resources, recruitment, and employee relations.',
      team: '1 person',
      path: '/public-profile/profiles/feeds',
    },
  ];

  const renderItem = (item: IRolesItem, index: number) => {
    return (
      <CardRole
        key={index}
        title={item.title}
        subTitle={item.subTitle}
        description={item.description}
        team={item.team}
        path={item.path}
        badge={item.badge}
      />
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7.5">
      {items.map((item, index) => {
        return renderItem(item, index);
      })}
      <CardAddNew
        path="/public-profile/works"
        size="size-[60px]"
        iconSize="text-xl"
        title="Add New Role"
        subTitle="Ignite Professional Adventures"
      />
    </div>
  );
};

export { Roles, type IRolesItem, type IRolesItems };
