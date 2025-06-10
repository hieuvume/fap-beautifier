import { cn } from '@/app/lib/utils';

interface RatingProps {
  className?: string;
  rating: number;
  round?: number;
}

export function Rating({ className, rating, round }: RatingProps) {
  return (
    <div className={cn('rating', className && className)}>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={cn(
            'kt-rating-label',
            index < rating ? 'checked' : '',
            index === rating && round ? 'indeterminate' : '',
          )}
        >
          {index === rating && round ? (
            <i
              className="kt-rating-on ki-solid ki-star text-base leading-none"
              style={{ width: `${round * 100}%` }}
            ></i>
          ) : (
            <i className="kt-rating-on ki-solid ki-star text-base leading-none"></i>
          )}
          <i className="kt-rating-off ki-outline ki-star text-base leading-none"></i>
        </div>
      ))}
    </div>
  );
}
