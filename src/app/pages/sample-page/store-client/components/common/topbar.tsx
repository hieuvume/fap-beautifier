import { UserDropdownMenu } from '@/app/partials/topbar/user-dropdown-menu';
import { Heart, Search, ShoppingCart, UserCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { useStoreClient } from '../context';

export function StoreClientTopbar() {
  const { pathname } = useLocation();
  const { showCartSheet, showWishlistSheet } = useStoreClient();

  return (
    <>
      <div className="flex items-center gap-1">
        {!pathname.includes('store-client/home') &&
          !pathname.includes('store-client/wishlist') &&
          !pathname.includes('store-client/search-results-grid') &&
          !pathname.includes('store-client/search-results-list') &&
          !pathname.includes('store-client/product-details') && (
            <div className="relative lg:w-[240px] me-3">
              <Search className="size-4 text-muted-foreground absolute top-1/2 -translate-y-1/2 start-2" />
              <Input type="text" className="px-7" placeholder="Search shop" />
              <Badge
                className="absolute top-1/2 -translate-y-1/2 end-2 gap-1"
                appearance="outline"
                size="sm"
              >
                ⌘ K
              </Badge>
            </div>
          )}

        <UserDropdownMenu
          trigger={
            <Button
              variant="ghost"
              size="lg"
              mode="icon"
              shape="circle"
              className="hover:text-primary"
            >
              <UserCircle className="size-5!" />
            </Button>
          }
        />

        <Button
          variant="ghost"
          size="lg"
          mode="icon"
          shape="circle"
          onClick={showWishlistSheet}
          className="hover:text-primary"
        >
          <Heart className="size-5!" />
        </Button>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="lg"
            mode="icon"
            shape="circle"
            onClick={showCartSheet}
            className="relative hover:text-primary"
          >
            <ShoppingCart className="size-5!" />
            <Badge
              className="absolute top-0.5 end-0.5"
              variant="success"
              size="xs"
              shape="circle"
            >
              3
            </Badge>
          </Button>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-secondary-foreground">
              Total
            </span>
            <span className="text-xs font-medium text-dark">$94.56</span>
          </div>
        </div>
      </div>
    </>
  );
}
