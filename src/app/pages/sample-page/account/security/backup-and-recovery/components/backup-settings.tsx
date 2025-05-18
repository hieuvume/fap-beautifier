import { ReactNode } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Switch } from '@/app/components/ui/switch';

interface IBackupSettingsItem {
  title: string;
  description: string;
  control: ReactNode;
}
type IBackupSettingsItems = Array<IBackupSettingsItem>;

const BackupSettings = () => {
  const items: IBackupSettingsItems = [
    {
      title: 'Automatic Backup',
      description: 'Scheduled Data Protection',
      control: <Switch id="size-sm" size="sm" defaultChecked />,
    },
    {
      title: 'Backup Frequency',
      description: 'Select Preferred Backup',
      control: (
        <Select defaultValue="1">
          <SelectTrigger className="w-24" size="sm">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="w-24">
            <SelectItem value="1">Daily</SelectItem>
            <SelectItem value="2">Weekly</SelectItem>
            <SelectItem value="3">Monthly</SelectItem>
            <SelectItem value="4">Yearly</SelectItem>
          </SelectContent>
        </Select>
      ),
    },
    {
      title: 'Manual Backup',
      description: 'Backup When Needed',
      control: <Button variant="outline">Start</Button>,
    },
  ];

  const renderItem = (item: IBackupSettingsItem, index: number) => {
    return (
      <CardContent
        key={index}
        className="border-b border-border flex items-center justify-between py-4 gap-2.5"
      >
        <div className="flex flex-col justify-center gap-1.5">
          <span className="leading-none font-medium text-sm text-mono">
            {item.title}
          </span>
          <span className="text-sm text-secondary-foreground">
            {item.description}
          </span>
        </div>
        {item.control}
      </CardContent>
    );
  };

  return (
    <Card>
      <CardHeader className="mb-1">
        <CardTitle>Backup Settings</CardTitle>
      </CardHeader>
      {items.map((item, index) => {
        return renderItem(item, index);
      })}
    </Card>
  );
};

export { BackupSettings, type IBackupSettingsItem, type IBackupSettingsItems };
