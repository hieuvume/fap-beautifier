import { EllipsisVertical } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import {
  AccordionMenu,
  AccordionMenuGroup,
  AccordionMenuItem,
} from '@/app/components/ui/accordion-menu';
import { Badge, BadgeDot } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { SearchUsersItem } from './types';

export function SearchUsers({
  items,
  more,
}: {
  items: SearchUsersItem[];
  more?: boolean;
}) {
  return (
    <AccordionMenu
      type="single"
      collapsible
      classNames={{
        separator: '-mx-2 mb-2.5',
      }}
    >
      <AccordionMenuGroup>
        <div className="grid gap-2 m-2">
          {items.map((item, index) => (
            <AccordionMenuItem key={index} value={item.name}>
              <div className="menu-link flex justify-between gap-2">
                {/* User avatar and info */}
                <div className="flex items-center gap-2.5">
                  <img
                    src={toAbsoluteUrl(`/media/avatars/${item.avatar}`)}
                    className="rounded-full size-9 shrink-0"
                    alt={item.name}
                  />
                  <div className="flex flex-col">
                    <Link
                      to="#"
                      className="text-sm font-semibold text-mono hover:text-primary-active mb-px"
                    >
                      {item.name}
                    </Link>
                    <span className="text-sm font-normal text-muted-foreground">
                      {item.email} connections
                    </span>
                  </div>
                </div>

                {/* Status badge and action button */}
                <div className="flex items-center gap-2.5">
                  <Badge
                    size="md"
                    variant={item.color}
                    appearance="outline"
                    shape="circle"
                  >
                    <BadgeDot /> {item.label}
                  </Badge>

                  <Button variant="ghost" mode="icon">
                    <EllipsisVertical />
                  </Button>
                </div>
              </div>
            </AccordionMenuItem>
          ))}
        </div>
        {/* Conditional "Go to Users" button */}
        {!more || (
          <AccordionMenuItem className="px-4 pt-2" value={''}>
            <Button variant="outline" className="mx-auto w-full max-w-full">
              Go to Users
            </Button>
          </AccordionMenuItem>
        )}
      </AccordionMenuGroup>
    </AccordionMenu>
  );
}
