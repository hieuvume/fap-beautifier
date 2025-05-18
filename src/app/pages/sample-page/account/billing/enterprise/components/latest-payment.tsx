import { Download } from 'lucide-react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/app/components/ui/table';

interface ILatestPaymentItem {
  status: string;
  logo?: boolean;
  info: string;
}
type ILatestPaymentItems = Array<ILatestPaymentItem>;

const LatestPayment = () => {
  const tables: ILatestPaymentItems = [
    { status: 'Typ of Plan', info: 'Cloud One Enterprise' },
    { status: 'Payment Date', info: '6 Aug, 2024' },
    { status: 'Card used to pay:', logo: true, info: 'Ending 3604' },
    { status: 'Total Payment:', info: '$24.00' },
  ];

  const renderItem = (table: ILatestPaymentItem, index: number) => {
    return (
      <TableRow key={index} className="border-0">
        <TableCell className="text-sm text-secondary-foreground min-w-36 pb-5 pe-6 py-2">
          {table.status}
        </TableCell>
        <TableCell className="flex items-center gap-2.5 text-sm text-foreground py-2">
          {table.logo && (
            <img
              src={toAbsoluteUrl('/media/brand-logos/visa.svg')}
              className="w-10 shrink-0"
              alt="image"
            />
          )}
          {table.info}
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Card className="grow">
      <CardHeader>
        <CardTitle>Latest Payment</CardTitle>
        <Button variant="outline">
          <Download size={20} />
          Download PDF
        </Button>
      </CardHeader>
      <CardContent className="pt-4 pb-3 p-0">
        <Table>
          <TableBody>
            {tables.map((table, index) => {
              return renderItem(table, index);
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export { LatestPayment, type ILatestPaymentItem, type ILatestPaymentItems };
