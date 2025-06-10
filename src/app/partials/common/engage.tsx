import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardFooter } from '@/app/components/ui/card';

export interface EngageProps {
  title: string;
  description: string;
  image: ReactElement;
  more: {
    url: string;
    title: string;
  };
}

export function Engage({ title, description, image, more }: EngageProps) {
  return (
    <Card>
      <CardContent className="px-10 py-7.5 lg:pr-12.5">
        <div className="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-10">
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-xl font-medium text-mono">{title}</h2>
            <p className="text-sm text-foreground leading-5.5 mb-2.5">
              {description}
            </p>
          </div>
          {image}
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button mode="link" underlined="dashed" asChild>
          <Link to={more.url}>{more.title}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
