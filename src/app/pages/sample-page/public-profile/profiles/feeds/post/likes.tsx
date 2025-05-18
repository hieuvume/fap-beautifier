import { Fragment, useState } from 'react';
import { CircleCheck, PersonStanding } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { CardFooter } from '@/app/components/ui/card';

interface ILikesItem {
  avatar: string;
  name: string;
  subscribers: number;
  connected: boolean;
}
type ILikesItems = Array<ILikesItem>;

const Likes = () => {
  const [items, setItems] = useState<ILikesItems>([
    {
      avatar: '300-14.png',
      name: 'Adam Wilson',
      subscribers: 2,
      connected: false,
    },
    {
      avatar: '300-7.png',
      name: 'Renee Branson',
      subscribers: 6,
      connected: true,
    },
    {
      avatar: '300-32.png',
      name: 'Jonathan Taylor',
      subscribers: 13,
      connected: false,
    },
    {
      avatar: '300-15.png',
      name: 'Lilia Mattox',
      subscribers: 4,
      connected: true,
    },
    {
      avatar: '300-25.png',
      name: 'Neil Roberts',
      subscribers: 23,
      connected: true,
    },
  ]);

  const toggleConnection = (index: number) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, connected: !item.connected } : item,
      ),
    );
  };

  const renderItem = (item: ILikesItem, index: number) => {
    return (
      <div key={index} className="flex items-center flex-wrap gap-2">
        <div className="flex items-center grow gap-2.5">
          <img
            src={toAbsoluteUrl(`/media/avatars/${item.avatar}`)}
            className="rounded-full size-10 shrink-0"
            alt="image"
          />
          <div className="flex flex-col">
            <Link
              to="#"
              className="text-base font-medium text-mono hover:text-primary-active mb-px"
            >
              {item.name}
            </Link>
            <span className="text-sm text-secondary-foreground">
              {item.subscribers} mutual subscribers
            </span>
          </div>
        </div>
        <Button
          variant={item.connected ? 'outline' : 'primary'}
          onClick={() => toggleConnection(index)}
        >
          {item.connected ? (
            <>
              <CircleCheck /> Connect
            </>
          ) : (
            <>
              <PersonStanding /> Connected
            </>
          )}
        </Button>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="flex flex-col gap-2 lg:gap-5 pt-3.5 px-7.5 mb-5">
        {items.map((item, index) => {
          return renderItem(item, index);
        })}
      </div>
      <CardFooter className="justify-center">
        <Button mode="link" underlined="dashed" asChild>
          <Link to="#">Show more Likes</Link>
        </Button>
      </CardFooter>
    </Fragment>
  );
};

export { Likes, type ILikesItem, type ILikesItems };
