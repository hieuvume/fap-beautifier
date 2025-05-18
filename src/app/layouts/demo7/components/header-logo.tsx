import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { toAbsoluteUrl } from '@/app/lib/helpers';
import { useIsMobile } from '@/app/hooks/use-mobile';
import { Button } from '@/app/components/ui/button';
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/app/components/ui/sheet';
import { MegaMenu } from './mega-menu';
import { MegaMenuMobile } from './mega-menu-mobile';

const HeaderLogo = () => {
  const { pathname } = useLocation();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const isMobile = useIsMobile();

  // Close sheet when route changes
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <div className="flex items-stretch gap-1.5 lg:gap-10 grow">
      <div className="flex items-center gap-2.5">
        <Link to="/Student.aspx">
          <img
            src={toAbsoluteUrl('/media/fpt/fpt-logo.png')}
            className="dark:hidden max-h-[34px]"
            alt="logo"
          />
          <img
            src={toAbsoluteUrl('/media/fpt/fpt-logo.png')}
            className="hidden dark:inline-block max-h-[34px]"
            alt="logo"
          />
        </Link>

        <h3 className="text-mono text-lg font-medium hidden lg:block">
          Academic Portal
        </h3>
      </div>

      {!isMobile ? (
        <MegaMenu />
      ) : (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="dim" mode="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="p-0 gap-0 w-[275px]"
            side="left"
            close={false}
          >
            <SheetHeader className="p-0 space-y-0" />
            <SheetBody className="p-0 flex flex-col grow">
              <MegaMenuMobile />
            </SheetBody>
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
};

export { HeaderLogo };
