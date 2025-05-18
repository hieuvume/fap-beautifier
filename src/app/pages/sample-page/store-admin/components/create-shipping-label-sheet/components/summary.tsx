import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

export const Summary = () => {
  const items = [
    { label: 'Subtotal', amount: 19.0 },
    { label: 'Discount', amount: 0.0 },
    { label: 'VAT', amount: 3.99 },
  ];

  return (
    <Card>
      <CardHeader className="px-5">
        <CardTitle>Summary</CardTitle>
      </CardHeader>

      <CardContent className="p-5 pb-4 space-y-2">
        <div className="flex flex-col ">
          <span className="text-sm font-medium text-mono mb-1.5">
            Shipping to Jeroen’s Home
          </span>

          <div className="flex flex-col gap-1 text-xs font-normal text-secondary-foreground">
            <span>Prinsengracht 24</span>
            <span>1015 DV Amsterdam, NL</span>
          </div>
        </div>

        <div className="border-b border-border mb-4 mt-5"></div>
        <span className="text-sm font-medium block text-mono mb-3.5">
          Price Details
        </span>

        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm font-normal text-secondary-foreground">
              {item.label}
            </span>
            <span className="text-sm font-medium text-mono">
              ${item.amount.toFixed(2)}
            </span>
          </div>
        ))}
        <div className="border-b border-border my-3"></div>

        <div className="flex justify-between items-center">
          <span className="text-sm font-normal text-secondary-foreground">
            Total
          </span>
          <span className="text-base font-semibold text-mono">$22.99</span>
        </div>
      </CardContent>
    </Card>
  );
};
