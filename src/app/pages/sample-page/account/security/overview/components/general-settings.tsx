import { Fragment, ReactNode } from 'react';
import { HexagonBadge } from '@/app/partials/common/hexagon-badge';
import {
  BadgeCheck,
  CheckCircle,
  LocateFixed,
  LucideIcon,
  Puzzle,
  ShieldCheck,
  TabletSmartphone,
  Users,
} from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Switch } from '@/app/components/ui/switch';

interface IGeneralSettingsItem {
  icon: LucideIcon;
  title: ReactNode;
  description: string;
  actions: ReactNode;
}
type IGeneralSettingsItems = Array<IGeneralSettingsItem>;

const GeneralSettings = () => {
  const items: IGeneralSettingsItems = [
    {
      icon: Users,
      title: (
        <Fragment>
          Prevent members from inviting others
          <Badge size="sm" variant="primary" appearance="outline">
            Pro
          </Badge>
        </Fragment>
      ),
      description:
        'Restrict members from sending invites to new potential members.',
      actions: <Switch size="sm" id="auto-update" />,
    },
    {
      icon: Puzzle,
      title: (
        <Fragment>
          Prevent members from installing third-party integrations
          <Badge size="sm" variant="primary" appearance="outline">
            Pro
          </Badge>
        </Fragment>
      ),
      description:
        'Prohibit the installation of external apps or integrations by members..',
      actions: <Switch size="sm" id="auto-update" />,
    },
    {
      icon: LocateFixed,
      title: 'Allow use location',
      description: "Enable feature to use and share the user's location.",
      actions: <Switch size="sm" defaultChecked />,
    },
    {
      icon: ShieldCheck,
      title: (
        <Fragment>
          Push protection for yourself
          <Badge variant="info" appearance="outline">
            Beta
          </Badge>
        </Fragment>
      ),
      description: 'Enable users to create and display a profile publicly.',
      actions: <Button variant="outline">Setup</Button>,
    },
    {
      icon: BadgeCheck,
      title: 'Allow public profile',
      description: 'Enable users to create and display a profile publicly.',
      actions: <Switch size="sm" defaultChecked />,
    },
    {
      icon: CheckCircle,
      title: 'Allow use location',
      description: "Enable feature to use and share the user's location.",
      actions: <Switch size="sm" />,
    },
    {
      icon: TabletSmartphone,
      title: (
        <Fragment>
          Private vulnerability reporting
          <Badge variant="info" appearance="outline">
            Beta
          </Badge>
        </Fragment>
      ),
      description: 'Confidential channel for reporting system vulnerabilities.',
      actions: (
        <Fragment>
          <Button
            variant="outline"
            className="bg-red-100 border-red-200 text-red-600 hover:text-white hover:bg-red-500 dark:border-red-950 dark:bg-red-950/30"
          >
            Disable all
          </Button>
          <Button variant="outline">Enable all</Button>
        </Fragment>
      ),
    },
  ];

  const renderItem = (item: IGeneralSettingsItem, index: number) => {
    return (
      <CardContent
        key={index}
        className="border-b border-border flex items-center flex-wrap sm:flex-nowrap justify-between py-4 gap-2.5"
      >
        <div className="flex items-center gap-3.5">
          <HexagonBadge
            stroke="stroke-input"
            fill="fill-muted/30"
            size="size-[50px]"
            badge={<item.icon className="text-xl text-muted-foreground" />}
          />
          <div className="flex flex-col gap-0.5">
            <span className="flex items-center gap-1.5 leading-none font-medium text-sm text-mono">
              {item.title}
            </span>
            <span className="text-sm text-gray700">{item.description}</span>
          </div>
        </div>
        <div className="flex items-center gap-2.5">{item.actions}</div>
      </CardContent>
    );
  };

  return (
    <Card>
      {items.map((item, index) => {
        return renderItem(item, index);
      })}
    </Card>
  );
};

export {
  GeneralSettings,
  type IGeneralSettingsItem,
  type IGeneralSettingsItems,
};
