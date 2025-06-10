import { useState } from 'react';
import { StoreClientProductDetailsSheet } from '../components/sheets/product-details-sheet';
import { SearchResults } from '../search-results-grid';

export function ProductDetailsContent() {
  const [open, setOpen] = useState(true);
  const [selectedProductId] = useState('123');

  const handleAddToCart = ({ productId }: { productId: string }) => {
    console.log('Added to cart:', productId);
  };

  return (
    <>
      <SearchResults mode="card" />
      <StoreClientProductDetailsSheet
        open={open}
        onOpenChange={() => setOpen(false)}
        productId={selectedProductId}
        addToCart={handleAddToCart}
      />
    </>
  );
}
