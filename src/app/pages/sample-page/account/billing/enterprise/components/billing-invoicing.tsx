import { DropdownMenu2 } from '@/app/partials/dropdown-menu/dropdown-menu-2';
import { Download, EllipsisVertical } from 'lucide-react';
import { Link } from 'react-router';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';

interface IBillingInvoicingItem {
  number: string;
  date: string;
  ammount: string;
  label: string;
  color: 'warning' | 'success' | 'destructive';
}
type IBillingInvoicingItems = Array<IBillingInvoicingItem>;

const BillingInvoicing = () => {
  const tables: IBillingInvoicingItems = [
    {
      number: 'Invoice-2024-xd912c',
      date: '6 Aug, 2024',
      ammount: '24.00',
      label: 'Upcoming',
      color: 'warning',
    },
    {
      number: 'Invoice-2024-rq857m',
      date: '17 Jun, 2024',
      ammount: '29.99',
      label: 'Paid',
      color: 'success',
    },
    {
      number: 'Invoice-2024-hg234x',
      date: '21 Apr, 2024',
      ammount: '6.59',
      label: 'Declined',
      color: 'destructive',
    },
    {
      number: 'Invoice-2024-lp098y',
      date: '14 mar, 2024',
      ammount: '24.00',
      label: 'Paid',
      color: 'success',
    },
  ];

  const renderItem = (table: IBillingInvoicingItem, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell className="text-sm text-foreground">
          {table.number}
        </TableCell>
        <TableCell className="lg:text-end">
          <Badge variant={table.color} appearance="outline">
            {table.label}
          </Badge>
        </TableCell>
        <TableCell className="text-sm text-foreground lg:text-end">
          {table.date}
        </TableCell>
        <TableCell className="text-sm text-foreground lg:text-end">
          ${table.ammount}
        </TableCell>
        <TableCell>
          <DropdownMenu2
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
    <Card>
      <CardHeader>
        <CardTitle>Billing and Invoicing</CardTitle>
        <Button variant="outline">
          <Download size={20} />
          Download All
        </Button>
      </CardHeader>
      <CardContent className="kt-scrollable-x-auto p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-accent/60">
              <TableHead className="min-w-50 h-10">Invoice</TableHead>
              <TableHead className="min-w-16 text-end h-10">Status</TableHead>
              <TableHead className="min-w-30 text-end h-10">Date</TableHead>
              <TableHead className="min-w-16 text-end h-10">Amount</TableHead>
              <TableHead className="w-8 h-10"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tables.map((table, index) => {
              return renderItem(table, index);
            })}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-center">
        <Button mode="link" underlined="dashed" asChild>
          <Link to="#">View all Payments</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export {
  BillingInvoicing,
  type IBillingInvoicingItem,
  type IBillingInvoicingItems,
};
