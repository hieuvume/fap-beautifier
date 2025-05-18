import { ReactNode } from 'react';
import { HexagonBadge } from '@/app/partials/common/hexagon-badge';
import { Card } from '@/app/components/ui/card';

interface IProductInsightProps {
  image: ReactNode;
  title: string;
  description: string;
  number: number;
}

const ProductInsight = ({
  image,
  title,
  description,
  number,
}: IProductInsightProps) => {
  return (
    <Card className="p-5">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <HexagonBadge
            stroke="stroke-input"
            fill="fill-muted/30"
            size="size-[50px]"
            badge={image}
          />
          <div className="flex flex-col gap-0.5">
            <span className="leading-none font-medium text-base text-mono">
              {title}
            </span>
            <span className="text-sm text-secondary-foreground">
              {description}
            </span>
          </div>
        </div>
        <div className="font-semibold text-2xl text-foreground">{number}</div>
      </div>
    </Card>
  );
};

export { ProductInsight, type IProductInsightProps };
