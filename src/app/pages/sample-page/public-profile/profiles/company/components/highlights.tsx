import { ReactElement } from 'react';
import { Link } from 'react-router';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/app/components/ui/table';

interface IHighlightsItem {
  label: string;
  info: ReactElement | string;
  type?: number;
}
type IHighlightsItems = Array<IHighlightsItem>;

const Highlights = () => {
  const items: IHighlightsItems = [
    { label: 'Locations:', info: '79', type: 1 },
    { label: 'Founded:', info: '2011', type: 2 },
    {
      label: 'Status:',
      info: (
        <Badge size="md" variant="success" appearance="outline">
          Subscribed
        </Badge>
      ),
    },
    { label: 'Area:', info: 'Worldwide' },
    {
      label: 'CEO:',
      info: (
        <Button mode="link" asChild>
          <Link to="#">Luis von Ahn</Link>
        </Button>
      ),
    },
    { label: 'Sector:', info: 'Online Education' },
  ];

  const renderItems = (item: IHighlightsItem, index: number) => {
    return (
      <TableRow key={index} className="border-0">
        <TableCell className="text-sm text-secondary-foreground pb-3 pe-4 lg:pe-10 py-2">
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
        <CardTitle>Highlights</CardTitle>
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

export { Highlights, type IHighlightsItem, type IHighlightsItems };
