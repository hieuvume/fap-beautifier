import { Bestsellers } from './components/bestsellers';
import { Inventory } from './components/inventory';
import { InventorySummary } from './components/inventory-summary';
import { Orders } from './components/orders';
import { RecentOrders } from './components/recent-orders';
import { SalesActivity } from './components/sales-activity';

export function DashboardContent() {
  return (
    <div className="flex flex-col gap-5 lg:gap-7.5">
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5">
        <Orders />
        <Inventory />
        <Bestsellers />
      </div>

      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5">
        <div className="lg:col-span-2">
          <SalesActivity />
        </div>

        <div className="lg:col-span-1">
          <InventorySummary />
        </div>
      </div>

      <div className="grid lg:grid-cols-1">
        <div className="lg:col-span-1">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}
