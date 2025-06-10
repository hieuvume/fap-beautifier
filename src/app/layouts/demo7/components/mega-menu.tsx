import { MegaMenuSubInformation } from '@/app/partials/mega-menu/mega-menu-sub-information';
import { MegaMenuSubRegulations } from '@/app/partials/mega-menu/mega-menu-sub-regulations';
import { MegaMenuSubReport } from '@/app/partials/mega-menu/mega-menu-sub-report';
import { MegaMenuSubApplications } from '@/app/partials/mega-menu/mega-menu-sub-applications';
import { MegaMenuSubCoursera } from '@/app/partials/mega-menu/mega-menu-sub-coursera';
import { Link, useLocation } from 'react-router-dom';
import { MENU_MEGA } from '@/app/config/menu.config';
import { cn } from '@/app/lib/utils';
import { useMenu } from '@/app/hooks/use-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/app/components/ui/navigation-menu';
import { useIntl } from 'react-intl';

export function MegaMenu() {
  const { pathname } = useLocation();
  const { isActive, hasActiveChild } = useMenu(pathname);
  const homeItem = MENU_MEGA[0];
  const newsItem = MENU_MEGA[1];
  const publicProfilesItem = MENU_MEGA[2];
  const myAccountItem = MENU_MEGA[3];
  const networkItem = MENU_MEGA[4];
  const storeItem = MENU_MEGA[6];
  const authItem = MENU_MEGA[5];
  const linkClass = `
    text-sm text-secondary-foreground font-medium rounded-none px-0 border-b border-transparent
    hover:text-primary hover:bg-transparent 
    focus:text-primary focus:bg-transparent 
    data-[active=true]:text-mono data-[active=true]:bg-transparent data-[active=true]:border-mono
    data-[state=open]:text-mono data-[state=open]:bg-transparent
  `;
  const intl = useIntl();

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-7.5">
        {/* Home Item */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              to={homeItem.path || '/'}
              className={cn(linkClass)}
              data-active={isActive(homeItem.path) || undefined}
            >
              {intl.formatMessage({ id: homeItem.title })}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* News Item */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              to={newsItem.path || '/'}
              className={cn(linkClass)}
              data-active={isActive(newsItem.path) || undefined}
            >
              {intl.formatMessage({ id: newsItem.title })}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Public Profiles Item */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(linkClass)}
            data-active={
              hasActiveChild(publicProfilesItem.children) || undefined
            }
          >
            {intl.formatMessage({ id: publicProfilesItem.title })}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-0">
            <MegaMenuSubApplications items={MENU_MEGA} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* My Account Item */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(linkClass)}
            data-active={hasActiveChild(myAccountItem.children) || undefined}
          >
            {intl.formatMessage({ id: myAccountItem.title })}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-0">
            <MegaMenuSubInformation items={MENU_MEGA} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Network Item */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(linkClass)}
            data-active={
              hasActiveChild(networkItem.children || []) || undefined
            }
          >
            {intl.formatMessage({ id: networkItem.title })}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-0">
            <MegaMenuSubReport items={MENU_MEGA} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Store Item */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(linkClass)}
            data-active={hasActiveChild(storeItem.children || []) || undefined}
          >
            {intl.formatMessage({ id: storeItem.title })}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-0">
            <MegaMenuSubCoursera items={MENU_MEGA} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Authentication Item */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(linkClass)}
            data-active={hasActiveChild(authItem.children) || undefined}
          >
            {intl.formatMessage({ id: authItem.title })}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-0">
            <MegaMenuSubRegulations items={MENU_MEGA} />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
