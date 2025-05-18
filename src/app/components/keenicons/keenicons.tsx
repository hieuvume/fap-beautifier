import { forwardRef } from 'react';
import { cn } from '@/app/lib/utils';
import { KeeniconsProps } from './types';

// KeenIcon using forwardRef to pass the ref and spread props
export const KeenIcon = forwardRef<HTMLElement, KeeniconsProps>(
  ({ icon, style = 'filled', className = '', ...props }, ref) => {
    return (
      <i
        ref={ref}
        {...props}
        className={cn(`ki-${style}`, `ki-${icon}`, className)}
      />
    );
  },
);
KeenIcon.displayName = 'KeenIcon';
