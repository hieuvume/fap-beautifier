import { SquarePen } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/app/components/ui/table';

interface IDetailsItem {
  status: string;
  info: string;
}
type IDetailsItems = Array<IDetailsItem>;

const Details = () => {
  const tables: IDetailsItems = [
    { status: 'Company Name', info: 'KeenThemes' },
    {
      status: 'Address',
      info: 'Keizersgracht 136, 1015 CW Amsterdam, Netherlands',
    },
    { status: 'Contact', info: 'Jason Tatum' },
    { status: 'VAT ID', info: 'NL123456789B01' },
  ];

  const renderItem = (table: IDetailsItem, index: number) => {
    return (
      <TableRow key={index} className="border-0">
        <TableCell className="text-sm text-secondary-foreground min-w-36 pb-5 pe-6 py-2">
          {table.status}
        </TableCell>
        <TableCell className="text-sm text-foreground pb-5 py-2">
          {table.info}
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing Details</CardTitle>
        <Button variant="outline">
          <SquarePen size={16} />
          Edit Billing
        </Button>
      </CardHeader>
      <CardContent className="pt-4 pb-2">
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

export { Details, type IDetailsItem, type IDetailsItems };
