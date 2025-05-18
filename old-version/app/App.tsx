import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { I18nProvider } from '../_metronic/i18n/i18nProvider'
import { LayoutProvider, LayoutSplashScreen, PageDataProvider } from '../_metronic/layout/core'
import { MasterInit } from '../_metronic/layout/MasterInit'
import { ThemeModeProvider } from '../_metronic/partials'

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <ThemeModeProvider>
            <PageDataProvider>
              <Outlet />
              <MasterInit />
            </PageDataProvider>
          </ThemeModeProvider>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export { App }

