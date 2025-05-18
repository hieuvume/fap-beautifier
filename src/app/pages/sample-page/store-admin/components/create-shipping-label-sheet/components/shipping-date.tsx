import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';

export const ShippingDate = () => {
  return (
    <div className="space-y-3">
      <div className="flex flex-col items-start grow gap-2 w-full">
        <span className="form-info text-xs text-mono font-medium">
          Shipping Date
        </span>

        <Input id="active" type="text" placeholder="Active" />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox />
        <Label>Send</Label>
        <Button mode="link" asChild>
          <Link to="#" className="text-xs font-medium">
            Shipping Info
          </Link>
        </Button>
        <Label>to Customer</Label>
      </div>
    </div>
  );
};
