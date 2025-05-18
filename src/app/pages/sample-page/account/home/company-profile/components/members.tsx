import { DropdownMenu3 } from '@/app/partials/dropdown-menu/dropdown-menu-3';
import { DropdownMenu4 } from '@/app/partials/dropdown-menu/dropdown-menu-4';
import { EllipsisVertical } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Switch } from '@/app/components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';

interface IMembersItem {
  avatar: string;
  name: string;
  connections: number;
  label: string;
  joined: string;
  disabled: boolean;
}
type IMembersItems = Array<IMembersItem>;

interface IMembersProps {
  url: string;
}

const Members = ({ url }: IMembersProps) => {
  const tables: IMembersItems = [
    {
      avatar: '300-3.png',
      name: 'Tyler Hero',
      connections: 26,
      label: 'Project Member',
      joined: 'Today',
      disabled: true,
    },
    {
      avatar: '300-1.png',
      name: 'Esther Howard',
      connections: 639,
      label: 'Accountant',
      joined: '5 days ago',
      disabled: false,
    },
    {
      avatar: '300-11.png',
      name: 'Jacob Jones',
      connections: 125,
      label: 'Data Analyst',
      joined: '3 days ago',
      disabled: false,
    },
    {
      avatar: '300-2.png',
      name: 'Cody Fisher',
      connections: 81,
      label: 'Accountant',
      joined: '2 weeks ago',
      disabled: true,
    },
    {
      avatar: '300-5.png',
      name: 'Leslie Alexander',
      connections: 1203,
      label: 'Director',
      joined: '3 weeks ago',
      disabled: false,
    },
  ];

  const renderItem = (table: IMembersItem, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell>
          <div className="flex items-center grow gap-2.5">
            <img
              src={toAbsoluteUrl(`/media/avatars/${table.avatar}`)}
              className="rounded-full size-9 shrink-0"
              alt="image"
            />
            <div className="flex flex-col">
              <Link
                to="#"
                className="text-sm font-semibold text-mono hover:text-primary-active mb-px"
              >
                {table.name}
              </Link>
              <span className="text-xs font-normal text-secondary-foreground">
                {table.connections} connections
              </span>
            </div>
          </div>
        </TableCell>
        <TableCell className="text-end">
          <Badge variant="secondary" appearance="outline">
            {table.label}
          </Badge>
        </TableCell>
        <TableCell className="text-end">
          <Badge
            appearance="outline"
            variant={table.disabled ? 'destructive' : 'success'}
          >
            {table.disabled ? 'Disabled' : 'Enabled'}
          </Badge>
        </TableCell>
        <TableCell className="text-end text-secondary-foreground text-sm">
          {table.joined}
        </TableCell>
        <TableCell className="text-end">
          <DropdownMenu4
            trigger={
              <Button variant="ghost" mode="icon">
                <EllipsisVertical />
              </Button>
            }
          />
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>Members</CardTitle>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Label htmlFor="auto-update" className="text-sm">
              Enforce 2FA
            </Label>
            <Switch defaultChecked size="sm" />
          </div>
          <DropdownMenu3
            trigger={
              <Button variant="ghost" mode="icon">
                <EllipsisVertical />
              </Button>
            }
          />
        </div>
      </CardHeader>
      <CardContent className="kt-scrollable-x-auto p-0">
        <div className="kt-scrollable-auto">
          <Table className="align-middle text-sm text-secondary-foreground">
            <TableHeader>
              <TableRow className="bg-accent/60">
                <TableHead className="text-start font-medium min-w-52 h-10">
                  Name
                </TableHead>
                <TableHead className="text-end font-medium min-w-36 h-10">
                  Role
                </TableHead>
                <TableHead className="text-end font-medium min-w-32 h-10">
                  2FA
                </TableHead>
                <TableHead className="text-end font-medium min-w-20 h-10">
                  Joined
                </TableHead>
                <TableCell className="min-w-16 h-10"></TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tables.map((table, index) => {
                return renderItem(table, index);
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button mode="link" underlined="dashed" asChild>
          <Link to={url}>View 64 more</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { Members, type IMembersItem, type IMembersItems, type IMembersProps };
