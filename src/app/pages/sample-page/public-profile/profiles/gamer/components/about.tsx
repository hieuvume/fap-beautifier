import { ReactElement } from 'react';
import { Badge } from '@/app/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/app/components/ui/table';

interface IAboutItem {
  label: string;
  info: ReactElement | string;
  type?: number;
}
type IAboutItems = Array<IAboutItem>;

const About = () => {
  const items: IAboutItems = [
    { label: 'Joined:', info: '26 Aug, 2021', type: 1 },
    { label: 'Location:', info: 'Porto, EU', type: 2 },
    {
      label: 'Level:',
      info: (
        <Badge size="md" variant="success" appearance="outline">
          Pro
        </Badge>
      ),
    },
  ];

  const renderItem = (item: IAboutItem, index: number) => {
    return (
      <TableRow key={index} className="border-0">
        <TableCell className="text-sm text-secondary-foreground pb-3 pe-4 lg:pe-12 py-2">
          {item.label}
        </TableCell>
        <TableCell className="text-sm text-mono pb-3 py-2">
          {item.type === 1
            ? item.info
            : item.type === 2
              ? item.info
              : item.info}
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>About</CardTitle>
      </CardHeader>
      <CardContent className="pb-7 pt-4">
        <Table className="mb-1.5">
          <TableBody>
            {items.map((item, index) => {
              return renderItem(item, index);
            })}
          </TableBody>
        </Table>
        <p className="text-sm text-foreground leading-5.5">
          Experienced and creative professional with a passion great as a
          commitment to best excellence.
        </p>
      </CardContent>
    </Card>
  );
};

export { About, type IAboutItem, type IAboutItems };
