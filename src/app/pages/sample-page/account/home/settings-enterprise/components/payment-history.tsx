import { DropdownMenu2 } from '@/app/partials/dropdown-menu/dropdown-menu-2';
import { DropdownMenu5 } from '@/app/partials/dropdown-menu/dropdown-menu-5';
import { EllipsisVertical } from 'lucide-react';
import { Link } from 'react-router';
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

interface IPaymentHistoryItem {
  date: string;
  type: string;
  amount: string;
}
type IPaymentHistoryItems = Array<IPaymentHistoryItem>;

const PaymentHistory = () => {
  const tables: IPaymentHistoryItems = [
    {
      date: '24 Aug, 2024',
      type: 'Subscription Fee',
      amount: '$24.00',
    },
    {
      date: '15 Sep, 2024',
      type: 'Product Purchase',
      amount: '$50.99',
    },
    {
      date: '05 Dec, 2024',
      type: 'Transaction Fee',
      amount: '$2.50',
    },
    {
      date: '30 May, 2025',
      type: 'Annual Maintenance',
      amount: '$40.20',
    },
  ];

  const renderItem = (table: IPaymentHistoryItem, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell className="text-sm font-normal text-foreground">
          {table.date}
        </TableCell>
        <TableCell className="text-sm font-normal text-foreground lg:text-end">
          {table.type}
        </TableCell>
        <TableCell className="text-sm font-normal text-foreground lg:text-end">
          {table.amount}
        </TableCell>
        <TableCell>
          <DropdownMenu5
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
      <CardHeader className="gap-2">
        <CardTitle>Payment History</CardTitle>
        <DropdownMenu2
          trigger={
            <Button variant="ghost" mode="icon">
              <EllipsisVertical />
            </Button>
          }
        />
      </CardHeader>
      <CardContent className="kt-scrollable-x-auto p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-accent/60">
              <TableHead className="min-w-40 h-10">Date</TableHead>
              <TableHead className="min-w-40 lg:text-end h-10">Type</TableHead>
              <TableHead className="min-w-40 lg:text-end h-10">
                Amount
              </TableHead>
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

export { PaymentHistory, type IPaymentHistoryItem, type IPaymentHistoryItems };
