import { useLayout } from "../../core";

type QuickMenuProps = {
  to: string;
  icon: string;
  title: string;
};

const QuickMenu: React.FC<QuickMenuProps> = ({ to, icon, title }) => {
  return (
    <div className="menu-item">
      <a className="menu-link active" href={to}>
        <span className="menu-icon">
          <i className={`ki-outline fs-4 ${icon}`} />
        </span>
        <span className="menu-title">{title}</span>
      </a>
    </div>
  );
};

const HeaderMenuTab: React.FC = () => {
  const { menuTabIndex, setMenuTabIndex } = useLayout();

  return (
    <div
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
              <div
                className={`menu-item ${menuTabIndex === 0 ? "here show" : ""}`}
              >
                <span className="menu-link" onClick={() => setMenuTabIndex(0)}>
                  <span className="menu-title">Information Access</span>
                </span>
              </div>
              <div className="menu-item">
                <div className="menu-content">
                  <div className="menu-separator" />
                </div>
              </div>
              <div
                className={`menu-item ${menuTabIndex === 1 ? "here show" : ""}`}
              >
                <span className="menu-link" onClick={() => setMenuTabIndex(1)}>
                  <span className="menu-title">Registration/Application</span>
                </span>
              </div>
              <div className="menu-item">
                <div className="menu-content">
                  <div className="menu-separator" />
                </div>
              </div>
              <div
                className={`menu-item ${menuTabIndex === 2 ? "here show" : ""}`}
              >
                <span className="menu-link" onClick={() => setMenuTabIndex(2)}>
                  <span className="menu-title">Reports</span>
                </span>
              </div>
              <div className="menu-item">
                <div className="menu-content">
                  <div className="menu-separator" />
                </div>
              </div>
              <div
                className={`menu-item ${menuTabIndex === 3 ? "here show" : ""}`}
              >
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
              {menuTabIndex === 0 && (
                <>
                  <QuickMenu
                    to="/ScheduleOfWeek.aspx"
                    icon="ki-calendar text-success"
                    title="Weekly timeable"
                  />

                  <QuickMenu
                    to="/ScheduleExams.aspx"
                    icon="ki-calendar-tick text-danger"
                    title="Exam schedule"
                  />

                  <QuickMenu
                    to="https://flm.fpt.edu.vn/DefaultSignin"
                    icon="ki-external-drive text-info"
                    title="View Syllabuses"
                  />
                </>
              )}

{menuTabIndex === 1 && (
                <>
                  <QuickMenu
                    to="/ScheduleOfWeek.aspx"
                    icon="ki-message-add text-success"
                    title="Send application"
                  />
                  <QuickMenu
                    to="/ScheduleExams.aspx"
                    icon="ki-message-text text-info"
                    title="View application"
                  />
                  <QuickMenu
                    to="https://flm.fpt.edu.vn/DefaultSignin"
                    icon="ki-two-credit-cart text-warning"
                    title="Choose paid items"
                  />
                  <QuickMenu
                    to="https://flm.fpt.edu.vn/DefaultSignin"
                    icon="ki-handcart text-success"
                    title="Checkout"
                  />
                </>
              )}

              {menuTabIndex === 2 && (
                <>
                  <QuickMenu
                    to="/ScheduleOfWeek.aspx"
                    icon="ki-chart text-success"
                    title="Attendance report"
                  />
                  <QuickMenu
                    to="/ScheduleExams.aspx"
                    icon="ki-chart-line-up-2 text-danger"
                    title="Mark Report"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenuTab;
