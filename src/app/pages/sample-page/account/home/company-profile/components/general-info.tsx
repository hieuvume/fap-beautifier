import { Copy, SquarePen } from 'lucide-react';
import { Link } from 'react-router';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Switch } from '@/app/components/ui/switch';
import { Table, TableBody, TableCell, TableRow } from '@/app/components/ui/table';

const GeneralInfo = () => {
  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>General Info</CardTitle>
        <div className="flex items-center gap-2">
          <Label htmlFor="auto-update" className="text-sm">
            Public Profile
          </Label>
          <Switch defaultChecked size="sm" />
        </div>
      </CardHeader>
      <CardContent className="kt-scrollable-x-auto pb-3 p-0">
        <Table
          className="align-middle text-sm text-muted-foreground"
          id="general_info_table"
        >
          <TableBody>
            <TableRow>
              <TableCell className="min-w-56 text-secondary-foreground font-normal">
                Company Name
              </TableCell>
              <TableCell className="min-w-48 w-full text-foreground font-normal">
                Hexlab
              </TableCell>
              <TableCell className="min-w-16 text-center">
                <Button variant="ghost" mode="icon">
                  <SquarePen size={16} className="text-blue-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-secondary-foreground font-normal">
                Phone number
              </TableCell>
              <TableCell className="text-foreground font-normal">
                +1 555-1234
              </TableCell>
              <TableCell className="text-center">
                <Button variant="ghost" mode="icon">
                  <SquarePen size={16} className="text-blue-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-secondary-foreground font-normal">
                VAT number
              </TableCell>
              <TableCell className="text-foreground font-normal">
                <Badge size="md" variant="destructive" appearance="outline">
                  Missing Details
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <Button mode="link" underlined="dashed" asChild>
                  <Link to="#">Add</Link>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-secondary-foreground font-normal">
                Registration number
              </TableCell>
              <TableCell className="text-foreground font-normal">
                IYS2023A56789
              </TableCell>
              <TableCell className="text-center">
                <Button variant="ghost" mode="icon">
                  <SquarePen size={16} className="text-blue-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-secondary-foreground font-normal">
                Remote Company ID
              </TableCell>
              <TableCell className="text-foreground text-sm font-normal">
                <div className="flex items-center gap-0.5">
                  CID78901BXT2023
                  <Button variant="ghost" mode="icon">
                    <Copy size={16} />
                  </Button>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Button variant="ghost" mode="icon">
                  <SquarePen size={16} className="text-blue-500" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export { GeneralInfo };
