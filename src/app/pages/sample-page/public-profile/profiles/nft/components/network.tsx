import {
  RemixiconComponentType,
  RiFacebookCircleLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from '@remixicon/react';
import { Dribbble, LucideIcon } from 'lucide-react';
import { Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface INetworkItem {
  logo: LucideIcon | RemixiconComponentType;
  info: string;
}
type INetworkItems = Array<INetworkItem>;

const Network = () => {
  const items: INetworkItems = [
    { logo: Dribbble, info: 'jennynft' },
    { logo: RiFacebookCircleLine, info: 'nftmania' },
    { logo: RiTwitterXLine, info: 'jennynft' },
    { logo: RiYoutubeLine, info: 'jennyklabber' },
  ];

  const renderItems = (item: INetworkItem, index: number) => {
    return (
      <div key={index} className="flex items-center gap-2.5">
        <item.logo className="text-lg text-muted-foreground" size={18} />
        <Link
          to="#"
          className="text-sm leading-none text-mono hover:text-primary-active"
        >
          {item.info}
        </Link>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Network</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-y-5">
          {items.map((item, index) => {
            return renderItems(item, index);
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export { Network, type INetworkItem, type INetworkItems };
