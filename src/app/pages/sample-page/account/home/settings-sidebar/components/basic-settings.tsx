import { useState } from 'react';
import { AvatarInput } from '@/app/partials/common/avatar-input';
import { format } from 'date-fns';
import { CalendarDays } from 'lucide-react';
import { cn } from '@/app/lib/utils';
import { Button } from '@/app/components/ui/button';
import { Calendar } from '@/app/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Switch } from '@/app/components/ui/switch';

const BasicSettings = () => {
  const [date, setDate] = useState<Date | undefined>(new Date(1984, 0, 20));
  const [nameInput, setNameInput] = useState('Jason Tatum');
  const [companyInput, setCompanyInput] = useState('KeenThemes');
  const [phoneInput, setPhoneInput] = useState('');

  return (
    <Card className="pb-2.5">
      <CardHeader id="basic_settings">
        <CardTitle>Basic Settings</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-5">
        <div className="flex items-center flex-wrap gap-2.5">
          <Label className="flex w-full max-w-56">Photo</Label>
          <div className="flex items-center justify-between flex-wrap grow gap-2.5">
            <span className="text-sm text-secondary-foreground">
              150x150px JPEG, PNG Image
            </span>
            <AvatarInput />
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <Label className="flex w-full items-center gap-1 max-w-56">
              Name
            </Label>
            <Input
              type="text"
              defaultValue={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <Label className="flex w-full items-center gap-1 max-w-56">
              Birth Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  mode="input"
                  variant="outline"
                  id="date"
                  className={cn(
                    'w-full data-[state=open]:border-primary',
                    !date && 'text-muted-foreground',
                  )}
                >
                  <CalendarDays className="-ms-0.5" />
                  {date ? format(date, 'LLL dd, y') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="single" // Single date selection
                  defaultMonth={date}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={1}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <Label className="flex w-full items-center gap-1 max-w-56">
              Company
            </Label>
            <Input
              type="text"
              defaultValue={companyInput}
              onChange={(e) => setCompanyInput(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <Label className="flex w-full items-center gap-1 max-w-56">
              Phone number
            </Label>
            <Input
              type="text"
              placeholder="Enter phone"
              defaultValue={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-2.5">
          <Label className="flex w-full max-w-56">Visibility</Label>
          <div className="grow">
            <Select defaultValue="1">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Public</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
                <SelectItem value="3">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-2.5">
          <Label className="flex w-full max-w-56">Avaibality</Label>
          <div className="flex items-center gap-2">
            <Label htmlFor="auto-update" className="text-sm">
              Available to hire
            </Label>
            <Switch defaultChecked size="sm" />
          </div>
        </div>
        <div className="flex justify-end pt-2.5">
          <Button>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { BasicSettings };
