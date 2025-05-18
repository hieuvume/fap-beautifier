import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

interface IFavoriteGamesItem {
  image: string;
  className?: string;
}
type IFavoriteGamesItems = Array<IFavoriteGamesItem>;

const FavoriteGames = () => {
  const items: IFavoriteGamesItems = [
    { image: '13.jpg' },
    { image: '14.jpg' },
    { image: '15.jpg' },
    { image: '16.jpg', className: 'border' },
    { image: '17.jpg' },
    { image: '18.jpg' },
    { image: '19.jpg' },
    { image: '20.jpg' },
  ];

  const renderItem = (item: IFavoriteGamesItem, index: number) => {
    return (
      <img
        src={toAbsoluteUrl(`/media/images/600x600/${item.image}`)}
        className={`rounded-xl w-11 h-11 ${item.className}`}
        alt="image"
        key={index}
      />
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Favorite Games</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2.5 xl:me-14 mb-1.5">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export { FavoriteGames, type IFavoriteGamesItem, type IFavoriteGamesItems };
