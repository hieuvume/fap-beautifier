import { Fragment } from 'react';
import { PageNavbar } from '@/app/pages/sample-page/account';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/app/partials/common/toolbar';
import { Link } from 'react-router-dom';
import { useSettings } from '@/app/providers/settings-provider';
import { Button } from '@/app/components/ui/button';
import { Container } from '@/app/components/common/container';
import { AccountCurrentSessionsContent } from '.';

export function AccountCurrentSessionsPage() {
  const { settings } = useSettings();

  return (
    <Fragment>
      <PageNavbar />
      {settings?.layout === 'demo1' && (
        <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>
                Authorized Devices for Report Access
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <Button variant="outline">
                <Link to="/account/security/security-log">Activity Log</Link>
              </Button>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}
      <Container>
        <AccountCurrentSessionsContent />
      </Container>
    </Fragment>
  );
}
