import { Copy, SquarePen } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/app/components/ui/table';

const AccountSettings = () => {
  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
      </CardHeader>
      <CardContent className="kt-scrollable-x-auto pb-3 p-0">
        <Table className="align-middle text-sm text-muted-foreground">
          <TableBody>
            <TableRow>
              <TableCell className="py-2 min-w-56 text-secondary-foreground font-normal">
                Email
              </TableCell>
              <TableCell className="py-2 min-w-60 w-full">
                <Link
                  to="#"
                  className="text-foreground text-sm font-normal hover:text-primary-active"
                >
                  john.doe@hexlad.io
                </Link>
              </TableCell>
              <TableCell className="py-2 min-w-28 text-center">
                <Button variant="ghost" mode="icon">
                  <SquarePen size={16} className="text-blue-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-2 text-secondary-foreground font-normal">
                Password
              </TableCell>
              <TableCell className="py-2 text-secondary-foreground  font-normal text-sm">
                Password last changed 2 months ago
              </TableCell>
              <TableCell className="text-center">
                <Button variant="ghost" mode="icon">
                  <SquarePen size={16} className="text-blue-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-secondary-foreground font-normal">
                Sign-in with
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2.5">
                  <Link
                    to="#"
                    className="flex items-center justify-center size-8 bg-background rounded-full border border-input"
                  >
                    <img
                      src={toAbsoluteUrl('/media/brand-logos/google.svg')}
                      className="size-4"
                      alt="image"
                    />
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center justify-center size-8 bg-background rounded-full border border-input"
                  >
                    <img
                      src={toAbsoluteUrl('/media/brand-logos/facebook.svg')}
                      className="size-4"
                      alt="image"
                    />
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center justify-center size-8 bg-background rounded-full border border-input"
                  >
                    <img
                      src={toAbsoluteUrl('/media/brand-logos/apple-black.svg')}
                      className="dark:hidden h-4"
                      alt="image"
                    />
                    <img
                      src={toAbsoluteUrl('/media/brand-logos/apple-white.svg')}
                      className="light:hidden h-4"
                      alt="image"
                    />
                  </Link>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Button mode="link" underlined="dashed" asChild>
                  <Link to="#">Setup</Link>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-secondary-foreground font-normal">
                Team Account
              </TableCell>
              <TableCell className="text-secondary-foreground text-sm font-normal">
                To be set
              </TableCell>
              <TableCell className="text-center">
                <Button variant="ghost" mode="icon">
                  <SquarePen size={16} className="text-blue-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-secondary-foreground font-normal">
                Social Profiles
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2.5">
                  <Link
                    to="#"
                    className="flex items-center justify-center size-8 bg-background rounded-full border border-input"
                  >
                    <img
                      src={toAbsoluteUrl('/media/brand-logos/linkedin.svg')}
                      className="size-4"
                      alt="image"
                    />
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center justify-center size-8 bg-background rounded-full border border-input"
                  >
                    <img
                      src={toAbsoluteUrl(
                        '/media/brand-logos/twitch-purple.svg',
                      )}
                      className="size-4"
                      alt="image"
                    />
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center justify-center size-8 bg-background rounded-full border border-input"
                  >
                    <img
                      src={toAbsoluteUrl('/media/brand-logos/x.svg')}
                      className="dark:hidden size-4"
                      alt="image"
                    />
                    <img
                      src={toAbsoluteUrl('/media/brand-logos/x-dark.svg')}
                      className="light:hidden size-4"
                      alt="image"
                    />
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center justify-center size-8 bg-background rounded-full border border-input"
                  >
                    <img
                      src={toAbsoluteUrl('/media/brand-logos/dribbble.svg')}
                      className="size-4"
                      alt="image"
                    />
                  </Link>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Button variant="ghost" mode="icon">
                  <SquarePen size={16} className="text-blue-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-secondary-foreground font-normal">
                Referral Link
              </TableCell>
              <TableCell className="text-foreground text-sm font-normal">
                <div className="flex items-center gap-0.5">
                  <Link
                    to="#"
                    className="text-secondary-foreground text-sm hover:text-primary-active"
                  >
                    https://studio.co/W3gvQOI35dt
                  </Link>
                  <Button variant="dim" mode="icon">
                    <Copy size={16} />
                  </Button>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Button mode="link" underlined="dashed" asChild>
                  <Link to="#">Re-create</Link>
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export { AccountSettings };
