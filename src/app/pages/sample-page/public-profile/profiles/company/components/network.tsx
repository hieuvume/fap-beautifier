import { RemixiconComponentType } from '@remixicon/react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface INetworkItem {
  icon: LucideIcon | RemixiconComponentType;
  link: string;
}
type INetworkItems = Array<INetworkItem>;

interface INetworkProps {
  data: INetworkItem[];
  title: string;
  className?: string;
}

const Network = ({ data, className, title }: INetworkProps) => {
  const renderItems = (item: INetworkItem, index: number) => {
    return (
      <div key={index} className="flex items-center gap-2.5">
        <span>
          <item.icon className="text-lg text-muted-foreground" size={18} />
        </span>
        <Link to="#" className="text-mono hover:text-primary-active text-sm">
          {item.link}
        </Link>
      </div>
    );
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid gap-4 mb-1">
          {data.map((item, index) => {
            return renderItems(item, index);
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export { Network, type INetworkItem, type INetworkItems, type INetworkProps };
