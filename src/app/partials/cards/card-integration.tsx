import { ReactNode } from 'react';
import { LogOut, SquareDashedMousePointer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardFooter } from '@/app/components/ui/card';

interface IIntegrationProps {
  logo: string;
  path: string;
  name: string;
  description: string;
  actions: ReactNode;
}

const CardIntegration = ({
  logo,
  path,
  name,
  description,
  actions,
}: IIntegrationProps) => {
  return (
    <Card>
      <CardContent className="p-5 lg:p-7.5">
        <div className="flex items-center justify-between mb-3 lg:mb-5">
          <div className="flex items-center justify-center">
            <img
              src={toAbsoluteUrl(`/media/brand-logos/${logo}`)}
              className="h-11 shrink-0"
              alt="image"
            />
          </div>
          <div className="btn btn-sm btn-icon btn-clear btn-light">
            <LogOut size={16} />
          </div>
        </div>
        <div className="flex flex-col gap-1 lg:gap-2.5">
          <Link
            to={path}
            className="text-base font-medium text-mono hover:text-primary-active"
          >
            {name}
          </Link>
          <span className="text-sm text-secondary-foreground">
            {description}
          </span>
        </div>
      </CardContent>
      <CardFooter className="justify-between items-center py-3.5">
        <Button variant="outline">
          <Link to="#">
            <SquareDashedMousePointer size={16} />
          </Link>{' '}
          Connect
        </Button>
        <div className="flex items-center gap-2.5">{actions}</div>
      </CardFooter>
    </Card>
  );
};

export { CardIntegration, type IIntegrationProps };
