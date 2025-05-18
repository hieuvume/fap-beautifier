import { HexagonBadge } from '@/app/partials/common/hexagon-badge';
import {
  BarChart3,
  CreditCard,
  LogOut,
  LucideIcon,
  Map,
  MousePointerClick,
  Settings,
  ShieldCheck,
  ShieldOff,
  Store,
  Users,
} from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Switch } from '@/app/components/ui/switch';

interface IPermissionsToggleItem {
  icon: LucideIcon;
  title: string;
  description: string;
  checked: boolean;
}
type IPermissionsToggleItems = Array<IPermissionsToggleItem>;

const PermissionsToggle = () => {
  const items: IPermissionsToggleItems = [
    {
      icon: Settings,
      title: 'Workspace Settings',
      description: 'Users may view and update the settings of the workspace.',
      checked: true,
    },
    {
      icon: CreditCard,
      title: 'Billing Management',
      description: 'Users are authorized to review, update subscriptions.',
      checked: false,
    },
    {
      icon: MousePointerClick,
      title: 'Integration Setup',
      description: 'Manage user integrations and associated tags.',
      checked: true,
    },
    {
      icon: ShieldOff,
      title: 'Permissions Control',
      description: 'Grant or revoke user access and tags.',
      checked: false,
    },
    {
      icon: Map,
      title: 'Map Creation',
      description: 'Initiate new mapping projects within workspace.',
      checked: false,
    },
    {
      icon: LogOut,
      title: 'Data Export',
      description: 'Allow extraction of workspace data for analysis.',
      checked: true,
    },
    {
      icon: Users,
      title: 'User Roles',
      description: 'Update roles and permissions for map users.',
      checked: true,
    },
    {
      icon: ShieldCheck,
      title: 'Security Settings',
      description: 'Adjust workspace security protocols and measures.',
      checked: true,
    },
    {
      icon: BarChart3,
      title: 'Insights Access',
      description: 'View workspace analytics and performance data.',
      checked: false,
    },
    {
      icon: Store,
      title: 'Merchant List',
      description: 'Update and manage merchant associations.',
      checked: false,
    },
  ];

  const renderItem = (item: IPermissionsToggleItem, index: number) => {
    return (
      <div
        key={index}
        className="rounded-xl border p-4 flex items-center justify-between gap-2.5"
      >
        <div className="flex items-center gap-3.5">
          <HexagonBadge
            stroke="stroke-input"
            fill="fill-muted/30"
            size="size-[45px]"
            badge={<item.icon className="text-lg text-muted-foreground" />}
          />
          <div className="flex flex-col gap-1">
            <span className="flex items-center gap-1.5 leading-none font-medium text-sm text-mono">
              {item.title}
            </span>
            <span className="text-sm text-secondary-foreground">
              {item.description}
            </span>
          </div>
        </div>
        <Switch
          id="size-sm"
          size="sm"
          defaultChecked={item.checked}
          value={index}
        />
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Role Permissions for{' '}
          <Button mode="link" asChild>
            <Link to="#">Project Manager</Link>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5 lg:py-7.5">
        {items.map((item, index) => {
          return renderItem(item, index);
        })}
      </CardContent>
      <CardFooter className="justify-center py-3.5">
        <Button variant="outline">
          <Link to="#">New Permission</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export {
  PermissionsToggle,
  type IPermissionsToggleItem,
  type IPermissionsToggleItems,
};
