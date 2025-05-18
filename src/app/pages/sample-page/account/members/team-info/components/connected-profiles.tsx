import { DropdownMenu2 } from '@/app/partials/dropdown-menu/dropdown-menu-2';
import { EllipsisVertical } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

interface IConnectedProfilesItem {
  user: {
    name: string;
    tasks: number;
    avatar: string;
  };
  socialLogo: string;
  socialLogoDark?: string;
}
type IConnectedProfilesItems = Array<IConnectedProfilesItem>;

const ConnectedProfiles = () => {
  const items: IConnectedProfilesItems = [
    {
      user: {
        name: 'Tyler Hero',
        tasks: 26,
        avatar: '300-3.png',
      },
      socialLogo: 'x.svg',
      socialLogoDark: 'x-dark.svg',
    },
    {
      user: {
        name: 'Leslie Alexander',
        tasks: 26,
        avatar: '300-5.png',
      },
      socialLogo: 'google.svg',
    },
  ];

  const renderItem = (item: IConnectedProfilesItem, index: number) => {
    return (
      <CardContent
        key={index}
        className="border-b border-border flex justify-between items-center py-4"
      >
        <div className="flex items-center grow gap-2.5">
          <img
            src={toAbsoluteUrl(`/media/avatars/${item.user.avatar}`)}
            className="rounded-full size-9 shrink-0"
            alt="image"
          />
          <div className="flex flex-col gap-1">
            <Link
              to="#"
              className="text-sm font-medium text-mono hover:text-primary-active"
            >
              {item.user.name}
            </Link>
            <span className="text-xs text-secondary-foreground">
              {item.user.tasks} tasks
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          {item.socialLogoDark ? (
            <>
              <img
                src={toAbsoluteUrl(`/media/brand-logos/${item.socialLogo}`)}
                className="dark:hidden max-h-5"
                alt="image"
              />
              <img
                src={toAbsoluteUrl(`/media/brand-logos/${item.socialLogoDark}`)}
                className="light:hidden max-h-5"
                alt="image"
              />
            </>
          ) : (
            <img
              src={toAbsoluteUrl(`/media/brand-logos/${item.socialLogo}`)}
              className="max-h-5"
              alt="image"
            />
          )}
          <DropdownMenu2
            trigger={
              <Button variant="ghost" mode="icon">
                <EllipsisVertical />
              </Button>
            }
          />
        </div>
      </CardContent>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>2 Profiles Connected</CardTitle>
      </CardHeader>
      {items.map((item, index) => {
        return renderItem(item, index);
      })}
      <CardFooter className="justify-center">
        <Button variant="outline">
          <Link to="#">Connect Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export {
  ConnectedProfiles,
  type IConnectedProfilesItem,
  type IConnectedProfilesItems,
};
