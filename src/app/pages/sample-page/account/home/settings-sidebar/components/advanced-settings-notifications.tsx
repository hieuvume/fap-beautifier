import { ReactNode, useId } from 'react';
import { HexagonBadge } from '@/app/partials/common/hexagon-badge';
import { Mail } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Label } from '@/app/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { Switch } from '@/app/components/ui/switch';

interface IAdvancedSettingsNotificationsItem {
  title: string;
  description: string;
  badge: ReactNode;
}
type IAdvancedSettingsNotificationsItems =
  Array<IAdvancedSettingsNotificationsItem>;

const AdvancedSettingsNotifications = () => {
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
  const id4 = useId();
  const id5 = useId();
  const id6 = useId();

  const items: IAdvancedSettingsNotificationsItems = [
    {
      title: 'Email',
      description: 'Tailor Your Email Preferences.',
      badge: <Mail className="text-xl text-muted-foreground" />,
    },
    {
      title: 'Slack',
      description: 'Stay Updated on Slack.',
      badge: (
        <img
          src={toAbsoluteUrl('/media/brand-logos/slack.svg')}
          className="h-5"
          alt="image"
        />
      ),
    },
  ];

  const renderItem = (
    item: IAdvancedSettingsNotificationsItem,
    index: number,
  ) => {
    return (
      <div
        key={index}
        className="flex items-center justify-between flex-wrap grow border border-border rounded-xl gap-2 px-3.5 py-2.5"
      >
        <div className="flex items-center flex-wrap gap-3.5">
          <HexagonBadge
            stroke="stroke-input"
            fill="fill-muted/30"
            size="size-[50px]"
            badge={item.badge}
          />
          <div className="flex flex-col">
            <Link
              to="#"
              className="text-sm font-medium text-mono hover:text-primary-active mb-px"
            >
              {item.title}
            </Link>
            <span className="text-sm text-secondary-foreground">
              {item.description}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="size-sm" size="sm" defaultChecked />
        </div>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader id="advanced_settings_notifications">
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent className="lg:py-7.5">
        <div className="flex flex-wrap items-center gap-5 mb-5 lg:mb-7">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
        <div className="flex flex-col gap-3.5 mb-7">
          <span className="text-base font-medium text-mono pb-0.5">
            Desktop notifications
          </span>
          <div className="flex flex-col items-start gap-4">
            <RadioGroup defaultValue="intermediate">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="beginner" id={id1} />
                <Label htmlFor={id1} variant="secondary">
                  All new messages (Recommended)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="intermediate" id={id2} />
                <Label htmlFor={id2} variant="secondary">
                  Direct @mentions
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="advanced" id={id3} />
                <Label htmlFor={id3} variant="secondary">
                  Disabled
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="flex flex-col gap-3.5 mb-7">
          <span className="text-base font-medium text-mono pb-0.5">
            Email notifications
          </span>
          <div className="flex flex-col items-start gap-4">
            <RadioGroup defaultValue="intermediate">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="beginner" id={id4} />
                <Label htmlFor={id4} variant="secondary">
                  All new messages and statuses
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="intermediate" id={id5} />
                <Label htmlFor={id5} variant="secondary">
                  AUnread messages and statuses
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="advanced" id={id6} />
                <Label htmlFor={id6} variant="secondary">
                  Disabled
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="flex flex-col gap-3.5">
          <span className="text-base font-medium text-mono pb-0.5">
            Subscriptions
          </span>
          <div className="flex items-center space-x-2">
            <Checkbox />
            <Label>Automatically subscribe to tasks you create</Label>
          </div>
        </div>
        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export {
  AdvancedSettingsNotifications,
  type IAdvancedSettingsNotificationsItem,
  type IAdvancedSettingsNotificationsItems,
};
