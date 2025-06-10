import { SquarePen } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Switch } from '@/app/components/ui/switch';
import { Table, TableBody, TableCell, TableRow } from '@/app/components/ui/table';

const Work = () => {
  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>Work</CardTitle>
        <div className="flex items-center gap-2">
          <Label htmlFor="auto-update" className="text-sm">
            Available now
          </Label>
          <Switch defaultChecked size="sm" />
        </div>
      </CardHeader>
      <CardContent className="kt-scrollable-x-auto pb-3 p-0">
        <Table className="align-middle text-sm text-muted-foreground">
          <TableBody>
            <TableRow>
              <TableCell className="py-2 min-w-36text-secondary-foreground font-normal">
                Language
              </TableCell>
              <TableCell className="py-2 min-w-72 w-full text-foreground font-normal">
                English{' '}
                <span className="text-secondary-foreground font-normal">
                  -Fluent
                </span>
              </TableCell>
              <TableCell className="py-2 text-end min-w-24">
                <Button variant="ghost" mode="icon">
                  <SquarePen size={16} className="text-blue-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-2 text-secondary-foreground font-normal">
                Hourly Rate
              </TableCell>
              <TableCell className="py-2 text-foreground font-normal">
                $28 / hour
              </TableCell>
              <TableCell className="py-2 text-end">
                <Button variant="ghost" mode="icon">
                  <SquarePen size={16} className="text-blue-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-2text-secondary-foreground font-normal">
                Avaibilaty
              </TableCell>
              <TableCell className="py-2 text-foreground font-normal">
                32 hours a week
              </TableCell>
              <TableCell className="py-2 text-end">
                <Button variant="ghost" mode="icon">
                  <SquarePen size={16} className="text-blue-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-3 text-secondary-foreground font-normal">
                Skills
              </TableCell>
              <TableCell className="py-3 text-secondary-foreground">
                <div className="flex flex-wrap gap-2.5">
                  <Badge variant="secondary">Web Design</Badge>
                  <Badge variant="secondary">Code Review</Badge>
                  <Badge variant="secondary">noCode</Badge>
                  <Badge variant="secondary">UX</Badge>
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">Webflow</Badge>
                  <Badge variant="secondary">AI</Badge>
                  <Badge variant="secondary">Management</Badge>
                </div>
              </TableCell>
              <TableCell className="py-3 text-end">
                <Button variant="ghost" mode="icon">
                  <SquarePen size={16} className="text-blue-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-4 text-secondary-foreground font-normal">
                About
              </TableCell>
              <TableCell className="py-4 text-foreground font-normal">
                We're open to partnerships, guest posts, and <br />
                more. Join us to share your insights and grow <br />
                your audience.
              </TableCell>
              <TableCell className="py-4 text-end">
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

export { Work };
