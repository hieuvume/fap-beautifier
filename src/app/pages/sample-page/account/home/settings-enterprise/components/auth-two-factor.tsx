import { HexagonBadge } from '@/app/partials/common/hexagon-badge';
import { DropdownMenu2 } from '@/app/partials/dropdown-menu/dropdown-menu-2';
import {
  EllipsisVertical,
  LucideIcon,
  MessageSquareText,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Switch } from '@/app/components/ui/switch';

interface IAuthTwoFactorItem {
  icon: LucideIcon;
  title: string;
  description: string;
  checkbox: boolean;
}
type IAuthTwoFactorItems = Array<IAuthTwoFactorItem>;

const AuthTwoFactor = () => {
  const items: IAuthTwoFactorItems = [
    {
      icon: MessageSquareText,
      title: 'Text Message (SMS)',
      description: 'Instant codes for secure account verification.',
      checkbox: true,
    },
    {
      icon: ShieldCheck,
      title: 'Authenticator App (TOTP)',
      description:
        'Elevate protection with an authenticator app for two-factor authentication.',
      checkbox: false,
    },
  ];

  const renderItem = (item: IAuthTwoFactorItem, index: number) => {
    return (
      <div
        key={index}
        className="flex items-center justify-between flex-wrap lg:flex-nowrap border border-border rounded-xl gap-2 px-3.5 py-2.5"
      >
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-3.5">
          <HexagonBadge
            stroke="stroke-input"
            fill="fill-muted/30"
            size="size-[50px]"
            badge={<item.icon className="text-xl text-muted-foreground" />}
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
        <Switch defaultChecked size="sm" />
      </div>
    );
  };

  return (
    <Card>
      <CardHeader className="gap-2" id="settings_auth_two_factor">
        <CardTitle>Two-Factor authentication(2FA)</CardTitle>
        <DropdownMenu2
          trigger={
            <Button variant="ghost" mode="icon">
              <EllipsisVertical />
            </Button>
          }
        />
      </CardHeader>
      <CardContent className="lg:py-7.5">
        <div className="grid gap-5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export { AuthTwoFactor, type IAuthTwoFactorItem, type IAuthTwoFactorItems };
