import { ReactNode } from 'react';
import { CardNotification } from '@/app/partials/cards';
import { LucideIcon, Mail, Monitor, Phone, Slack } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Switch } from '@/app/components/ui/switch';

interface IChannelsItem {
  icon: LucideIcon;
  title: string;
  description: string;
  button?: boolean;
  actions: ReactNode;
}
type IChannelsItems = Array<IChannelsItem>;

const Channels = () => {
  const items: IChannelsItems = [
    {
      icon: Mail,
      title: 'Email',
      description: 'jamescollins@ktstudio.com',
      button: true,
      actions: <Switch id="size-sm" size="sm" defaultChecked />,
    },
    {
      icon: Phone,
      title: 'Mobile',
      description: '(225) 555-0118',
      button: true,
      actions: <Switch id="size-sm" size="sm" />,
    },
    {
      icon: Slack,
      title: 'Slack',
      description:
        'Receive instant alerts for messages and updates directly in Slack.',
      actions: (
        <Button variant="outline">
          <Link to="#">Connect Slack</Link>
        </Button>
      ),
    },
    {
      icon: Monitor,
      title: 'Desctop',
      description: 'Enable notifications for real-time desktop alerts.',
      actions: <Switch id="size-sm" size="sm" defaultChecked />,
    },
  ];

  const renderItem = (item: IChannelsItem, index: number) => {
    return (
      <CardNotification
        icon={item.icon}
        title={item.title}
        description={item.description}
        button={item.button}
        actions={item.actions}
        key={index}
      />
    );
  };

  return (
    <Card>
      <CardHeader className="gap-2">
        <CardTitle>Notification Channels</CardTitle>
        <div className="flex items-center gap-2">
          <Label htmlFor="size-sm" className="text-sm">
            Team-Wide Alerts
          </Label>
          <Switch id="size-sm" size="sm" />
        </div>
      </CardHeader>
      <div id="notifications_cards">
        {items.map((item, index) => {
          return renderItem(item, index);
        })}
      </div>
    </Card>
  );
};

export { Channels, type IChannelsItem, type IChannelsItems };
