import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Switch } from '@/app/components/ui/switch';

const Webhooks = () => {
  const [webhooknameInput, setWebhookNameInput] = useState('CostaRicaHook');

  return (
    <Card className="pb-2.5">
      <CardHeader id="webhooks">
        <CardTitle>Webhooks</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-5">
        <p className="text-sm text-foreground">
          Set up Webhooks to trigger actions on external services in real-time.
          Stay informed on updates and changes to ensure seamless integration.
        </p>
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-56">Webhook URL</Label>
          <div className="grow">
            <Input type="text" placeholder="Enter URL" />
          </div>
        </div>
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-56">Webhook Name</Label>
          <div className="grow">
            <Input
              type="text"
              value={webhooknameInput}
              onChange={(e) => setWebhookNameInput(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-56">Event Type</Label>
          <div className="grow">
            <Select defaultValue="1">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">All Events</SelectItem>
                <SelectItem value="2">Push Webhooks</SelectItem>
                <SelectItem value="3">Pipe Webhook</SelectItem>
                <SelectItem value="4">Plugin Webhooks</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5 mb-2.5">
          <Label className="flex w-full max-w-56">Custom Headers</Label>
          <div className="grow">
            <div className="flex items-center space-x-2">
              <Label htmlFor="size-sm" className="text-sm">
                Use Custom Header
              </Label>
              <Switch id="size-sm" size="sm" defaultChecked />
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

export { Webhooks };
