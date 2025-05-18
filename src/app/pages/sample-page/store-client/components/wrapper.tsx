'use client';

import * as React from 'react';
import { useStoreClient } from './context';
import { StoreClientCartSheet } from './sheets/cart-sheet';
import { StoreClientProductDetailsSheet } from './sheets/product-details-sheet';
import { StoreClientWishlistSheet } from './sheets/wishlist-sheet';

export function StoreClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    state: {
      isWishlistSheetOpen,
      isCartSheetOpen,
      isProductDetailsSheetOpen,
      productDetailsId,
    },
    closeWishlistSheet,
    closeCartSheet,
    closeProductDetailsSheet,
    handleAddToCart,
  } = useStoreClient();

  return (
    <>
      {children}
      <StoreClientWishlistSheet
        open={isWishlistSheetOpen}
        onOpenChange={closeWishlistSheet}
      />
      <StoreClientCartSheet
        open={isCartSheetOpen}
        onOpenChange={closeCartSheet}
      />
      <StoreClientProductDetailsSheet
        open={isProductDetailsSheetOpen}
        onOpenChange={closeProductDetailsSheet}
        productId={productDetailsId}
        addToCart={handleAddToCart}
      />
    </>
  );
}
