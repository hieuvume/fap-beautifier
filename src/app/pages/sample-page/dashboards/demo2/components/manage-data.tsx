import { ReactNode } from 'react';
import { LogOut } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Switch } from '@/app/components/ui/switch';

interface IManageDataItem {
  title: string;
  description: string;
  control: ReactNode;
}
type IManageDataItems = Array<IManageDataItem>;

interface IManageDataProps {
  className: string;
}

const ManageData = ({ className }: IManageDataProps) => {
  const items: IManageDataItems = [
    {
      title: 'Download your data',
      description: 'Add an extra layer of security.',
      control: <Button variant="outline">Start</Button>,
    },
    {
      title: 'Delete all of your data',
      description: 'Instantly sign out all services.',
      control: <Button variant="outline">Delete</Button>,
    },
    {
      title: 'Auto Data Purge',
      description: 'Toggle automatic deletion of old data.',
      control: <Switch id="size-sm" size="sm" />,
    },
    {
      title: 'Export your data',
      description: 'Download a copy of your data',
      control: (
        <Button variant="dim" mode="icon">
          <LogOut size={16} />
        </Button>
      ),
    },
  ];

  const renderItem = (item: IManageDataItem, index: number) => {
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
    <Card className={className}>
      <CardHeader>
        <CardTitle>Manage your Data</CardTitle>
      </CardHeader>
      {items.map((item, index) => {
        return renderItem(item, index);
      })}
    </Card>
  );
};

export {
  ManageData,
  type IManageDataItem,
  type IManageDataItems,
  type IManageDataProps,
};
