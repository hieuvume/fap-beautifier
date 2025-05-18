import { Fragment } from 'react';
import { PageNavbar } from '@/app/pages/sample-page/account';
import {
  Toolbar,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/app/partials/common/toolbar';
import { Link } from 'react-router-dom';
import { useSettings } from '@/app/providers/settings-provider';
import { Button } from '@/app/components/ui/button';
import { Container } from '@/app/components/common/container';
import { AccountGetStartedContent } from '.';

export function AccountGetStartedPage() {
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
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span className="text-foreground font-medium">
                    Jayson Tatum
                  </span>
                  <Link
                    to="mailto:jaytatum@ktstudio.com"
                    className="text-secondary-foreground hover:text-primary"
                  >
                    jaytatum@ktstudio.com
                  </Link>
                  <span className="size-0.75 bg-mono/50 rounded-full"></span>
                  <Button mode="link" underlined="dashed" asChild>
                    <Link to="/account/members/team-info">Personal Info</Link>
                  </Button>
                </div>
              </ToolbarDescription>
            </ToolbarHeading>
          </Toolbar>
        </Container>
      )}
      <Container>
        <AccountGetStartedContent />
      </Container>
    </Fragment>
  );
}
