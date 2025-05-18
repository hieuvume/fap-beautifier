import {
  RemixiconComponentType,
  RiFacebookCircleLine,
  RiYoutubeLine,
} from '@remixicon/react';
import {
  BriefcaseBusiness,
  Crown,
  LucideIcon,
  Luggage,
  Mail,
  Volleyball,
} from 'lucide-react';
import { Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface ISummaryItem {
  icon: LucideIcon | RemixiconComponentType;
  info: string;
}
type ISummaryItems = Array<ISummaryItem>;

interface ISummaryProps {
  title: string;
}

const Summary = ({ title }: ISummaryProps) => {
  const items: ISummaryItems = [
    { icon: Luggage, info: 'KeenThemes' },
    { icon: Crown, info: 'Author' },
    { icon: BriefcaseBusiness, info: 'UI/UX Desiger' },
    { icon: Mail, info: 'enny@kteam.com' },
    { icon: Volleyball, info: 'https://keenthemes.com' },
    { icon: RiFacebookCircleLine, info: 'keenthemes' },
    { icon: RiYoutubeLine, info: 'keenthemes' },
  ];

  const renderItem = (item: ISummaryItem, index: number) => {
    return (
      <div key={index} className="flex items-center gap-2.5">
        <item.icon className="text-base text-muted-foreground" size={16} />
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
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground leading-5.5 mb-4">
          Experienced and creative professional with a passion great as for
          problem-solving and a commitment to excellence.
        </p>
        <div className="grid gap-y-5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export { Summary, type ISummaryItem, type ISummaryItems, type ISummaryProps };
