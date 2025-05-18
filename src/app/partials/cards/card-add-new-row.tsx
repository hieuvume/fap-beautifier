import { Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/app/components/ui/card';
import { HexagonBadge } from '../common/hexagon-badge';

interface IAddNewProps {
  path: string;
  size: string;
  iconSize: string;
  title: string;
  subTitle: string;
}

const CardAddNewRow = ({
  path,
  size,
  iconSize,
  title,
  subTitle,
}: IAddNewProps) => {
  return (
    <Link to={`/${path}`}>
      <Card className="border-2 border-dashed border-primary-clarity bg-center bg-cover bg-no-repeat">
        <CardContent>
          <div className="flex items-center justify-center gap-5">
            <div className="flex justify-center">
              <HexagonBadge
                size={size}
                badge={
                  <Rocket size={16} className={`${iconSize} text-primary`} />
                }
                stroke="stroke-blue-400"
                fill="fill-white"
              />
            </div>
            <div className="flex flex-col text-start">
              <span className="text-lg font-semibold text-mono hover:text-primary-active mb-px">
                {title}
              </span>
              <span className="text-sm font-normal text-secondary-foreground">
                {subTitle}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export { CardAddNewRow, type IAddNewProps };
