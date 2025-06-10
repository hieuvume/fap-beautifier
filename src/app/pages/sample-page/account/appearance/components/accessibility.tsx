import { ReactNode } from 'react';
import { CardNotification } from '@/app/partials/cards';
import {
  ArrowRight,
  ArrowRightCircle,
  EyeOff,
  LucideIcon,
  Monitor,
} from 'lucide-react';
import { Card, CardHeader, CardTitle } from '@/app/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Switch } from '@/app/components/ui/switch';

interface AccessibilityItem {
  icon: LucideIcon;
  title: string;
  description: string;
  actions: ReactNode;
}
type AccessibilityItems = Array<AccessibilityItem>;

const Accessibility = () => {
  const items: AccessibilityItems = [
    {
      icon: ArrowRightCircle,
      title: 'Shortcuts require modifier',
      description: 'Enable modifier keys for quick keyboard shortcuts.',
      actions: <Switch id="size-sm" size="sm" defaultChecked />,
    },
    {
      icon: EyeOff,
      title: 'High color contrast',
      description: 'Improve readability with high-contrast interface colors.',
      actions: <Switch id="size-sm" size="sm" />,
    },
    {
      icon: ArrowRight,
      title: 'Autoplay videos',
      description: 'Choose preferences for automatic video playback.',
      actions: (
        <div className="grow min-w-48">
          <Select defaultValue="1">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">System preferences</SelectItem>
              <SelectItem value="2">Sound</SelectItem>
              <SelectItem value="3">Focus</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ),
    },
    {
      icon: Monitor,
      title: 'Open links in Desktop',
      description: 'Links open in the desktop app for convenience.',
      actions: <Switch id="size-sm" size="sm" defaultChecked />,
    },
  ];

  const renderItem = (item: AccessibilityItem, index: number) => {
    return (
      <CardNotification
        icon={item.icon}
        title={item.title}
        description={item.description}
        actions={item.actions}
        key={index}
      />
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Accessibility</CardTitle>
      </CardHeader>
      <div id="notifications_cards">
        {items.map((item, index) => {
          return renderItem(item, index);
        })}
      </div>
    </Card>
  );
};

export { Accessibility, type AccessibilityItems };
