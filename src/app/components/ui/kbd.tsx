'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/lib/utils';

const kbdVariants = cva(
  'inline-flex items-center justify-center font-mono rounded-md',
  {
    variants: {
      variant: {
        default: 'bg-accent border border-border text-accent-foreground',
        outline: 'text-accent-foreground border border-input',
      },
      size: {
        md: 'h-7 min-w-7 px-1.5 text-xs [&_svg]:size-3.5',
        sm: 'h-6 min-w-6 px-1 text-[0.75rem] leading-[0.75rem] [&_svg]:size-3',
        xs: 'h-5 min-w-5 px-1 text-[0.6875rem] leading-[0.75rem] [&_svg]:size-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export interface KbdProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof kbdVariants> {}

function Kbd({ className, variant, size, ...props }: KbdProps) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(kbdVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Kbd, kbdVariants };
