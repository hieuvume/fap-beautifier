import React from 'react';
import { Label } from '@radix-ui/react-label';
import { Link } from 'react-router';
import { Badge, BadgeDot } from '@/app/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';

const items = [
  {
    logo: '1.png',
    title: 'Nike Air Max 270 React SE',
    sku: 'WM-8421',
    color: 'Beige',
    weight: '1.2',
  },
  {
    logo: '2.png',
    title: 'Nike Air Max 270 React SE',
    sku: 'XR-0293',
    color: 'Red',
    weight: '0.9',
  },
];

export const Items = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-muted px-5">
        <CardTitle className="">Items</CardTitle>
      </CardHeader>

      <CardContent className="px-5 py-4">
        {items.map((item, index) => (
          <React.Fragment key={item.sku}>
            <div className="flex items-center flex-wrap justify-between gap-4.5">
              <div className="flex items-center gap-3.5">
                <Card className="flex items-center justify-center bg-accent/50 h-[50px] w-[60px] rounded-md">
                  <img
                    src={`/media/store/client/600x600${item.logo}`}
                    className="cursor-pointer size-15"
                    alt="img"
                  />
                </Card>

                <div className="flex flex-col gap-1">
                  <Link
                    to="#"
                    className="hover:text-primary-active text-sm font-medium text-dark leading-5.5"
                  >
                    {item.title}
                  </Link>
                  <div className="flex items-center">
                    <div className="flex items-center gap-0.5 text-xs me-0.5">
                      <span className="font-normal text-gray-700 uppercase">
                        sku:
                      </span>
                      <span className="font-medium text-mono">{item.sku}</span>
                    </div>

                    <Badge appearance="ghost" variant="destructive">
                      <BadgeDot className="size-1 bg-muted-foreground/60" />
                    </Badge>

                    <div className="flex items-center gap-1 text-xs">
                      <span className="font-normal text-secondary-foreground">
                        Color
                      </span>
                      <span className="font-medium text-foreground">
                        {item.color}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-normal text-dark text-end">
                  Weight
                </span>
                <Label className="bg-background">
                  <Input
                    type="text"
                    value={item.weight}
                    className="w-[66px]"
                    onChange={() => {}}
                  />
                  kg
                </Label>
              </div>
            </div>

            {index !== items.length - 1 && (
              <div className="border-b border-border my-2.5"></div>
            )}
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
};
