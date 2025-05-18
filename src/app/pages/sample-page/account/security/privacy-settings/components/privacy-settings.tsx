import { Fragment, ReactNode } from 'react';
import { HexagonBadge } from '@/app/partials/common/hexagon-badge';
import {
  BadgePercent,
  CheckCircle2,
  LucideIcon,
  MailCheck,
  MapPin,
  Search,
  ShieldQuestion,
  UserCircle2,
} from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Switch } from '@/app/components/ui/switch';

interface IPrivacySettingsItem {
  icon: LucideIcon;
  title: ReactNode;
  description: string;
  actions: ReactNode;
}
type IPrivacySettingsItems = Array<IPrivacySettingsItem>;

const PrivacySettings = () => {
  const items: IPrivacySettingsItems = [
    {
      icon: Search,
      title: (
        <Fragment>
          Show up in search results
          <Badge size="sm" variant="primary" appearance="outline">
            Pro
          </Badge>
        </Fragment>
      ),
      description:
        'Control your visibility by choosing if you appear in search results.',
      actions: <Switch size="sm" id="auto-update" />,
    },
    {
      icon: MailCheck,
      title: (
        <Fragment>
          Manage Read Receipts for Messages
          <Badge size="sm" variant="primary" appearance="outline">
            Pro
          </Badge>
        </Fragment>
      ),
      description: 'Enable or disable read receipts for private messages.',
      actions: <Switch size="sm" id="auto-update" />,
    },
    {
      icon: MapPin,
      title: 'Enable Location-Based Services',
      description:
        'Allow the app to access and use your location for personalized content.',
      actions: <Switch size="sm" id="auto-update" defaultChecked />,
    },
    {
      icon: BadgePercent,
      title: (
        <Fragment>
          Ad Personalization Settings
          <Badge variant="info" appearance="outline">
            Beta
          </Badge>
        </Fragment>
      ),
      description: 'Customize how ads are targeted to your interests.',
      actions: <Button variant="outline">Setup</Button>,
    },
    {
      icon: UserCircle2,
      title: 'Allow public profile',
      description: 'Enable users to create and display a profile publicly.',
      actions: <Switch size="sm" id="auto-update" defaultChecked />,
    },
    {
      icon: CheckCircle2,
      title: 'Allow use location',
      description: "Enable feature to use and share the user's location.",
      actions: <Switch size="sm" id="auto-update" />,
    },
    {
      icon: ShieldQuestion,
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

  const renderItem = (item: IPrivacySettingsItem, index: number) => {
    return (
      <CardContent
        key={index}
        className="border-b border-border flex items-center justify-between py-4 gap-2.5"
      >
        <div className="flex items-center gap-3.5">
          <HexagonBadge
            stroke="stroke-input"
            fill="fill-muted/30"
            size="size-[50px]"
            badge={<item.icon className="text-xl text-muted-foreground" />}
          />
          <div className="flex flex-col gap-1.5">
            <span className="flex items-center gap-1.5 leading-none font-medium text-sm text-mono">
              {item.title}
            </span>
            <span className="text-sm text-secondary-foreground">
              {item.description}
            </span>
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
  PrivacySettings,
  type IPrivacySettingsItem,
  type IPrivacySettingsItems,
};
