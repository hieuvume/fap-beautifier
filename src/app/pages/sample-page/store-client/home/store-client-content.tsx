import {
  Deals,
  FeaturedProducts,
  Info,
  NewArrivals,
  PopularSneakers,
  Search,
  SpecialOffers,
} from './components';

export function StoreClientContent() {
  return (
    <div className="grid grid-cols-1 gap-6">
      <Search />
      <FeaturedProducts />
      <SpecialOffers />
      <NewArrivals />
      <PopularSneakers />
      <Deals />
      <Info />
    </div>
  );
}
