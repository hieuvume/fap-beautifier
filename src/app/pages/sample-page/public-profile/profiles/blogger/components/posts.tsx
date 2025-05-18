import { CardPost } from '@/app/partials/cards';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';

interface IPostsItem {
  image: string;
  label: string;
  description: string;
  time: string;
}
type IPostsItems = Array<IPostsItem>;

const Posts = () => {
  const items: IPostsItems = [
    {
      image: '14.jpg',
      label: 'Software',
      description: 'Maximizing Efficiency with Modern Software',
      time: '4 hours ago',
    },
    {
      image: '15.jpg',
      label: 'Work-Life',
      description: 'Balancing Work and Life: Strategies for Success',
      time: '2 days ago',
    },
    {
      image: '16.jpg',
      label: 'Technology',
      description: 'Exploring the Latest Technological',
      time: 'A week ago',
    },
    {
      image: '11.jpg',
      label: '',
      description: '',
      time: '',
    },
    {
      image: '12.jpg',
      label: '',
      description: '',
      time: '',
    },
  ];

  const renderItems = (item: IPostsItem, index: number) => {
    return (
      <CardPost
        key={index}
        image={item.image}
        label={item.label}
        description={item.description}
        time={item.time}
      />
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Jenny’s Posts</CardTitle>
        <Button mode="link" underlined="dashed" asChild>
          <Link to="/public-profile/profiles/feeds">View All</Link>
        </Button>
      </CardHeader>
      <CardContent className="p-5 lg:p-7.5 lg:pb-7">
        <ScrollArea>
          <div className="flex flex-no-wrap gap-5">
            {items.map((item, index) => {
              return renderItems(item, index);
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export { Posts, type IPostsItem, type IPostsItems };
