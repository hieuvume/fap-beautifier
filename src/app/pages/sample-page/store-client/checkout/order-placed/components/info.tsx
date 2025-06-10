import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

export function Info() {
  return (
    <Card>
      <CardHeader className="px-5 min-h-[44px]">
        <CardTitle className="text-sm">Delivery to</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="text-sm font-semibold text-mono mb-2.5">
          Jeroen van Dijk
        </div>

        <div className="flex flex-col gap-2 text-2sm font-normal text-mono">
          <span>Keizersgracht 172</span>
          <span>1016 DW, Amsterdam</span>
          <span>Netherlands</span>
          <span>Phone number: +31612345678</span>
        </div>
      </CardContent>
    </Card>
  );
}
