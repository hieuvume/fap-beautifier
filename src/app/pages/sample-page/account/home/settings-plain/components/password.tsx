import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';

const Password = () => {
  return (
    <Card className="pb-2.5">
      <CardHeader id="password_settings">
        <CardTitle>Password</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-5">
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-56">Current Password</Label>
          <Input type="text" placeholder="Your current password" />
        </div>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-56">New Password</Label>
          <Input type="text" placeholder="New password" />
        </div>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-2.5">
          <Label className="flex w-full max-w-56">Confirm New Password</Label>
          <Input type="text" placeholder="Confirm new password" />
        </div>
        <div className="flex justify-end">
          <Button>Reset Password</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { Password };
