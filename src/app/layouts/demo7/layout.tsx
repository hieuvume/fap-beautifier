import { useEffect } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { Outlet, useLocation } from 'react-router-dom';
import { MENU_SIDEBAR } from '@/app/config/menu.config';
import { useBodyClass } from '@/app/hooks/use-body-class';
import { useMenu } from '@/app/hooks/use-menu';
import { useFapData } from '@/app/providers/fap-data-provider';
import { useSettings } from '@/app/providers/settings-provider';
import { Button } from '@/app/components/ui/button';
import { ErrorBoundary } from '@/app/errors/error-boundary';
import { useDashboard } from '@/app/pages/dashboard/use-dashboard';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Toolbar, ToolbarActions, ToolbarHeading } from './components/toolbar';

const Demo7Layout = () => {
  const { setOption } = useSettings();
  const { pathname } = useLocation();
  const { getCurrentItem } = useMenu(pathname);
  const item = getCurrentItem(MENU_SIDEBAR);

  // Using the custom hook to set multiple CSS variables and class properties
  useBodyClass(`
    [--header-height-default:95px]
    data-[sticky-header=on]:[--header-height:60px]
    [--header-height:var(--header-height-default)]	
    [--header-height-mobile:70px]	
  `);

  useEffect(() => {
    setOption('layout', 'demo7');
  }, [setOption]);

  const { EOSClientDownloadLink } = useDashboard();
  const { shouldShowFallback } = useFapData();
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({ id: item?.title || 'COMMON.TITLE', defaultMessage: 'FAP - Academic Portal' })}
        </title>
      </Helmet>
      <div className="flex grow flex-col in-data-[sticky-header=on]:pt-(--header-height-default)">
        <Header />

        <div className="grow" role="content">
          <Toolbar>
            <ToolbarHeading />

            {pathname.includes('/Student.aspx') && (
              <ToolbarActions>
                <Button variant="outline" asChild>
                  <a href={EOSClientDownloadLink ?? ''} target="_blank">
                    <Download />
                    Download EOSClient
                  </a>
                </Button>
                {/* <Button variant="outline">
                  Giao diện nâng cao
                </Button> */}
              </ToolbarActions>
            )}
          </Toolbar>
          <ErrorBoundary>
            {shouldShowFallback ? (
              <>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex flex-col items-center justify-center">
                    <Loader2 className="h-10 w-10 animate-spin" />
                    <p className="text-sm text-muted-foreground">Loading...</p>
                  </div>
                </div>
              </>
            ) : (
              <Outlet />
            )}
          </ErrorBoundary>
        </div>

        <Footer />
      </div>
    </>
  );
};

export { Demo7Layout };
