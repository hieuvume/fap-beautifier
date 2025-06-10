import { SquareSigma } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

const Assets = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Assets</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-y-5">
          <div className="flex align-start gap-2">
            <SquareSigma className="text-2xl leading-none text-orange-400" />
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-semibold text-mono leading-none tracking-tight">
                302.97 XMR
              </span>
              <span className="text-sm font-medium text-secondary-foreground">
                $42,074.81
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { Assets };
