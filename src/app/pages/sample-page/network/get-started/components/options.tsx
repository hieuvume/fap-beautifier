import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/app/components/ui/card';

interface IOptionsSubItem {
  path: string;
  title: string;
}

interface IOptionsItem {
  icon: LucideIcon;
  title: string;
  description: string;
  sub: IOptionsSubItem[];
}
type IOptionsItems = Array<IOptionsItem>;

interface IOptionsProps {
  items: IOptionsItem[];
}

const Options = ({ items }: IOptionsProps) => {
  const renderItem = (item: IOptionsItem, index: number) => {
    return (
      <Card key={index} className="p-5 lg:px-7 lg:py-6">
        <div className="flex flex-col gap-2.5">
          <item.icon className="text-2xl text-primary mb-1.5" />
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-medium leading-none text-mono">
              {item.title}
            </h3>
            <div className="text-sm text-secondary-foreground leading-5">
              {item.description}
            </div>
          </div>
          <div className="flex items-center flex-wrap">
            {item.sub.map((link, subIndex) => (
              <React.Fragment key={subIndex}>
                <Link
                  to={link.path}
                  className="text-sm font-medium text-primary hover:text-primary mb-1"
                >
                  {link.title}
                </Link>
                {subIndex <= item.sub.length - 1 && (
                  <span className="h-3.5 border-s border-s-input last-of-type:hidden mx-2 mb-1"></span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7.5">
      {items.map((item, index) => {
        return renderItem(item, index);
      })}
    </div>
  );
};

export { Options, type IOptionsItem, type IOptionsItems, type IOptionsProps };
