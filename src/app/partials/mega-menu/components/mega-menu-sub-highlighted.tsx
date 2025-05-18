import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuConfig } from '@/app/config/types';
import { cn } from '@/app/lib/utils';
import { useMenu } from '@/app/hooks/use-menu';
import { Badge } from '@/app/components/ui/badge';
import { NavigationMenuLink } from '@/app/components/ui/navigation-menu';

const MegaMenuSubHighlighted = (items: MenuConfig) => {
  const { pathname } = useLocation();
  const { isActive } = useMenu(pathname);

  const buildItems = (items: MenuConfig): ReactNode => {
    return items.map((item, index) => {
      return (
        <NavigationMenuLink key={index} asChild>
          <Link
            key={index}
            {...(isActive(item.path) && { 'data-active': true })}
            to={item.path || ''}
            className={cn(
              'border border-transparent hover:border-border hover:bg-background',
              'flex flex-row items-center gap-2.5 px-2.5 py-2 rounded-md text-sm',
              '[&_svg]:text-muted-foreground hover:[&_svg]:text-primary [&[data-active=true]_svg]:text-primary',
            )}
          >
            {item.icon && <item.icon className="size-4" />}

            {item.title}

            {item.disabled && (
              <Badge variant="secondary" size="sm">
                Soon
              </Badge>
            )}

            {item.badge && (
              <Badge variant="primary" size="sm" appearance="outline">
                {item.badge}
              </Badge>
            )}
          </Link>
        </NavigationMenuLink>
      );
    });
  };

  return buildItems(items);
};

export { MegaMenuSubHighlighted };
