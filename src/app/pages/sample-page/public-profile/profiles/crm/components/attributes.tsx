import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/app/components/ui/table';

interface IAttributesItem {
  label: string;
  info: string;
}
type IAttributesItems = Array<IAttributesItem>;

const Attributes = () => {
  const items: IAttributesItems = [
    { label: 'customer_id:', info: 'CUST567' },
    { label: 'c_name:', info: 'jenny' },
    { label: 'license_id:', info: 'LIC123' },
    { label: 'log_id:', info: 'CUST567' },
    { label: 'resv_code:', info: 'CS345' },
    { label: 'orders_io:', info: 'JENNYTIME ' },
  ];

  const renderItem = (item: IAttributesItem, index: number) => {
    return (
      <TableRow key={index} className="border-0">
        <TableCell className="text-sm text-secondary-foreground pb-3.5 pe-4 lg:pe-6 py-2">
          {item.label}
        </TableCell>
        <TableCell className="text-sm text-mono pb-3 py-2">
          {item.info}
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Attributes</CardTitle>
      </CardHeader>
      <CardContent className="pt-3.5 pb-1">
        <Table>
          <TableBody>
            {items.map((item, index) => {
              return renderItem(item, index);
            })}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-center">
        <Button mode="link" underlined="dashed" asChild>
          <Link to="/network/user-table/store-clients">All Attributes</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { Attributes, type IAttributesItem, type IAttributesItems };
