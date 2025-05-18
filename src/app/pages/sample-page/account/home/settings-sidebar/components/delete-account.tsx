import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Label } from '@/app/components/ui/label';

const DeleteAccount = () => {
  return (
    <Card>
      <CardHeader id="delete_account">
        <CardTitle>Delete Account</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col lg:py-7.5 lg:gap-7.5 gap-3">
        <div className="flex flex-col gap-5">
          <div className="text-sm text-foreground">
            We regret to see you leave. Confirm account deletion below. Your
            data will be permanently removed. Thank you for being part of our
            community. Please check our{' '}
            <Button mode="link" asChild>
              <Link to="#">Setup Guidelines</Link>
            </Button>{' '}
            if you still wish continue.
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox />
            <Label>Confirm deleting account</Label>
          </div>
        </div>
        <div className="flex justify-end gap-2.5">
          <Button variant="outline">
            <Link to="#">Deactivate Instead</Link>
          </Button>
          <Button variant="destructive">
            <Link to="#">Delete Account</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { DeleteAccount };
