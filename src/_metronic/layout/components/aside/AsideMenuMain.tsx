import { useIntl } from "react-intl";
import { masterMenu } from "../../../../app/constants";
import { useLayout } from "../../core";
import { AsideMenuItem } from "./AsideMenuItem";

export function AsideMenuMain() {
  const intl = useIntl();
  const { menuTabIndex, setMenuTabIndex } = useLayout();

  return (
    <div
      id="kt_app_sidebar"
      className="app-sidebar"
      data-kt-drawer="true"
      data-kt-drawer-name="app-sidebar"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="225px"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
    >
      <div
        id="kt_app_sidebar_wrapper"
        className="flex-grow-1 hover-scroll-y mt-9 mb-5 px-2 mx-3 ms-lg-7 me-lg-5"
        data-kt-scroll="true"
        data-kt-scroll-activate="true"
        data-kt-scroll-height="auto"
        data-kt-scroll-dependencies="{default: false, lg: '#kt_app_header'}"
        data-kt-scroll-offset="5px"
      >
        <div className="mb-4">
          <div className="d-flex align-items-center position-relative mb-6">
            <i className="ki-outline ki-magnifier fs-4 text-gray-500 position-absolute ms-3 fw-bold" />
            <input
              type="text"
              id="kt_filter_search"
              className="form-control form-control-sm form-control-solid w-100 ps-10 border border-300 bg-light-active"
              placeholder="Find a view"
            />
            <i className="ki-solid ki-setting-4 fs-5 text-gray-500 position-absolute top-50 end-0 translate-middle-y fw-bold me-3" />
          </div>
          <div className="m-0">
            {masterMenu[menuTabIndex]?.menu?.map((menu, index) => (
              <AsideMenuItem
                key={index}
                {...menu}
                icon={`${menu.icon} text-${menu.color}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
