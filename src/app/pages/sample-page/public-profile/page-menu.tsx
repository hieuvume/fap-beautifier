import { NavbarMenu } from '@/app/partials/navbar/navbar-menu';
import { MENU_SIDEBAR } from '@/app/config/menu.config';

const PageMenu = () => {
  const accountMenuConfig = MENU_SIDEBAR?.['2']?.children;

  if (accountMenuConfig) {
    return <NavbarMenu items={accountMenuConfig} />;
  } else {
    return <></>;
  }
};

export { PageMenu };
