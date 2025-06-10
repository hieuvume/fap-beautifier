import { useState } from 'react';
import { SquarePlus } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';

const InvitePeople = () => {
  const [invitepeopleInput, setInvitePeopleInput] = useState('jason@studio.io');
  return (
    <Card>
      <CardHeader id="webhooks">
        <CardTitle>Invite People</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-5">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-32">Email</Label>
          <div className="grow min-w-48">
            <Input
              className="w-full"
              type="text"
              value={invitepeopleInput}
              onChange={(e) => setInvitePeopleInput(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-baseline flex-wrap gap-2.5">
          <Label className="flex w-full max-w-32">Role</Label>
          <div className="grid gap-5 grow items-start">
            <Select defaultValue="1">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Member</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
                <SelectItem value="3">Option 3</SelectItem>
              </SelectContent>
            </Select>
            <div>
              <Button variant="outline">
                <SquarePlus size={16} /> Add more
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button>Invite People</Button>
      </CardFooter>
    </Card>
  );
};

export { InvitePeople };
