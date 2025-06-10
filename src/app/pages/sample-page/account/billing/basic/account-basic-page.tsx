import { Fragment } from 'react';
import { PageNavbar } from '@/app/pages/sample-page/account';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/app/partials/common/toolbar';
import { useSettings } from '@/app/providers/settings-provider';
import { Button } from '@/app/components/ui/button';
import { Container } from '@/app/components/common/container';
import { AccountBasicContent } from '.';

export function AccountBasicPage() {
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
                Central Hub for Personal Customization
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <Button variant="outline">Order History</Button>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}
      <Container>
        <AccountBasicContent />
      </Container>
    </Fragment>
  );
}
