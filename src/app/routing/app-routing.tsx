import { useEffect, useState } from 'react';
import { useAuth } from '@/app/auth/context/auth-context';
import { useLocation } from 'react-router';
import { useLoadingBar } from 'react-top-loading-bar';
import { AppRoutingSetup } from './app-routing-setup';

export function AppRouting() {
  const { start, complete } = useLoadingBar({
    color: 'var(--color-primary)',
    shadow: false,
    waitingTime: 400,
    transitionTime: 200,
    height: 2,
  });

  const { verify, setLoading } = useAuth();
  const [previousLocation, setPreviousLocation] = useState('');
  const [firstLoad, setFirstLoad] = useState(true);
  const location = useLocation();
  const path = location.pathname.trim();

  useEffect(() => {
    if (firstLoad) {
      verify().finally(() => {
        setLoading(false);
        setFirstLoad(false);
      });
    }
  });

  useEffect(() => {
    if (!firstLoad) {
      start('static');
      verify()
        .catch(() => {
          throw new Error('User verify request failed!');
        })
        .finally(() => {
          setPreviousLocation(path);
          complete();
          if (path === previousLocation) {
            setPreviousLocation('');
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    if (!CSS.escape(window.location.hash)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [previousLocation]);

  return <AppRoutingSetup />;
}
