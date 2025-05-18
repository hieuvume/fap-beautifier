import { Fragment } from 'react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Card, CardContent } from '@/app/components/ui/card';
import { useStoreClient } from '../context';

interface ICard1Item {
  logo: string;
  brand: string;
}
type ICard1Items = Array<ICard1Item>;

export function Card1() {
  const { showProductDetailsSheet } = useStoreClient();

  const items: ICard1Items = [
    { logo: '1.png', brand: 'Nike' },
    { logo: '2.png', brand: 'Adidas' },
    { logo: '3.png', brand: 'Puma' },
    { logo: '4.png', brand: 'New Balance' },
    { logo: '5.png', brand: 'Converse' },
    { logo: '6.png', brand: 'Reebok' },
    { logo: '7.png', brand: 'Sketchers' },
  ];

  const renderItem = (item: ICard1Item, index: number) => (
    <Card key={index}>
      <CardContent className="flex flex-col items-center justify-center pb-0">
        <div
          onClick={() => showProductDetailsSheet('productid')}
          className="hover:text-primary text-sm font-medium text-mono"
        >
          {item.brand}
        </div>

        <img
          src={toAbsoluteUrl(`/media/store/client/600x600/${item.logo}`)}
          className="cursor-pointer h-[100px] shrink-0"
          alt="image"
        />
      </CardContent>
    </Card>
  );

  return (
    <Fragment>
      {items.map((item, index) => {
        return renderItem(item, index);
      })}
    </Fragment>
  );
}
