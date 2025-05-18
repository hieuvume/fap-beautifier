import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Switch } from '@/app/components/ui/switch';

const AuthEmail = () => {
  const [emailInput, setEmailInput] = useState('jason@studio.io');

  return (
    <Card className="pb-2.5">
      <CardHeader id="auth_email">
        <CardTitle>Email</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-5 pt-7.5">
        <div className="w-full">
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <Label className="flex w-full max-w-56">Email</Label>
            <div className="flex flex-col items-start grow gap-7.5 w-full">
              <Input
                className="input"
                type="text"
                defaultValue={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <div className="flex items-center gap-7.5">
                <Label
                  htmlFor="auto-update"
                  className="text-foreground text-sm"
                >
                  Active
                </Label>
                <Switch defaultChecked size="sm" />
                <Label
                  htmlFor="auto-update"
                  className="text-foreground text-sm"
                >
                  Primary
                </Label>
                <Switch size="sm" />
              </div>
              <span className="form-info text-foreground text-sm font-normal">
                Input your email, designate as primary for priority updates.
                Toggle to seamlessly customize your communication preferences
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { AuthEmail };
