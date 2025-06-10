import { Fragment } from 'react/jsx-runtime';
import {
  Captions,
  LucideIcon,
  ScrollText,
  Truck,
  WalletCards,
} from 'lucide-react';
import { cn } from '@/app/lib/utils';
import { Container } from '@/app/components/common/container';

interface IStepsItem {
  title: string;
  icon: LucideIcon;
}
type IStepsItems = Array<IStepsItem>;

interface StepsProps {
  currentStep: number;
}

export function Steps({ currentStep }: StepsProps) {
  const steps: IStepsItems = [
    { title: 'Order Summary', icon: Captions },
    { title: 'Shipping Info', icon: Truck },
    { title: 'Payment Method', icon: WalletCards },
    { title: 'Order Placed', icon: ScrollText },
  ];

  return (
    <Container>
      <div className="flex items-center justify-center flex-wrap lg:flex-nowrap gap-8 lg:gap-1.5 pt-5 mb-12">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
          const state = isCompleted
            ? 'completed'
            : isActive
              ? 'active'
              : 'pending';

          const Icon = step.icon;

          return (
            <Fragment key={step.title}>
              <div
                className={cn(
                  'text-2sm leading-none relative flex items-center gap-1.5 px-3 h-8.5 rounded-full border',
                  state === 'active'
                    ? 'font-medium border-primary/10 bg-primary/10 text-primary [&_.kt-step-icon]:text-primary'
                    : 'border-border text-foreground [&_.kt-step-icon]:text-muted-foreground',
                  state === 'completed' && 'bg-muted/30',
                )}
              >
                {isCompleted && (
                  <svg
                    className={cn(
                      'absolute -top-1 -end-1 text-green-500 size-4',
                    )}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_33923_24864)">
                      <path
                        d="M15.3327 7.99935C15.3327 9.44974 14.9026 10.8676 14.0968 12.0735C13.291 13.2795 12.1457 14.2194 10.8057 14.7745C9.4657 15.3295 7.99122 15.4747 6.56869 15.1918C5.14616 14.9088 3.83949 14.2104 2.8139 13.1848C1.78832 12.1592 1.08989 10.8525 0.806927 9.43001C0.523969 8.00748 0.669193 6.53299 1.22424 5.193C1.77928 3.85301 2.71921 2.7077 3.92517 1.9019C5.13113 1.09611 6.54895 0.666016 7.99935 0.666016C8.96238 0.666016 9.91597 0.855698 10.8057 1.22423C11.6954 1.59277 12.5038 2.13294 13.1848 2.8139C13.8658 3.49486 14.4059 4.30328 14.7745 5.193C15.143 6.08272 15.3327 7.03632 15.3327 7.99935ZM7.77935 10.72L12.1793 6.32001C12.3159 6.18261 12.3926 5.99675 12.3926 5.80301C12.3926 5.60928 12.3159 5.42341 12.1793 5.28601C12.042 5.14943 11.8561 5.07277 11.6623 5.07277C11.4686 5.07277 11.2827 5.14943 11.1453 5.28601L7.26602 9.16535L4.84602 6.74535C4.7089 6.60726 4.52254 6.52929 4.32794 6.52861C4.13334 6.52792 3.94644 6.60456 3.80835 6.74168C3.67026 6.8788 3.5923 7.06515 3.59161 7.25975C3.59092 7.45435 3.66757 7.64126 3.80468 7.77935L6.73802 10.7127C6.8057 10.7819 6.88643 10.837 6.97553 10.8749C7.06463 10.9127 7.16035 10.9326 7.25716 10.9333C7.35397 10.934 7.44995 10.9155 7.53958 10.8789C7.6292 10.8423 7.71069 10.7883 7.77935 10.72Z"
                        fill="#0BC33F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_33923_24864">
                        <rect width="16" height="16" fill="currentColor" />
                      </clipPath>
                    </defs>
                  </svg>
                )}

                <Icon className="kt-step-icon size-4" />
                {step.title}
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block w-12 h-px border-t border-dashed border-zinc-300 dark:border-zinc-600" />
              )}
            </Fragment>
          );
        })}
      </div>
    </Container>
  );
}
