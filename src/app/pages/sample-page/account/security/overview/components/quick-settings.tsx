import { ReactNode } from 'react';
import { HexagonBadge } from '@/app/partials/common/hexagon-badge';
import { LogOut, LucideIcon, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Switch } from '@/app/components/ui/switch';

interface IQuickSettingsItem {
  icon: LucideIcon;
  title: string;
  description: string;
  actions: ReactNode;
}
type IQuickSettingsItems = Array<IQuickSettingsItem>;

const QuickSettings = () => {
  const items: IQuickSettingsItems = [
    {
      icon: ShieldCheck,
      title: 'Enforce two-step verification',
      description: 'Add an extra layer of security with two-step verification.',
      actions: <Switch size="sm" defaultChecked />,
    },
    {
      icon: LogOut,
      title: 'Logout everyone',
      description: 'Instantly sign out all users from all devices.',
      actions: (
        <Button variant="outline">
          <Link to="#">Logout everyone</Link>
        </Button>
      ),
    },
  ];

  const renderItem = (item: IQuickSettingsItem, index: number) => {
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
          <div className="flex flex-col gap-0.5">
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

export { QuickSettings, type IQuickSettingsItem, type IQuickSettingsItems };
