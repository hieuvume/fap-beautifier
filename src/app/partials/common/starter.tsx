import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';

export interface StarterProps {
  image: ReactNode;
  title: string;
  subTitle: ReactNode;
  engage: {
    path: string;
    btnColor: string;
    label: string;
  };
}

export function Starter({ image, title, subTitle, engage }: StarterProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-2.5 py-7.5">
        <div className="flex justify-center p-7.5 py-9">{image}</div>
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-xl font-semibold text-mono">{title}</h2>
            <p className="text-sm text-foreground">{subTitle}</p>
          </div>
          <div className="flex justify-center mb-5">
            <Button size="md" className={engage.btnColor}>
              <Link to={engage.path}>{engage.label}</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
