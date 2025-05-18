import { Info } from 'lucide-react';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

const DataImport = () => {
  return (
    <Card>
      <CardHeader className="gap-2" id="auth_social_sign_in">
        <CardTitle>Data import from Google Analytics</CardTitle>
        <Button variant="dim" mode="icon">
          <Info size={16} />
        </Button>
      </CardHeader>
      <CardContent className="lg:py-7.5 py-5">
        <div className="text-sm text-foreground mb-4">
          Define aspirations, outline the path. Set a goal to transform dreams
          into measurable achievements.
        </div>
        <Button variant="outline">
          <img
            src={toAbsoluteUrl('/media/brand-logos/google.svg')}
            className="size-4 shrink-0"
            alt="image"
          />
          Continue with Google
        </Button>
      </CardContent>
    </Card>
  );
};

export { DataImport };
