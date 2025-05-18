import { Fragment } from 'react';
import { PageNavbar } from '@/app/pages/sample-page/account';
import {
  Toolbar,
  ToolbarActions,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/app/partials/common/toolbar';
import { Link } from 'react-router-dom';
import { useSettings } from '@/app/providers/settings-provider';
import { Button } from '@/app/components/ui/button';
import { Container } from '@/app/components/common/container';
import { AccountSecurityLogContent } from '.';

export function AccountSecurityLogPage() {
  const { settings } = useSettings();

  return (
    <Fragment>
      <PageNavbar />
      {settings?.layout === 'demo1' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <div className="flex flex-wrap items-center gap-2 font-medium">
                <span className="text-sm text-secondary-foreground">
                  Authorized Devices for Report Access
                </span>
                <span className="size-0.75 bg-mono/50 rounded-full"></span>
                <Button mode="link" underlined="dashed" asChild>
                  <Link to="#">Unlink All Devices</Link>
                </Button>
              </div>
            </ToolbarHeading>
            <ToolbarActions>
              <Button variant="outline">
                <Link to="#">Security Overview</Link>
              </Button>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}
      <Container>
        <AccountSecurityLogContent />
      </Container>
    </Fragment>
  );
}
