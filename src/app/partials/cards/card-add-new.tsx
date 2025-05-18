import { Rocket } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { Card, CardContent } from '@/app/components/ui/card';
import { HexagonBadge } from '../common/hexagon-badge';
import { IAddNewProps } from './card-add-new-row';

const CardAddNew = ({
  path,
  size,
  iconSize,
  title,
  subTitle,
}: IAddNewProps) => {
  const { theme } = useTheme();

  return (
    <Link to={`${path}`}>
      <Card
        className="border-2 border-dashed border-orange-200 dark:border-orange-950 bg-center bg-[length:600px] bg-no-repeat h-full"
        style={{
          backgroundImage:
            theme === 'dark'
              ? `url('${toAbsoluteUrl('/media/images/2600x1200/bg-4-dark.png')}')`
              : `url('${toAbsoluteUrl('/media/images/2600x1200/bg-4.png')}')`,
        }}
      >
        <CardContent>
          <div className="flex flex-col gap-3">
            <div className="flex justify-center pt-5">
              <HexagonBadge
                size={size}
                badge={
                  <Rocket size={16} className={`${iconSize} text-orange-400`} />
                }
                stroke="stroke-orange-200 dark:stroke-orange-950"
                fill="fill-orange-50 dark:fill-orange-950/30"
              />
            </div>
            <div className="flex flex-col text-center">
              <span className="text-lg font-medium text-mono hover:text-primary-active mb-px">
                {title}
              </span>
              <span className="text-sm text-secondary-foreground">
                {subTitle}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export { CardAddNew };
