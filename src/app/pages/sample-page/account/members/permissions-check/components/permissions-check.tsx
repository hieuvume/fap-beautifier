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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';

interface IPermissionsCheckItem {
  module: string;
  view: boolean;
  modify: boolean;
  publish: boolean;
  configure: boolean;
}
type IPermissionsCheckItems = Array<IPermissionsCheckItem>;

const PermissionsCheck = () => {
  const data: IPermissionsCheckItems = [
    {
      module: 'Workspace Settings',
      view: true,
      modify: true,
      publish: true,
      configure: true,
    },
    {
      module: 'Billing Management',
      view: true,
      modify: false,
      publish: false,
      configure: false,
    },
    {
      module: 'Integration Setup',
      view: true,
      modify: true,
      publish: false,
      configure: false,
    },
    {
      module: 'Map Creation',
      view: true,
      modify: true,
      publish: true,
      configure: true,
    },
    {
      module: 'Data Export',
      view: true,
      modify: false,
      publish: false,
      configure: false,
    },
    {
      module: 'User Roles',
      view: true,
      modify: false,
      publish: false,
      configure: false,
    },
    {
      module: 'Security Settings',
      view: true,
      modify: false,
      publish: false,
      configure: false,
    },
    {
      module: 'Insights Access',
      view: false,
      modify: false,
      publish: false,
      configure: false,
    },
    {
      module: 'Merchant List',
      view: true,
      modify: true,
      publish: false,
      configure: false,
    },
  ];

  const renderItem = (each: IPermissionsCheckItem, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell className="py-5.5!">{each.module}</TableCell>
        <TableCell className="py-5.5! text-center">
          <Checkbox defaultChecked={each.view} />
        </TableCell>
        <TableCell className="py-5.5! text-center">
          <Checkbox defaultChecked={each.modify} />
        </TableCell>
        <TableCell className="py-5.5! text-center">
          <Checkbox defaultChecked={each.publish} />
        </TableCell>
        <TableCell className="py-5.5! text-center">
          <Checkbox defaultChecked={each.configure} />
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Card>
      <CardHeader className="gap-2">
        <CardTitle>
          <Button mode="link" asChild className="text-xl">
            <Link to="#">Project Manager</Link>
          </Button>{' '}
          Role Permissions
        </CardTitle>
        <div className="flex gap-5">
          <Button variant="outline">
            <Link to="#">New Permission</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="kt-scrollable-x-auto p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-accent/60">
              <TableHead className="text-start text-secondary-foreground font-normal min-w-[300px] h-10">
                Module
              </TableHead>
              <TableHead className="min-w-24 text-secondary-foreground font-normal text-center h-10">
                View
              </TableHead>
              <TableHead className="min-w-24 text-secondary-foreground font-normal text-center h-10">
                Modify
              </TableHead>
              <TableHead className="min-w-24 text-secondary-foreground font-normal text-center h-10">
                Publish
              </TableHead>
              <TableHead className="min-w-24 text-secondary-foreground font-normal text-center h-10">
                Configure
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-mono font-medium">
            {data.map((each, index) => {
              return renderItem(each, index);
            })}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-end py-7.5 gap-2.5">
        <Button variant="outline">
          <Link to="#">Restore Defaults</Link>
        </Button>
        <Button>
          <Link to="#">Save Changes</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export {
  PermissionsCheck,
  type IPermissionsCheckItem,
  type IPermissionsCheckItems,
};
