import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { Collaborate } from '../blogger';
import { IStatisticsItems, Statistics, Summary } from '../creator';
import { Tags } from '../default';
import { Post1, Post2, Post3, Post4 } from './components';

export function ProfileFeedsContent() {
  const data: IStatisticsItems = [
    { title: 'Connections', value: '5.3k' },
    { title: 'Uploads', value: '28.9k' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <Statistics data={data} />
          <Summary title="Profile" />
          <Collaborate title="Open to work" />
          <Tags title="Skills" />
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <Post1 />
          <Post2 />
          <Post3 />
          <Post4 />
          <div className="flex justify-center">
            <Button mode="link" underlined="dashed" asChild>
              <Link to="#">Show more posts</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
