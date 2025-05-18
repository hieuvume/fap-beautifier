import { DropdownMenu4 } from '@/app/partials/dropdown-menu/dropdown-menu-4';
import { DropdownMenu5 } from '@/app/partials/dropdown-menu/dropdown-menu-5';
import { Check, EllipsisVertical } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/app/components/ui/table';

interface IConnection {
  avatar: string;
  name: string;
  connections: number | 'none';
  jointLinks: number | 'none';
}
type IConnections = Array<IConnection>;

const Connections = () => {
  const tables: IConnections = [
    {
      avatar: '300-3.png',
      name: 'Tyler Hero',
      connections: 26,
      jointLinks: 6,
    },
    {
      avatar: '300-1.png',
      name: 'Esther Howard',
      connections: 639,
      jointLinks: 'none',
    },
    {
      avatar: '300-11.png',
      name: 'Jacob Jones',
      connections: 125,
      jointLinks: 19,
    },
    {
      avatar: '300-2.png',
      name: 'Cody Fisher',
      connections: 81,
      jointLinks: 'none',
    },
    {
      avatar: '300-5.png',
      name: 'Leslie Alexander',
      connections: 1203,
      jointLinks: 2,
    },
    {
      avatar: '300-9.png',
      name: 'Guy Hawkins',
      connections: 2,
      jointLinks: 'none',
    },
  ];

  const renderItem = (table: IConnection, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell className="py-3.5">
          <div className="flex items-center grow gap-2.5">
            <img
              src={toAbsoluteUrl(`/media/avatars/${table.avatar}`)}
              className="rounded-full size-9 shrink-0"
              alt="image"
            />
            <div className="flex flex-col gap-0.5">
              <Link
                to="#"
                className="text-sm font-medium text-mono hover:text-primary-active mb-px"
              >
                {table.name}
              </Link>
              <span className="text-xs font-normal text-secondary-foreground">
                {table.connections} connections
              </span>
            </div>
          </div>
        </TableCell>
        <TableCell className="py-2 text-end text-secondary-foreground font-medium">
          {table.jointLinks}
        </TableCell>
        <TableCell className="py-2 text-end">
          <Button shape="circle" size="sm" mode="icon">
            <Check size={18} />
          </Button>
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
        <CardTitle>Connections</CardTitle>
        <DropdownMenu5
          trigger={
            <Button variant="ghost" mode="icon" size="sm">
              <EllipsisVertical />
            </Button>
          }
        />
      </CardHeader>
      <CardContent className="kt-scrollable-x-auto p-0">
        <div className="kt-scrollable-auto">
          <Table className="align-middle text-sm text-secondary-foreground">
            <TableBody>
              <TableRow className="bg-accent/60">
                <TableCell className="text-start font-medium min-w-48 py-2.5">
                  Name
                </TableCell>
                <TableCell className="text-end font-medium min-w-28 py-2.5">
                  Joint Links
                </TableCell>
                <TableCell className="text-end font-medium min-w-20 py-2.5">
                  Status
                </TableCell>
                <TableCell className="min-w-16"></TableCell>
              </TableRow>
              {tables.map((table, index) => {
                return renderItem(table, index);
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button mode="link" underlined="dashed" asChild>
          <Link to="#">View 64 more</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { Connections, type IConnection, type IConnections };
