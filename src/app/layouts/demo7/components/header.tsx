import { useEffect, useState } from 'react';
import { cn } from '@/app/lib/utils';
import { useScrollPosition } from '@/app/hooks/use-scroll-position';
import { useSettings } from '@/app/providers/settings-provider';
import { Container } from '@/app/components/common/container';
import { HeaderLogo } from './header-logo';
import { HeaderTopbar } from './header-topbar';

const Header = () => {
  const { settings } = useSettings();
  const scrollPosition = useScrollPosition();
  const [headerStickyOn, setHeaderStickyOn] = useState(false);

  useEffect(() => {
    const isSticky = scrollPosition > settings.layouts.demo2.headerStickyOffset;
    setHeaderStickyOn(isSticky);
  }, [scrollPosition, settings]);

  useEffect(() => {
    if (headerStickyOn === true) {
      document.body.setAttribute('data-sticky-header', 'on');
    } else {
      document.body.removeAttribute('data-sticky-header');
    }
  }, [headerStickyOn]);

  return (
    <header
      className={cn(
        'flex items-center transition-[height] shrink-0 bg-background py-4 lg:py-0 lg:h-(--header-height)',
        headerStickyOn &&
          'transition-[height] fixed z-10 top-0 left-0 right-0 shadow-xs backdrop-blur-md bg-background/70 pe-[var(--removed-body-scroll-bar-size,0px)]',
      )}
    >
      <Container className="flex flex-wrap gap-2 items-center lg:gap-4">
        <HeaderLogo />
        <HeaderTopbar />
      </Container>
    </header>
  );
};

export { Header };
