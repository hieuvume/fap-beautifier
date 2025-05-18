import { ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { useStoreClient } from '../context';

interface ICard3Props {
  badge?: boolean;
  logo: string;
  title: string;
  total: string;
  star: string;
  label?: string;
  sku?: string;
  category1?: string;
  category2?: string;
  badgeLabel?: string;
}

export function Card3({
  badge,
  logo,
  title,
  badgeLabel,
  sku,
  total,
  star,
  label,
  category1,
  category2,
}: ICard3Props) {
  const { showCartSheet } = useStoreClient();

  return (
    <Card>
      <CardContent className="flex items-center flex-wrap justify-between p-2 pe-5 gap-4.5">
        <div className="flex items-center gap-3.5">
          <Card className="flex items-center justify-center bg-accent/50 h-[70px] w-[90px] shadow-none">
            <img
              src={toAbsoluteUrl(`/media/store/client/600x600/${logo}`)}
              className="h-[70px] cursor-pointer"
              alt="image"
            />
          </Card>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5 -mt-1">
              <Link
                to="#"
                className="hover:text-primary text-sm font-medium text-mono leading-5.5"
              >
                {title}
              </Link>

              {badge && (
                <Badge size="sm" variant="destructive" className="uppercase">
                  save {badgeLabel}%
                </Badge>
              )}
            </div>

            <div className="flex items-center flex-wrap gap-3">
              <Badge
                size="sm"
                variant="warning"
                shape="circle"
                className="rounded-full gap-1"
              >
                <Star
                  className="text-white -mt-0.5"
                  style={{ fill: 'currentColor' }}
                />{' '}
                {star}
              </Badge>

              <div className="flex items-center flex-wrap gap-2 lg:gap-4">
                <span className="text-xs font-normal text-secondary-foreground uppercase">
                  sku:{' '}
                  <span className="text-xs font-medium text-foreground">
                    {sku}
                  </span>
                </span>
                <span className="text-xs font-normal text-secondary-foreground">
                  Category:{' '}
                  <span className="text-xs font-medium text-foreground">
                    {category1}
                  </span>
                </span>
                <span className="text-xs font-normal text-secondary-foreground">
                  Category:{' '}
                  <span className="text-xs font-medium text-foreground">
                    {category2}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-xs font-normal text-secondary-foreground line-through">
            {label}
          </span>
          <span className="text-sm font-medium text-mono">${total}</span>
          <Button
            variant="outline"
            className="ms-2 shrink-0"
            onClick={showCartSheet}
          >
            <ShoppingCart /> Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
