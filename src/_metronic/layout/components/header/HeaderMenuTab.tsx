import { Fragment } from "react/jsx-runtime";
import { masterMenu } from "../../../../app/constants";
import { useLayout } from "../../core";
import { Link } from "react-router-dom";

type QuickMenuProps = {
  to: string;
  icon: string;
  color: string;
  title: string;
  reload?: boolean;
};

const QuickMenu: React.FC<QuickMenuProps> = ({
  to,
  icon,
  title,
  color,
  reload,
}) => {
  const isExternal = to && to.startsWith("http");

  return (
    <div className="menu-item">
      {isExternal ? (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="menu-link"
        >
          <span className="menu-icon">
            <i className={`ki-outline fs-4 ${icon} text-${color}`} />
          </span>
          <span className="menu-title">{title}</span>
        </a>
      ) : (
        <Link className="menu-link active" to={to} reloadDocument={reload}>
          <span className="menu-icon">
            <i className={`ki-outline fs-4 ${icon} text-${color}`} />
          </span>
          <span className="menu-title">{title}</span>
        </Link>
      )}
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
              {masterMenu.map((m, i) => (
                <Fragment key={i}>
                  <div
                    className={`menu-item ${menuTabIndex === i ? "here show" : ""
                      }`}
                  >
                    <span
                      className="menu-link"
                      onClick={() => setMenuTabIndex(i)}
                    >
                      <span className="menu-title">{m.name}</span>
                    </span>
                  </div>
                  <div className="menu-item">
                    <div className="menu-content">
                      <div className="menu-separator" />
                    </div>
                  </div>
                </Fragment>
              ))}
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
              {masterMenu[menuTabIndex]?.quickAccess?.map((menu, index) => (
                <QuickMenu key={index} {...menu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenuTab;
