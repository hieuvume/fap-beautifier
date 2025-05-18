import { ReactNode } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Switch } from '@/app/components/ui/switch';

interface IManageDataItem {
  title: string;
  description: string;
  control: ReactNode;
}
type IManageDataItems = Array<IManageDataItem>;

const ManageData = () => {
  const items: IManageDataItems = [
    {
      title: 'Ony invited People',
      description: 'Invite selected people via email.',
      control: <Button variant="outline">Start</Button>,
    },
    {
      title: 'People with the link',
      description: 'Create a pubic link for your report.',
      control: <Button variant="outline">Delete</Button>,
    },
    {
      title: 'No one',
      description: 'Reports will be visible only for you.',
      control: <Switch id="size-xs" size="sm" />,
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
    <Card>
      <CardHeader>
        <CardTitle>Manage your Data</CardTitle>
      </CardHeader>
      {items.map((item, index) => {
        return renderItem(item, index);
      })}
    </Card>
  );
};

export { ManageData, type IManageDataItem, type IManageDataItems };
