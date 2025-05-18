import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/app/lib/utils';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';

export interface CreateTeamProps {
  className?: string;
  image: ReactNode;
  title: string;
  subTitle: ReactNode;
  engage: {
    path: string;
    btnColor:
      | 'primary'
      | 'mono'
      | 'destructive'
      | 'secondary'
      | 'outline'
      | 'dashed'
      | 'ghost'
      | 'dim'
      | 'foreground'
      | 'inverse';
    label: string;
  };
}

export function CreateTeam({
  className,
  image,
  title,
  subTitle,
  engage,
}: CreateTeamProps) {
  return (
    <Card className={cn('', className && className)}>
      <CardContent className="flex flex-col place-content-center gap-5">
        <div className="flex justify-center">{image}</div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-xl font-semibold text-mono">{title}</h2>
            <p className="text-sm font-medium text-secondary-foreground">
              {subTitle}
            </p>
          </div>
          <div className="flex justify-center">
            <Button variant={engage.btnColor}>
              <Link to={engage.path}>{engage.label}</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
