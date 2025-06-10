import { Navbar } from '@/app/partials/navbar/navbar';
import { NavbarMenu } from '@/app/partials/navbar/navbar-menu';
import { MENU_SIDEBAR } from '@/app/config/menu.config';
import { useSettings } from '@/app/providers/settings-provider';
import { Container } from '@/app/components/common/container';

const PageNavbar = () => {
  const { settings } = useSettings();
  const accountMenuConfig = MENU_SIDEBAR?.['3']?.children;

  if (accountMenuConfig && settings?.layout === 'demo1') {
    return (
      <Navbar>
        <Container>
          <NavbarMenu items={accountMenuConfig} />
        </Container>
      </Navbar>
    );
  } else {
    return <></>;
  }
};

export { PageNavbar };
