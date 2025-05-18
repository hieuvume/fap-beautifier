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
  return (
    <Card className="pb-2.5">
      <CardHeader id="webhooks">
        <CardTitle>Webhooks</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-5">
        <p className="text-sm font-medium text-secondary-foreground">
          Set up Webhooks to trigger actions on external services in real-time.
          Stay informed on updates and changes to <br />
          ensure seamless integration.
        </p>
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <span className="text-sm font-medium text-secondary-foreground max-w-56 w-full">
            Webhook URL
          </span>
          <div className="grow min-w-48">
            <Input
              type="text"
              className="w-full"
              placeholder="Enter URL"
              value=""
              readOnly
            />
          </div>
        </div>
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <span className="text-sm font-medium text-secondary-foreground max-w-56 w-full">
            Webhook Name
          </span>
          <div className="grow min-w-48">
            <Input
              type="text"
              className="w-full placeholder:text-secondary-foreground"
              placeholder="CostaRicaHook"
              value=""
              readOnly
            />
          </div>
        </div>
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <span className="text-sm font-medium text-secondary-foreground max-w-56 w-full">
            Event Type
          </span>
          <div className="grow min-w-48">
            <Select defaultValue="1">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">All Events</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
                <SelectItem value="3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5 mb-2.5">
          <span className="text-sm font-medium text-secondary-foreground max-w-56 w-full">
            Custom Headers
          </span>
          <div className="grow min-w-48">
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
