import { useState } from 'react';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';

interface IImportItem {
  label: string;
  description: string;
  checked: boolean;
}
type IImportItems = Array<IImportItem>;

const Import = () => {
  const [customInput, setCustomInput] = useState('Your welcome message here');
  const options: IImportItems = [
    {
      label: 'Create new users',
      description:
        'Select this option to create new user accounts for individuals whose details are included in the import data but who do not have an existing account in the system.',
      checked: true,
    },
    {
      label: 'Update existing users',
      description:
        'When checked, the system will update the information for users already in the database with any new or altered details provided in the import file.',
      checked: false,
    },
    {
      label: 'Send email notification on password change',
      description:
        'This option ensures users are promptly notified via email in the event of a password change, enhancing security and keeping users informed of their account status.',
      checked: true,
    },
    {
      label: 'Include external IDs in import results',
      description:
        'By including external IDs in the import results, administrators can more easily reconcile and track user records across different systems and databases.',
      checked: false,
    },
  ];

  const renderItem = (option: IImportItem, index: number) => {
    return (
      <div key={index} className="flex flex-col gap-2.5">
        <div className="flex items-center space-x-2">
          <Checkbox value={option.label} defaultChecked={option.checked} />
          <Label className="text-foreground font-medium">{option.label}</Label>
        </div>
        <p className="form-info leading-5 text-foreground font-normal">
          {option.description}
        </p>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Start Import</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-7.5 py-5 lg:py-7.5">
        {options.map((option, index) => {
          return renderItem(option, index);
        })}
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-2.5">
            <Button>Select CSV File</Button>
            <Button variant="ghost">Choose File</Button>
          </div>
          <p className="text-secondary-foreground text-sm">
            Use the 'Choose file' button to locate and upload the CSV file that
            contains the user data.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-mono text-sm font-medium">
            Custom welcome message
          </div>
          <Textarea
            placeholder="Your welcome message here"
            className="text-sm text-secondary-foreground font-normal"
            rows={5}
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
          />
          <div className="flex items-center space-x-2">
            <Checkbox />
            <Label className="text-foreground text-sm font-medium">
              Send welcome email to new users
            </Label>
          </div>
        </div>
        <div className="text-foreground text-sm">
          <span className="text-destructive uppercase">Warning: </span>
          An email will be sent to all users created unless the welcome message
          is disabled in settings. Ensure the correct communication preferences
          are set.
        </div>
      </CardContent>
      <CardFooter className="justify-center py-3.5">
        <Button>
          <Link to="#">Import Member</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { Import, type IImportItem, type IImportItems };
