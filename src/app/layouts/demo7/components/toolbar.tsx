import { Fragment, ReactNode } from 'react';
import { useIntl } from 'react-intl';
import { Link, useLocation } from 'react-router-dom';
import { MENU_SIDEBAR } from '@/app/config/menu.config';
import { MenuItem } from '@/app/config/types';
import { cn } from '@/app/lib/utils';
import { useMenu } from '@/app/hooks/use-menu';
import { Container } from '@/app/components/common/container';

export interface ToolbarHeadingProps {
  title?: string | ReactNode;
  description?: string | ReactNode;
}

function Toolbar({ children }: { children?: ReactNode }) {
  return (
    <Container>
      <div className="border-t border-border"></div>
      <div className="flex items-center justify-between flex-wrap gap-2 la:gap-5 my-5">
        {children}
      </div>
      {/* <div className="border-b border-border mb-5 lg:mb-7.5"></div> */}
    </Container>
  );
}

function ToolbarActions({ children }: { children?: ReactNode }) {
  return <div className="flex items-center flex-wrap gap-2.5">{children}</div>;
}

function ToolbarBreadcrumbs() {
  const { pathname } = useLocation();
  const { getBreadcrumb, isActive } = useMenu(pathname);
  const items: MenuItem[] = getBreadcrumb(MENU_SIDEBAR);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const active = item.path ? isActive(item.path) : false;

        return (
          <Fragment key={index}>
            {item.path ? (
              <Link
                to={item.path}
                className={cn(
                  'flex items-center gap-1',
                  active
                    ? 'text-mono'
                    : 'text-secondary-foreground hover:text-primary',
                )}
              >
                {getIntlTitle(item.title)}
              </Link>
            ) : (
              <span
                className={cn(
                  isLast ? 'text-mono' : 'text-secondary-foreground',
                )}
              >
                {getIntlTitle(item.title)}
              </span>
            )}
            {!isLast && <span className="text-muted-foreground">/</span>}
          </Fragment>
        );
      })}
    </div>
  );
}

function getIntlTitle(title: string | ReactNode, item?: MenuItem) {
  const intl = useIntl();
  if (typeof title === 'string' && title) {
    return intl.formatMessage({ id: title });
  }
  if (typeof item?.title === 'string' && item.title) {
    return intl.formatMessage({ id: item.title });
  }
  return title;
}

function ToolbarHeading({ title = '' }: ToolbarHeadingProps) {
  const { pathname } = useLocation();
  const { getCurrentItem } = useMenu(pathname);
  const item = getCurrentItem(MENU_SIDEBAR);

  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-medium text-lg text-mono">
        {getIntlTitle(title, item)}
      </h1>
      <ToolbarBreadcrumbs />
    </div>
  );
}

export { Toolbar, ToolbarActions, ToolbarBreadcrumbs, ToolbarHeading };
