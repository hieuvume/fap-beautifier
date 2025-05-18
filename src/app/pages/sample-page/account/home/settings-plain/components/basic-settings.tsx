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

interface IGeneralSettingsProps {
  title: string;
}

const BasicSettings = ({ title }: IGeneralSettingsProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date(1984, 0, 20));
  const [nameInput, setNameInput] = useState('Jason Tatum');
  const [emailInput, setEmailInput] = useState('jason@studio.io');
  const [addressInput, setAddressInput] = useState('Avinguda Imaginària, 789');
  const [cityInput, setCityInput] = useState('Barcelona');
  const [postcodeInput, setPostcodeInput] = useState('08012');

  return (
    <Card className="pb-2.5">
      <CardHeader id="general_settings">
        <CardTitle>{title}</CardTitle>
        <div className="flex items-center gap-2">
          <Label htmlFor="auto-update" className="text-sm">
            Public Profile
          </Label>
          <Switch defaultChecked size="sm" />
        </div>
      </CardHeader>
      <CardContent className="grid gap-5">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-56">Photo</Label>
          <div className="flex items-center justify-between flex-wrap grow gap-2.5">
            <span className="text-sm font-medium text-secondary-foreground">
              150x150px JPEG, PNG Image
            </span>
            <AvatarInput />
          </div>
        </div>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-56">Name</Label>
          <Input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
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
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-56">Phone number</Label>
          <Input type="text" placeholder="Phone number" />
        </div>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-56">Email</Label>
          <Input
            type="text"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-56">Address</Label>
          <Input
            type="text"
            value={addressInput}
            onChange={(e) => setAddressInput(e.target.value)}
          />
        </div>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-56">Country</Label>
          <Select defaultValue="1">
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Spain</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
              <SelectItem value="3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-56">State</Label>
          <Input type="text" placeholder="State" />
        </div>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-56">City</Label>
          <Input
            type="text"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          />
        </div>
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-2.5">
          <Label className="flex w-full max-w-56">Postcode</Label>
          <Input
            type="text"
            value={postcodeInput}
            onChange={(e) => setPostcodeInput(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { BasicSettings, type IGeneralSettingsProps };
