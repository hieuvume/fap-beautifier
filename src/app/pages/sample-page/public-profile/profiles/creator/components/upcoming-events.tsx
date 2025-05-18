import React from 'react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface IUpcomingEventsItem {
  month: string;
  date: string;
  image: string;
  label: string;
  title: string;
  desc: string;
}
type IUpcomingEventsItems = Array<IUpcomingEventsItem>;

const UpcomingEvents = () => {
  const items: IUpcomingEventsItems = [
    {
      month: 'Feb',
      date: '21',
      image: '7.jpg',
      label: 'Webinar Series',
      title: 'Digital Marketing Mastery Series',
      desc: 'Join our comprehensive webinars to master the art of digital marketing strategies.',
    },
    {
      month: 'Apr',
      date: '02',
      image: '8.jpg',
      label: 'Photo Workshop',
      title: 'Nature Photography Immersion',
      desc: 'Enhance your nature photography skills in a hands-on workshop guided by experienced photographers.',
    },
    {
      month: 'Aug',
      date: '29',
      image: '9.jpg',
      label: 'Tech Conference',
      title: 'Future Tech Exploration',
      desc: 'Delve into tech innovations and emerging trends at this influential conference for tech enthusiasts.',
    },
  ];

  const renderItem = (item: IUpcomingEventsItem, index: number) => {
    return (
      <React.Fragment key={index}>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex items-center gap-5 shrink-0">
            <div className="border border-orange-200 dark:border-orange-950 rounded-lg">
              <div className="flex items-center justify-center border-b border-orange-200 bg-orange-100 dark:border-orange-950 dark:bg-orange-950/30 rounded-t-lg">
                <span className="text-sm text-orange-400 fw-medium p-2">
                  {item.month}
                </span>
              </div>
              <div className="flex items-center justify-center size-12">
                <span className="font-medium text-foreground text-xl tracking-tight">
                  {item.date}
                </span>
              </div>
            </div>
            <img
              src={toAbsoluteUrl(`/media/images/600x400/${item.image}`)}
              className="rounded-lg max-h-[120px] max-w-full"
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Link
              to="#"
              className="text-sm font-medium text-orange-400 leading-[14px] hover:text-primary-active mb-px"
            >
              {item.label}
            </Link>
            <Link
              to="#"
              className="text-base font-medium hover:text-primary text-mono leading-4"
            >
              {item.title}
            </Link>
            <p className="text-sm text-foreground leading-[22px]">
              {item.desc}
            </p>
          </div>
        </div>
        <div className="not-last:border-b border-b-border"></div>
      </React.Fragment>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
        <Button mode="link" underlined="dashed" asChild>
          <Link to="/public-profile/works">View All</Link>
        </Button>
      </CardHeader>
      <CardContent className="lg:pt-7 pt-5 pb-2">
        <div className="grid gap-3.5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export { UpcomingEvents, type IUpcomingEventsItem, type IUpcomingEventsItems };
