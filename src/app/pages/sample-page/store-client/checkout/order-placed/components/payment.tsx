import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

export function Payment() {
  return (
    <Card>
      <CardHeader className="px-5 min-h-[44px]">
        <CardTitle className="text-sm">Payment</CardTitle>
      </CardHeader>

      <CardContent className="p-5">
        <div className="flex items-center gap-2.5">
          <img
            src={toAbsoluteUrl('/media/brand-logos/visa.svg')}
            className="size-12"
            alt="image"
          />
          <div className="flex flex-col gap-0.5 text-2sm">
            <span className="font-semibold text-mono">Jeroen van Dijk</span>
            <span className="font-normal text-mono">
              Ending 3604 Expires on 12/2026
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
