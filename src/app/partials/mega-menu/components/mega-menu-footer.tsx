import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { NavigationMenuLink } from '@/app/components/ui/navigation-menu';

const MegaMenuFooter = () => {
  return (
    <div className="flex flex-wrap items-center lg:justify-between rounded-xl lg:rounded-t-none bg-accent/50 border border-border lg:border-0 lg:border-t lg:border-t-gray-100 dark:lg:border-t-gray-100 px-4 py-4 lg:px-7.5 lg:py-5 gap-2.5">
      <div className="flex flex-col gap-1.5">
        <div className="text-base font-semibold text-mono leading-none">
          Read to Get Started ?
        </div>
        <div className="text-sm fomt-medium text-secondary-foreground">
          Take your docs to the next level of Metronic
        </div>
      </div>
      <NavigationMenuLink>
        <Button variant="mono" asChild>
          <Link to="https://keenthemes.com/metronic" target="_blank">
            Read Documentation
          </Link>
        </Button>
      </NavigationMenuLink>
    </div>
  );
};

export { MegaMenuFooter };
