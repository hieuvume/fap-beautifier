import { CloudDownload, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
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

interface IInvoicingItem {
  number: string;
  date: string;
  amount: string;
  label: string;
  color: 'warning' | 'success' | 'destructive';
}
type IInvoicingItems = Array<IInvoicingItem>;

const Invoicing = () => {
  const tables: IInvoicingItems = [
    {
      number: 'Invoice-2024-xd912c',
      date: '6 Aug, 2024',
      amount: '24.00',
      label: 'Upcoming',
      color: 'warning',
    },
    {
      number: 'Invoice-2024-rq857m',
      date: '17 Jun, 2024',
      amount: '29.99',
      label: 'Paid',
      color: 'success',
    },
    {
      number: 'Invoice-2024-jk563z',
      date: '30 Apr, 2024',
      amount: '24.00',
      label: 'Paid',
      color: 'success',
    },
    {
      number: 'Invoice-2024-hg234x',
      date: '21 Apr, 2024',
      amount: '6.59',
      label: 'Declined',
      color: 'destructive',
    },
    {
      number: 'Invoice-2024-lp098y',
      date: '14 mar, 2024',
      amount: '24.00',
      label: 'Paid',
      color: 'success',
    },
  ];

  const renderItem = (table: IInvoicingItem, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell className="text-sm text-foreground font-normal">
          {table.number}
        </TableCell>
        <TableCell className="lg:text-end">
          <Badge variant={table.color} appearance="outline">
            {table.label}
          </Badge>
        </TableCell>
        <TableCell className="text-sm text-foreground font-normal lg:text-end">
          {table.date}
        </TableCell>
        <TableCell className="text-sm text-secondary-foreground font-normal lg:text-end">
          ${table.amount}
        </TableCell>
        <TableCell>
          <Button variant="ghost" mode="icon">
            <Download className="text-blue-500" />
          </Button>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing and Invoicing</CardTitle>
        <Button variant="outline">
          <CloudDownload size={16} />
          Download All
        </Button>
      </CardHeader>
      <CardContent className="kt-scrollable-x-auto p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-accent/60">
              <TableHead className="min-w-52 h-10">Invoice</TableHead>
              <TableHead className="min-w-24 text-end h-10">Status</TableHead>
              <TableHead className="min-w-32 text-end h-10">Date</TableHead>
              <TableHead className="min-w-20 text-end h-10">Amount</TableHead>
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
          <Link to="/account/billing/history">View all Payments</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { Invoicing, type IInvoicingItem, type IInvoicingItems };
