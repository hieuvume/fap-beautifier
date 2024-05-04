import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { MenuComponent } from '../assets/ts/components'
import { AsideMenuMain } from './components/aside/AsideMenuMain'
import { Content } from './components/Content'
import { Footer } from './components/Footer'
import { Header } from './components/header/Header'
import { PageDataProvider } from './core'
import { ScrollTop } from './components/ScrollTop'

const MasterLayout = () => {
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])

  return (
    <PageDataProvider>
      <div className='d-flex flex-column flex-root app-root' id="kt_app_body" data-kt-app-header-fixed="true" data-kt-app-header-fixed-mobile="true" data-kt-app-header-stacked="true" data-kt-app-header-primary-enabled="true" data-kt-app-header-secondary-enabled="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true">
        <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
          <Header />
          <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
            <AsideMenuMain />
            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
              <div className="d-flex flex-column flex-column-fluid">
                <div id="kt_app_content" className="app-content app-content-stretch">
                  <Content>
                    <Outlet />
                  </Content>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <ScrollTop />
    </PageDataProvider>
  )
}

export { MasterLayout }
