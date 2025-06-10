import { useId } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';

interface IReportSettingsItem {
  title: string;
  description: string;
  checked: boolean;
}
type IReportSettingsItems = Array<IReportSettingsItem>;

interface IReportSettingsProps {
  limit?: number;
  className?: string;
}

const ReportSettings = ({ limit, className }: IReportSettingsProps) => {
  const id1 = useId();

  const items: IReportSettingsItems = [
    {
      title: 'Ony invited People',
      description: 'Invite selected people via email.',
      checked: true,
    },
    {
      title: 'People with the link',
      description: 'Create a pubic link for your report.',
      checked: false,
    },
    {
      title: 'Everyone',
      description: 'Reports will be visible only for everyone.',
      checked: false,
    },
    {
      title: 'No one',
      description: 'Reports will be visible only for you.',
      checked: false,
    },
  ];

  const renderItem = (item: IReportSettingsItem, index: number) => {
    return (
      <CardContent key={index} className="border-b border-border">
        <RadioGroup
          defaultValue="intermediate"
          className="flex items-center justify-between gap-2.5"
        >
          <div className="flex items-center w-full justify-between space-x-2">
            <Label
              htmlFor={id1}
              variant="secondary"
              className="flex flex-col justify-center gap-1.5"
            >
              <span className="leading-none font-medium text-sm text-mono">
                {item.title}
              </span>
              <span className="text-sm text-secondary-foreground">
                {item.description}
              </span>
            </Label>
            <RadioGroupItem id={id1} value="beginner" checked={item.checked} />
          </div>
        </RadioGroup>
      </CardContent>
    );
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Report Sharing Settings</CardTitle>
      </CardHeader>
      {items.map((item, index) => {
        if (limit === undefined || index < limit) {
          return renderItem(item, index);
        }
        return null;
      })}
    </Card>
  );
};

export {
  ReportSettings,
  type IReportSettingsItem,
  type IReportSettingsItems,
  type IReportSettingsProps,
};
