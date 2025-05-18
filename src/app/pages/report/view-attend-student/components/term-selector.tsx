import { Link } from 'react-router-dom';
import { Term } from '../types';
import { cn } from '@/app/lib/utils';

interface TermSelectorProps {
  terms: Term[];
}

const TermSelector = ({ terms }: TermSelectorProps) => {
  return (
    <div className="flex overflow-x-auto pb-2 mb-5 -mx-1">
      {terms.map((term, index) => (
        <div key={index} className="px-1">
          <Link
            to={term.link ?? '#'}
            onClick={(e) => {
              if (!term.link) {
                e.preventDefault();
              }
            }}
            className={cn(
              'flex flex-col items-center justify-center w-20 h-[85px] py-3 rounded-md relative overflow-hidden border border-dashed',
              term.active
                ? 'bg-primary/10 text-primary hover:bg-primary/15 border-primary/30'
                : 'bg-card hover:bg-muted/50 border-border'
            )}
          >
            <span className="text-base font-semibold">
              {term.year}
            </span>
            <span className="text-sm text-muted-foreground mt-1">
              {term.season}
            </span>
            {term.active && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
            )}
          </Link>
        </div>
      ))}
    </div>
  );
};

export { TermSelector }; 