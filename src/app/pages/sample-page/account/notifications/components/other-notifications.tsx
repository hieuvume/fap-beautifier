import { CardNotification } from '@/app/partials/cards';
import {
  CalendarClock,
  ClipboardCheck,
  DollarSign,
  FileText,
  MessageCircle,
  Tablet,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Switch } from '@/app/components/ui/switch';
import { IChannelsItem, IChannelsItems } from '.';

const OtherNotifications = () => {
  const items: IChannelsItems = [
    {
      icon: Tablet,
      title: 'Task Alert',
      description: 'Notification when a task is assigned to you.',
      actions: <Switch id="size-sm" size="sm" defaultChecked />,
    },
    {
      icon: DollarSign,
      title: 'Budget Warning',
      description: 'Get notified if nearing budget limit.',
      actions: <Switch id="size-sm" size="sm" defaultChecked />,
    },
    {
      icon: FileText,
      title: 'Invoice Alert',
      description: 'Alert for new and unpaid invoices.',
      actions: (
        <Button variant="outline">
          <Link to="#">View Invoices</Link>
        </Button>
      ),
    },
    {
      icon: MessageCircle,
      title: 'Feedback Alert',
      description: 'When a client submits new feedback.',
      actions: <Switch id="size-sm" size="sm" defaultChecked />,
    },
    {
      icon: Users,
      title: 'Collaboration Request',
      description: 'Invite to collaborate on a new document.',
      actions: <Switch id="size-sm" size="sm" defaultChecked />,
    },
    {
      icon: CalendarClock,
      title: 'Meeting Reminder',
      description: 'Reminder of scheduled meetings for the day.',
      actions: (
        <Button variant="outline">
          <Link to="#">Show Meetings</Link>
        </Button>
      ),
    },
    {
      icon: ClipboardCheck,
      title: 'Status Change',
      description: 'Notifies changes in project or task status.',
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
        <CardTitle>Other Notifications</CardTitle>
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

export { OtherNotifications };
