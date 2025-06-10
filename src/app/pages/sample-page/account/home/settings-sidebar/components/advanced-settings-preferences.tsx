import { useId } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Label } from '@/app/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Switch } from '@/app/components/ui/switch';

const AdvancedSettingsPreferences = () => {
  const id1 = useId();
  const id2 = useId();

  return (
    <Card>
      <CardHeader id="advanced_settings_preferences">
        <CardTitle>Preferences</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-5 lg:py-7.5">
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-56">Language</Label>
          <div className="grow">
            <Select defaultValue="1">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">American English</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
                <SelectItem value="3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-56">Time zone</Label>
          <div className="grow">
            <Select defaultValue="4">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="4">
                  GMT -5:00 - Eastern Time(US & Canada)
                </SelectItem>
                <SelectItem value="5">Option 2</SelectItem>
                <SelectItem value="6">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-2">
          <Label className="flex w-full max-w-56">Currency</Label>
          <div className="grow">
            <Select defaultValue="7">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">United States Dollar (USD)</SelectItem>
                <SelectItem value="8">Option 2</SelectItem>
                <SelectItem value="9">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-56">Open tasks as...</Label>
          <div className="flex items-center gap-5">
            <RadioGroup
              defaultValue="intermediate"
              className="flex items-center gap-5"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="intermediate" id={id1} />
                <Label
                  htmlFor={id1}
                  className="text-foreground text-sm font-normal"
                >
                  Modal
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="beginner" id={id2} />
                <Label
                  htmlFor={id2}
                  className="text-foreground text-sm font-normal"
                >
                  Fullscreen
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="flex flex-wrap gap-2.5 mb-1.5">
          <Label className="flex w-full max-w-56">Attributes</Label>
          <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center space-x-2">
                <Checkbox />
                <Label>Show list names</Label>
              </div>
              <div className="form-hint">See the name next to each icon</div>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center space-x-2">
                <Checkbox defaultChecked />
                <Label>Show linked task names</Label>
              </div>
              <div className="form-hint">
                Show task names next to ids for linked project tasks.
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-2.5">
          <Label className="flex w-full max-w-56">Email visibility</Label>
          <Switch defaultChecked size="sm" />
          <Label htmlFor="auto-update" className="text-foreground text-sm">
            Visible
          </Label>
        </div>
        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { AdvancedSettingsPreferences };
