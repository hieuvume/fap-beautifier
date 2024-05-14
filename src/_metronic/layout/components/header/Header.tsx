import { FC } from "react";
import { getFirstTwoDigits, toAbsoluteUrl } from "../../../helpers";
import { usePageDataSelector } from "../../core";
import HeaderMenuTab from "./HeaderMenuTab";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const data = usePageDataSelector({
    rollNumber: "#ctl00_lblLogIn",
    fullName: "#ctl00_lblLogIn",
    campusName: "#ctl00_lblCampusName",
  });

  return (
    <div id="kt_app_header" className="app-header">
      <div className="app-header-primary">
        <div
          className="app-container container-fluid d-flex align-items-stretch justify-content-between"
          id="kt_app_header_primary_container"
        >
          <div className="d-flex flex-stack flex-grow-1">
            <div className="d-flex">
              <div className="app-header-logo d-flex flex-center gap-2 me-lg-15">
                <button
                  className="btn btn-icon btn-sm btn-custom d-flex d-lg-none ms-n2"
                  id="kt_app_header_menu_toggle"
                >
                  <i className="ki-outline ki-abstract-14 fs-2" />
                </button>
                <Link to="/Student.aspx">
                  <img
                    alt="Logo"
                    src={toAbsoluteUrl("assets/media/fpt/logo.png")}
                    className="mh-60px"
                  />
                </Link>
              </div>
              <div
                className="d-flex align-items-stretch"
                id="kt_app_header_menu_wrapper"
              >
                <div
                  className="app-header-menu app-header-mobile-drawer align-items-stretch"
                  data-kt-drawer="true"
                  data-kt-drawer-name="app-header-menu"
                  data-kt-drawer-activate="{default: true, lg: false}"
                  data-kt-drawer-overlay="true"
                  data-kt-drawer-width="{default:'200px', '300px': '250px'}"
                  data-kt-drawer-direction="start"
                  data-kt-drawer-toggle="#kt_app_header_menu_toggle"
                  data-kt-swapper="true"
                  data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
                  data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_menu_wrapper'}"
                >
                  <div
                    className="menu menu-rounded menu-column menu-lg-row menu-active-bg menu-title-gray-700 menu-state-gray-900 menu-icon-gray-500 menu-arrow-gray-500 menu-state-icon-primary menu-state-bullet-primary fw-semibold fs-6 align-items-stretch my-5 my-lg-0 px-2 px-lg-0"
                    id="#kt_app_header_menu"
                    data-kt-menu="true"
                  >
                    <div
                      data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                      data-kt-menu-placement="bottom-start"
                      className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2"
                    >
                      <span className="menu-link">
                        <span className="menu-title">
                          {data?.campusName
                            ? data?.campusName
                                ?.replace("CAMPUS: ", "")
                                ?.replace("-", " - ")
                            : "Portal Dashboard"}
                        </span>
                        <span className="menu-arrow d-lg-none" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="app-navbar flex-shrink-0 gap-2">
              <div className="app-navbar-item me-lg-3">
                <a
                  href="https://chromewebstore.google.com/detail/fap-beautifier/klogkfpcjbigeccifgjdmbogfabhmoce/reviews"
                  className="btn btn-sm btn-flex flex-center border border-300 bg-light-light btn-active-color-gray-900 px-0 px-lg-3 min-w-35px h-35px"
                >
                  <i className="ki-outline ki-share pe-0 pe-lg-2 fs-3" />
                  <span className="d-none d-lg-inline">
                    Vote for FAP Beautifier
                  </span>
                </a>
              </div>
              <div className="app-navbar-item ms-1">
                <div
                  className="cursor-pointer symbol position-relative symbol-35px"
                  data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                  data-kt-menu-attach="parent"
                  data-kt-menu-placement="bottom-end"
                >
                  <img
                    src={toAbsoluteUrl("assets/media/avatars/300-1.jpg")}
                    alt="user"
                  />
                  <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle mb-1 bottom-0 start-100 animation-blink" />
                </div>
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                  data-kt-menu="true"
                >
                  <div className="menu-item px-3">
                    <div className="menu-content d-flex align-items-center px-3">
                      <div className="symbol symbol-50px me-5">
                        <img
                          alt="Logo"
                          src={toAbsoluteUrl("assets/media/avatars/300-1.jpg")}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <div className="fw-bold d-flex align-items-center fs-5">
                          {data?.fullName ?? "Nguyen Van A"}
                          <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                            K{getFirstTwoDigits(data?.rollNumber ?? "")}
                          </span>
                        </div>
                        <span className="fw-semibold text-muted text-hover-primary fs-7">
                          {data?.rollNumber ?? "Roll Number"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="separator my-2" />
                  <div className="menu-item px-5">
                    <Link to="/User/Profile.aspx" className="menu-link px-5">
                      Student Profile
                    </Link>
                  </div>
                  <div className="menu-item px-5">
                    <Link to="/User/verProfile.aspx" className="menu-link px-5">
                      <span className="menu-text">Update Profile</span>
                    </Link>
                  </div>
                  <div className="separator my-2" />
                  <div className="menu-item px-5">
                    <a
                      href="/Student.aspx?logout=true"
                      className="menu-link px-5"
                    >
                      Sign Out
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="app-navbar-item d-lg-none"
                title="Show header menu"
              >
                <button
                  className="btn btn-sm btn-icon btn-custom h-35px w-35px"
                  id="kt_header_secondary_mobile_toggle"
                >
                  <i className="ki-outline ki-element-4 fs-2" />
                </button>
              </div>
              <div
                className="app-navbar-item d-lg-none me-n3"
                title="Show header menu"
              >
                <button
                  className="btn btn-sm btn-icon btn-custom h-35px w-35px"
                  id="kt_app_sidebar_mobile_toggle"
                >
                  <i className="ki-outline ki-setting-3 fs-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeaderMenuTab />
    </div>
  );
};

export { Header };
