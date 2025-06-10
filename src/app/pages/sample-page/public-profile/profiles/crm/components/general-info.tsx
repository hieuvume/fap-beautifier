import { ReactElement } from 'react';
import { Badge } from '@/app/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/app/components/ui/table';

interface IGeneralInfoItem {
  label: string;
  info: ReactElement | string;
  type?: number;
}
type IGeneralInfoItems = Array<IGeneralInfoItem>;

const GeneralInfo = () => {
  const items: IGeneralInfoItems = [
    { label: 'Phone:', info: '+31 6 12345678', type: 1 },
    { label: 'Email:', info: 'jenny@studio.com', type: 2 },
    {
      label: 'Status:',
      info: (
        <Badge size="md" variant="success" appearance="outline">
          Subscribed
        </Badge>
      ),
    },
    { label: 'Type:', info: 'Wholesale' },
    { label: 'Encryption:', info: 'Strong' },
    { label: 'Last Order:', info: 'Today at 13:06' },
    { label: 'Signed Up:', info: '2 months ago' },
  ];

  const renderItems = (item: IGeneralInfoItem, index: number) => {
    return (
      <TableRow key={index} className="border-0">
        <TableCell className="text-sm text-secondary-foreground pb-3 pe-4 lg:pe-8 py-2">
          {item.label}
        </TableCell>
        <TableCell className="text-sm text-mono pb-3 py-2">
          {item.type === 1 ? (
            <span>{item.info}</span>
          ) : item.type === 2 ? (
            <span>{item.info}</span>
          ) : (
            item.info
          )}
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>General Info</CardTitle>
      </CardHeader>
      <CardContent className="pt-3.5 pb-3.5">
        <Table>
          <TableBody>
            {items.map((item, index) => {
              return renderItems(item, index);
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export { GeneralInfo, type IGeneralInfoItem, type IGeneralInfoItems };
