import {
  AccordionMenu,
  AccordionMenuGroup,
} from '@/app/components/ui/accordion-menu';
import { SearchSettingsItems } from './search-settings-items';
import { SearchSettingsGroup } from './types';

export function SearchSettings({ items }: { items: SearchSettingsGroup[] }) {
  return (
    <AccordionMenu
      type="single"
      collapsible
      classNames={{
        separator: '-mx-2 mb-2.5',
      }}
    >
      <AccordionMenuGroup>
        {items.map((group, groupIndex) => (
          <div key={groupIndex} className="pb-2.5">
            <div className="text-xs text-secondary-foreground font-medium pt-2.5 ps-3">
              <span className="ps-2">{group.title}</span>
              <div className="pt-2 pe-3">
                <SearchSettingsItems items={group.children} />
              </div>
            </div>
          </div>
        ))}
      </AccordionMenuGroup>
    </AccordionMenu>
  );
}
