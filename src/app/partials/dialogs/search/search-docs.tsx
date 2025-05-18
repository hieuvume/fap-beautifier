import { EllipsisVertical } from 'lucide-react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import {
  AccordionMenu,
  AccordionMenuGroup,
  AccordionMenuItem,
} from '@/app/components/ui/accordion-menu';
import { Button } from '@/app/components/ui/button';
import { SearchDocsItem } from './types';

export function SearchDocs({ items }: { items: SearchDocsItem[] }) {
  // Example items moved inside the component
  return (
    <AccordionMenu
      type="single"
      collapsible
      classNames={{
        separator: '-mx-2 mb-2.5',
      }}
    >
      <AccordionMenuGroup>
        <div className="grid gap-2 px-2">
          {items.map((item, index) => (
            <AccordionMenuItem key={index} value={item.desc}>
              <div className="menu-link flex items-center">
                <div className="flex items-center grow gap-2.5">
                  <img
                    src={toAbsoluteUrl(`/media/file-types/${item.image}`)}
                    alt={item.desc}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-mono cursor-pointer hover:text-primary mb-px">
                      {item.desc}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {item.date}
                    </span>
                  </div>
                </div>

                <Button variant="ghost" mode="icon">
                  <EllipsisVertical />
                </Button>
              </div>
            </AccordionMenuItem>
          ))}
        </div>
        <AccordionMenuItem className="px-4 pt-2.5" value={''}>
          <Button variant="outline" className="mx-auto w-full max-w-full">
            Go to Users
          </Button>
        </AccordionMenuItem>
      </AccordionMenuGroup>
    </AccordionMenu>
  );
}
