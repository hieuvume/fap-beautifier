import { MenuConfig, MenuItem } from '@/app/config/types';
import { MegaMenuSubDefault } from './components';
import { useIntl } from 'react-intl';

const MegaMenuSubInformation = ({ items }: { items: MenuConfig }) => {
  const informationItem = items[3];
  const intl = useIntl();

  return (
    <div className="w-full gap-0 lg:w-[775px]">
      <div className="pt-4 pb-2 lg:p-7.5">
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-8">
          {informationItem.children?.map((item: MenuItem, index) => {
            return (
              <div key={`profile-${index}`} className="flex flex-col">
                <h3 className="text-sm text-foreground font-semibold leading-none ps-2.5 mb-3 lg:mb-4 border-b border-gray-200 pb-2">
                  {intl.formatMessage({ id: item.title })}
                </h3>
                <div className="grid lg:grid-cols-1 gap-2">
                  {item.children?.map((item: MenuItem, index) => {
                    return (
                      <div key={`profile-sub-${index}`} className="space-y-0.5">
                        {item.children && MegaMenuSubDefault(item.children)}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { MegaMenuSubInformation };
