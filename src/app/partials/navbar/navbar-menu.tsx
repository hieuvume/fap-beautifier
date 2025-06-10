import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MenuConfig } from '@/app/config/types';
import { cn } from '@/app/lib/utils';
import { useMenu } from '@/app/hooks/use-menu';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/app/components/ui/menubar';

const NavbarMenu = ({ items }: { items: MenuConfig }) => {
  const { pathname } = useLocation();
  const { isActive, hasActiveChild } = useMenu(pathname);

  const buildMenu = (items: MenuConfig) => {
    return items.map((item, index) => {
      if (item.children) {
        return (
          <MenubarMenu key={index}>
            <MenubarTrigger
              className={cn(
                'flex items-center gap-1.5 px-3 py-3.5 text-sm text-secondary-foreground',
                'rounded-none border-b-2 border-transparent bg-transparent!',
                'hover:text-primary hover:bg-transparent',
                'focus:text-primary focus:bg-transparent',
                'data-[state=open]:bg-transparent data-[state=open]:text-primary',
                'data-[here=true]:text-primary data-[here=true]:border-primary',
              )}
              data-active={isActive(item.path) || undefined}
              data-here={hasActiveChild(item.children) || undefined}
            >
              {item.title}
              <ChevronDown className="ms-auto size-3.5" />
            </MenubarTrigger>
            <MenubarContent className="min-w-[175px]">
              {buildSubMenu(item.children)}
            </MenubarContent>
          </MenubarMenu>
        );
      } else {
        return (
          <MenubarMenu key={index}>
            <MenubarTrigger
              asChild
              className={cn(
                'flex items-center px-2 py-3.5 text-sm text-secondary-foreground px-3',
                'rounded-none border-b-2 border-transparent bg-transparent!',
                'hover:text-primary hover:bg-transparent',
                'focus:text-primary focus:bg-transparent',
                'data-[active=true]:text-primary data-[active=true]:border-primary',
              )}
            >
              <Link
                to={item.path || ''}
                data-active={isActive(item.path) || undefined}
                data-here={hasActiveChild(item.children) || undefined}
              >
                {item.title}
              </Link>
            </MenubarTrigger>
          </MenubarMenu>
        );
      }
    });
  };

  const buildSubMenu = (items: MenuConfig) => {
    return items.map((item, index) => {
      if (item.children) {
        return (
          <MenubarSub key={index}>
            <MenubarSubTrigger
              data-active={isActive(item.path) || undefined}
              data-here={hasActiveChild(item.children) || undefined}
            >
              <span>{item.title}</span>
            </MenubarSubTrigger>
            <MenubarSubContent className="min-w-[175px]">
              {buildSubMenu(item.children)}
            </MenubarSubContent>
          </MenubarSub>
        );
      } else {
        return (
          <MenubarItem
            key={index}
            asChild
            data-active={isActive(item.path) || undefined}
            data-here={hasActiveChild(item.children) || undefined}
          >
            <Link to={item.path || ''}>{item.title}</Link>
          </MenubarItem>
        );
      }
    });
  };

  return (
    <div className="grid">
      <div className="scrollable-x-auto">
        <Menubar className="flex items-stretch gap-3 border-none bg-transparent p-0 h-auto">
          {buildMenu(items)}
        </Menubar>
      </div>
    </div>
  );
};

export { NavbarMenu };
