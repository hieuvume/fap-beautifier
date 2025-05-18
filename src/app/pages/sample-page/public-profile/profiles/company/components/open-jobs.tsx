import { ChartLine, LucideIcon, Milk, Rocket, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

interface IOpenJobsItem {
  icon: LucideIcon;
  link: string;
  desc: string;
  price: string;
}
type IOpenJobsItems = Array<IOpenJobsItem>;

const OpenJobs = () => {
  const items: IOpenJobsItems = [
    {
      icon: ChartLine,
      link: 'Data Science',
      desc: 'Data Science Ninja',
      price: '$80,000 - $110,000',
    },
    {
      icon: Rocket,
      link: 'Exploration',
      desc: 'Galactic Guide Writer',
      price: '$45,000 - $60,000',
    },
    {
      icon: Milk,
      link: 'Drinking Arts',
      desc: 'Taste',
      price: '$40,000 - $55,000',
    },
    {
      icon: Zap,
      link: 'Film Production',
      desc: 'Zombie Makeup Artist',
      price: ' $55,000 - $75,000',
    },
  ];

  const renderItems = (item: IOpenJobsItem, index: number) => {
    return (
      <div key={index} className="flex align-start gap-3.5">
        <div className="flex items-center justify-center w-[1.875rem] h-[1.875rem] bg-accent/60 rounded-lg border border-input">
          <item.icon
            className="text-base text-secondary-foreground"
            size={16}
          />
        </div>
        <div className="flex flex-col">
          <Link to="#" className="text-sm font-semibold leading-none link mb-1">
            {item.link}
          </Link>
          <span className="text-sm font-medium text-mono">{item.desc}</span>
          <span className="text-xs text-secondary-foreground">
            {item.price}
          </span>
        </div>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Open Jobs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-5">
          {items.map((item, index) => {
            return renderItems(item, index);
          })}
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button mode="link" underlined="dashed" asChild>
          <Link to="/public-profile/works">View & Apply</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { OpenJobs, type IOpenJobsItem, type IOpenJobsItems };
