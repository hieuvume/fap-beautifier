import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface IRepliesItem {
  borderColor: string;
  date: string;
  comments: number;
  text: string;
}
type IRepliesItems = Array<IRepliesItem>;

const Replies = () => {
  const items: IRepliesItems = [
    {
      borderColor: 'border-destructive',
      date: '10 Jan',
      comments: 24,
      text: 'Experienced UI/UX designer seeking new opportunities.',
    },
    {
      borderColor: 'border-primary',
      date: '23 Jan',
      comments: 3,
      text: 'Include the name of the author of the blog post. This helps to build trust and credibility with readers.',
    },
    {
      borderColor: 'border-orange-300',
      date: '4 Feb',
      comments: 89,
      text: 'Avoid using all caps or excessive punctuation.',
    },
    {
      borderColor: 'border-green-500',
      date: '17 Mar',
      comments: 32,
      text: 'You can use this example as a starting point to design your own blog post cards. Be sure to experiment with different layouts, fonts, and colors both visually appealing and informative.',
    },
    {
      borderColor: 'border-destructive',
      date: '9 Apr',
      comments: 57,
      text: 'Use high-quality images and graphics to capture the visual appeal of your cards.',
    },
  ];

  const renderItem = (item: IRepliesItem, index: number) => {
    return (
      <div key={index} className={`border-l-2 ${item.borderColor}`}>
        <div className="flex gap-3 items-center ps-3 mb-0.5">
          <span className="text-xs text-secondary-foreground">
            {item.date}, 24
          </span>
          <div className="rounded-full w-1.5 h-1.5 bg-input gap-1.5"></div>
          <div className="flex gap-1 items-center">
            <Heart size={16} className="text-base text-muted-foreground" />
            <span className="text-sm text-secondary-foreground">
              {item.comments}
            </span>
          </div>
        </div>
        <p className="text-sm text-foreground leading-5.5 ps-3">{item.text}</p>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Jenny’s Replies</CardTitle>
        <Button mode="link" underlined="dashed" asChild>
          <Link to="/public-profile/profiles/feeds">View All</Link>
        </Button>
      </CardHeader>
      <CardContent className="pb-7">
        <div className="flex flex-col gap-5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export { Replies, type IRepliesItem, type IRepliesItems };
