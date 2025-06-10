import { CardLocation } from '@/app/partials/cards';
import { MapPin } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface ILocationsItem {
  image: string;
  title: string;
  description: string;
}

type ILocationsItems = Array<ILocationsItem>;

const Locations = () => {
  const items: ILocationsItems = [
    {
      image: '10.jpg',
      title: 'Duolingo Tech Hub',
      description: '456 Innovation Street, Floor 6, Techland, New York 54321',
    },
    {
      image: '11.jpg',
      title: 'Duolingo Language Lab',
      description: '789 Learning Lane, 3rd Floor, Lingoville, Texas 98765',
    },
    {
      image: '12.jpg',
      title: 'Duolingo Research Institute',
      description:
        '246 Innovation Road, Research Wing, Innovacity, Arizona 13579',
    },
    {
      image: '7.jpg',
      title: 'Duolingo Research Institute',
      description:
        '246 Innovation Road, Research Wing, Innovacity, Arizona 13579',
    },
    {
      image: '8.jpg',
      title: 'Duolingo Research Institute',
      description:
        '246 Innovation Road, Research Wing, Innovacity, Arizona 13579',
    },
  ];

  const renderItem = (item: ILocationsItem, index: number) => {
    return (
      <CardLocation
        key={index}
        image={item.image}
        title={item.title}
        description={item.description}
      />
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Locations</CardTitle>
        <Button className="bg-green-500">
          <MapPin /> Offer Location
        </Button>
      </CardHeader>
      <CardContent className="p-5 lg:p-7.5 lg:pb-7">
        <div className="flex gap-5 kt-scrollable-x">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export { Locations, type ILocationsItem, type ILocationsItems };
