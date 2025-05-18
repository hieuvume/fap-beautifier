import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

interface IWorkExperienceItem {
  image?: string;
  title?: string;
  desc?: string;
  date?: string;
  heading?: string;
}
type IWorkExperienceItems = Array<IWorkExperienceItem>;

const WorkExperience = () => {
  const items: IWorkExperienceItems = [
    {
      image: 'jira.svg',
      title: 'Esprito Studios',
      desc: 'Senior Project Manager',
      date: '2019 - Present',
    },
    { heading: 'Previous Jobs' },
    {
      image: 'weave.svg',
      title: 'Pesto Plus',
      desc: 'CRM Product Lead ',
      date: '2012 - 2019',
    },
    {
      image: 'perrier.svg',
      title: 'Perrier Technologies',
      desc: 'UX Research',
      date: '2010 - 2012',
    },
  ];

  const renderItem = (item: IWorkExperienceItem, index: number) => {
    return (
      <div key={index}>
        {item.heading ? (
          <div className="text-secondary-foreground font-semibold text-sm leading-none">
            {item.heading}
          </div>
        ) : (
          <div className="flex align-start gap-3.5">
            {item.image && (
              <img
                src={toAbsoluteUrl(`/media/brand-logos/${item.image}`)}
                className="h-9"
                alt="image"
              />
            )}
            <div className="flex flex-col gap-1">
              {item.title && (
                <Link
                  to="#"
                  className="text-sm font-medium text-primary leading-none hover:text-primary-active"
                >
                  {item.title}
                </Link>
              )}
              {item.desc && (
                <span className="text-sm font-medium text-mono">
                  {item.desc}
                </span>
              )}
              {item.date && (
                <span className="text-xs text-secondary-foreground leading-none">
                  {item.date}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Work Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-y-5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button mode="link" underlined="dashed" asChild>
          <Link to="/public-profile/works">Open to Work</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { WorkExperience, type IWorkExperienceItem, type IWorkExperienceItems };
