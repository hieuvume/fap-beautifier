import { useState } from 'react';
import { StoreClientWishlistSheet } from '../components/sheets/wishlist-sheet';
import { SearchResults } from '../search-results-grid';

export function WishlistContent() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <SearchResults mode="card" />
      <StoreClientWishlistSheet
        open={open}
        onOpenChange={() => setOpen(false)}
      />
    </>
  );
}
