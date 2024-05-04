import { useLayout } from "../../core"

const HeaderMenuTab: React.FC = () => {
  const { menuTabIndex, setMenuTabIndex } = useLayout()

  return <div
    className="app-header-secondary app-header-mobile-drawer"
    data-kt-drawer="true"
    data-kt-drawer-name="app-header-secondary"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="250px"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_header_secondary_mobile_toggle"
    data-kt-swapper="true"
    data-kt-swapper-mode="{default: 'append', lg: 'append'}"
    data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header'}"
  >
    <div className="d-flex flex-column flex-grow-1 overflow-hidden">
      <div className="app-header-secondary-menu-main d-flex flex-grow-lg-1 align-items-end pt-3 pt-lg-2 px-3 px-lg-0 w-auto overflow-auto flex-nowrap">
        <div className="app-container container-fluid">
          <div
            className="menu menu-rounded menu-nowrap flex-shrink-0 menu-row menu-active-bg menu-title-gray-700 menu-state-gray-900 menu-icon-gray-500 menu-arrow-gray-500 menu-state-icon-primary menu-state-bullet-primary fw-semibold fs-base align-items-stretch"
            id="#kt_app_header_secondary_menu"
            data-kt-menu="true"
          >
            <div className={`menu-item ${menuTabIndex === 0 ? 'here show' : ''}`}>
              <span className="menu-link" onClick={() => setMenuTabIndex(0)}>
                <span className="menu-title">Information Access</span>
              </span>
            </div>
            <div className="menu-item">
              <div className="menu-content">
                <div className="menu-separator" />
              </div>
            </div>
            <div className={`menu-item ${menuTabIndex === 1 ? 'here show' : ''}`}>
              <span className="menu-link" onClick={() => setMenuTabIndex(1)}>
                <span className="menu-title">Registration/Application</span>
              </span>
            </div>
            <div className="menu-item">
              <div className="menu-content">
                <div className="menu-separator" />
              </div>
            </div>
            <div className={`menu-item ${menuTabIndex === 2 ? 'here show' : ''}`}>
              <span className="menu-link" onClick={() => setMenuTabIndex(2)}>
                <span className="menu-title">Reports</span>
              </span>
            </div>
            <div className="menu-item">
              <div className="menu-content">
                <div className="menu-separator" />
              </div>
            </div>
            <div className={`menu-item ${menuTabIndex === 3 ? 'here show' : ''}`}>
              <span className="menu-link" onClick={() => setMenuTabIndex(3)}>
                <span className="menu-title">Others</span>
              </span>
            </div>
            <div className="menu-item">
              <div className="menu-content">
                <div className="menu-separator" />
              </div>
            </div>
            <div className="menu-item flex-grow-1" />
            <div className="menu-item">
              <div className="menu-content">
                <div className="menu-separator d-block d-lg-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app-header-secondary-menu-sub d-flex align-items-stretch flex-grow-1">
        <div className="app-container d-flex flex-column flex-lg-row align-items-stretch justify-content-lg-between container-fluid">
          <div
            className="menu menu-rounded menu-column menu-lg-row menu-active-bg menu-title-gray-700 menu-state-gray-900 menu-icon-gray-500 menu-arrow-gray-500 menu-state-icon-primary menu-state-bullet-primary fw-semibold fs-base align-items-stretch my-2 my-lg-0 px-2 px-lg-0"
            id="#kt_app_header_tertiary_menu"
            data-kt-menu="true"
          >
            <div className="menu-item">
              <a className="menu-link active" href="/">
                <span className="menu-icon">
                  <i className="ki-outline ki-element-9 fs-4" />
                </span>
                <span className="menu-title">Latest access</span>
              </a>
            </div>

            <div className="menu-item">
              <a className="menu-link active" href="/">
                <span className="menu-icon">
                  <i className="ki-outline ki-element-9 fs-4" />
                </span>
                <span className="menu-title">Last 2 access</span>
              </a>
            </div>

            <div className="menu-item">
              <a className="menu-link active" href="/">
                <span className="menu-icon">
                  <i className="ki-outline ki-element-9 fs-4" />
                </span>
                <span className="menu-title">Last 3 access</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default HeaderMenuTab