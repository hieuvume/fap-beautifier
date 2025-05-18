import { ReactElement } from 'react';
import { Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/app/components/ui/table';

interface IAboutTable {
  status: string;
  info: ReactElement | string;
}
type IAboutTables = Array<IAboutTable>;

const About = () => {
  const tables: IAboutTables = [
    { status: 'Age:', info: '32' },
    { status: 'City:', info: 'Amsterdam' },
    { status: 'State:', info: 'North Holland' },
    { status: 'Country:', info: 'Netherlands' },
    { status: 'Postcode:', info: '1092 NL' },
    { status: 'Phone:', info: '+31 6 1234 56 78' },
    {
      status: 'Email:',
      info: (
        <Link to="#" className="text-foreground hover:text-primary-active">
          jenny@ktstudio.com
        </Link>
      ),
    },
  ];

  const renderTable = (table: IAboutTable, index: number) => {
    return (
      <TableRow key={index} className="border-0">
        <TableCell className="text-sm text-secondary-foreground py-2">
          {table.status}
        </TableCell>
        <TableCell className="text-sm text-mono py-2">{table.info}</TableCell>
      </TableRow>
    );
  };

  return (
    <Card>
      <CardHeader className="ps-8">
        <CardTitle>About</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {tables.map((table, index) => {
              return renderTable(table, index);
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export { About, type IAboutTable, type IAboutTables };
