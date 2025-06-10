import { CardNFT } from '@/app/partials/cards';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';

interface ITokensCreatedItem {
  image: string;
  title: string;
  id: number;
  info: string;
  date: string;
}
type ITokensCreatedItems = Array<ITokensCreatedItem>;

const TokensCreated = () => {
  const items: ITokensCreatedItems = [
    {
      image: '1.jpg',
      title: 'Artistic Expressions',
      id: 67890,
      info: '3.2 XMR',
      date: '14h 30m 49s',
    },
    {
      image: '2.jpg',
      title: 'Digital Harmony',
      id: 54321,
      info: '4.1 XMR',
      date: '11h 15m 00s',
    },
    {
      image: '3.jpg',
      title: 'Geometric Patterns',
      id: 81023,
      info: '3.8 XMR',
      date: '10h 13m 32s',
    },
    {
      image: '4.jpg',
      title: 'Futuristic Sculptures',
      id: 71045,
      info: '4.3 XMR',
      date: '10h 30m 00s',
    },
    {
      image: '5.jpg',
      title: 'Enchanted Realms',
      id: 67670,
      info: '5.3 XMR',
      date: '15h 43m 23s',
    },
  ];

  const renderItems = (item: ITokensCreatedItem, index: number) => {
    return (
      <CardNFT
        image={item.image}
        id={item.id}
        title={item.title}
        info={item.info}
        date={item.date}
        key={index}
      />
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Created</CardTitle>
        <Button mode="link" underlined="dashed" asChild>
          <Link to="/network/user-cards/author">View All</Link>
        </Button>
      </CardHeader>
      <CardContent className="p-5 lg:p-7.5 lg:pb-7">
        <ScrollArea>
          <div className="flex gap-5">
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

export { TokensCreated, type ITokensCreatedItem, type ITokensCreatedItems };
