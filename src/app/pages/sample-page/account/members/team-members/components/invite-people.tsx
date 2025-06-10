import { useState } from 'react';
import { SquarePlus } from 'lucide-react';
import { Link } from 'react-router';
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
  const [emailInput, setEmailInput] = useState('jason@studio.io');
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invite People</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-5">
        <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <Label className="flex w-full max-w-32">Email</Label>
          <Input
            type="text"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div className="flex items-baseline flex-wrap gap-2.5">
          <Label className="flex w-full max-w-32">Role</Label>
          <div className="flex flex-col items-start grow gap-5">
            <Select defaultValue="1">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Member</SelectItem>
                <SelectItem value="2">Editor</SelectItem>
                <SelectItem value="3">Designer</SelectItem>
                <SelectItem value="4">Admin</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <SquarePlus size={12} />
              Add more
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button>
          <Link to="#">Invite People</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { InvitePeople };
