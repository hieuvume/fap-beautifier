import { useState } from 'react';
import { HexagonBadge } from '@/app/partials/common/hexagon-badge';
import { DropdownMenu6 } from '@/app/partials/dropdown-menu/dropdown-menu-6';
import {
  EllipsisVertical,
  LucideIcon,
  MessageSquareText,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Switch } from '@/app/components/ui/switch';

interface IAuthTwoFactorItem {
  icon: LucideIcon;
  title: string;
  description: string;
  checkbox: boolean;
}
type IAuthTwoFactorItems = Array<IAuthTwoFactorItem>;

const AuthTwoFactor = () => {
  const [newPassword, setNewPassword] = useState('');

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
        className="flex items-center justify-between flex-wrap border border-border rounded-xl gap-2 px-3.5 py-2.5"
      >
        <div className="flex items-center flex-wrap gap-3.5">
          <div className="flex items-center">
            <HexagonBadge
              stroke="stroke-input"
              fill="fill-muted/30"
              size="size-[50px]"
              badge={<item.icon className="text-xl text-muted-foreground" />}
            />
          </div>
          <div className="flex flex-col gap-px">
            <Link
              to="#"
              className="text-sm font-medium text-mono hover:text-primary-active"
            >
              {item.title}
            </Link>
            <span className="text-sm font-medium text-secondary-foreground">
              {item.description}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 lg:gap-6">
          <Switch
            size="sm"
            defaultChecked={item.checkbox}
            value={item.checkbox ? '1' : '2'}
          />
        </div>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader id="auth_two_factor">
        <CardTitle>Two-Factor authentication(2FA)</CardTitle>
        <DropdownMenu6
          trigger={
            <Button variant="ghost" mode="icon">
              <EllipsisVertical />
            </Button>
          }
        />
      </CardHeader>
      <CardContent>
        <div className="grid gap-5 mb-7">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
        <div className="w-full">
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-7">
            <Label className="flex w-full max-w-56">Password</Label>
            <div className="flex flex-col tems-start grow gap-3 w-full">
              <Input
                type="text"
                placeholder="Enter password"
                defaultValue={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <span className="form-info text-mono font-normal">
                Enter your password to setup Two-Factor authentication
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-2.5">
          <Button>Setup</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { AuthTwoFactor, type IAuthTwoFactorItem, type IAuthTwoFactorItems };
