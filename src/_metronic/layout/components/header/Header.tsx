import { FC } from 'react'
import HeaderMenuTab from './HeaderMenuTab'
import useData from '../../../../app/hooks/useData'
import { getFirstTwoDigits, toAbsoluteUrl } from '../../../helpers'

const Header: FC = () => {
  const { data } = useData({
    rollNumber: '#ctl00_lblLogIn',
    fullName: '#ctl00_lblLogIn',
    campusName: '#ctl00_lblCampusName',
  })

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
                <a href="/Student.aspx">
                  <img
                    alt="Logo"
                    src={toAbsoluteUrl('assets/media/fpt/logo.png')}
                    className="mh-60px"
                  />
                </a>
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
                  {/*begin::Menu*/}
                  <div
                    className="menu menu-rounded menu-column menu-lg-row menu-active-bg menu-title-gray-700 menu-state-gray-900 menu-icon-gray-500 menu-arrow-gray-500 menu-state-icon-primary menu-state-bullet-primary fw-semibold fs-6 align-items-stretch my-5 my-lg-0 px-2 px-lg-0"
                    id="#kt_app_header_menu"
                    data-kt-menu="true"
                  >
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                      data-kt-menu-placement="bottom-start"
                      className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2"
                    >
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-title">{data?.campusName ? data?.campusName?.replace('CAMPUS: ', '')?.replace('-',' - ') : 'Portal Dashboard'}</span>
                        <span className="menu-arrow d-lg-none" />
                      </span>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                      data-kt-menu-placement="bottom-start"
                      className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2"
                    >
                      <span className="menu-link">
                        <span className="menu-title">Apps</span>
                        <span className="menu-arrow d-lg-none" />
                      </span>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                      data-kt-menu-placement="bottom-start"
                      className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2"
                    >
                      {/*begin:Menu link*/}
                      <span className="menu-link">
                        <span className="menu-title">Help</span>
                        <span className="menu-arrow d-lg-none" />
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="https://preview.keenthemes.com/html/metronic/docs/base/utilities"
                            target="_blank"
                            title="Check out over 200 in-house components, plugins and ready for use solutions"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-dismiss="click"
                            data-bs-placement="right"
                          >
                            <span className="menu-icon">
                              <i className="ki-outline ki-rocket fs-2" />
                            </span>
                            <span className="menu-title">Components</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="https://preview.keenthemes.com/html/metronic/docs"
                            target="_blank"
                            title="Check out the complete documentation"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-dismiss="click"
                            data-bs-placement="right"
                          >
                            <span className="menu-icon">
                              <i className="ki-outline ki-abstract-26 fs-2" />
                            </span>
                            <span className="menu-title">Documentation</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="https://preview.keenthemes.com/metronic8/demo60/layout-builder.html"
                            title="Build your layout and export HTML for server side integration"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-dismiss="click"
                            data-bs-placement="right"
                          >
                            <span className="menu-icon">
                              <i className="ki-outline ki-switch fs-2" />
                            </span>
                            <span className="menu-title">Layout Builder</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a
                            className="menu-link"
                            href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog"
                            target="_blank"
                          >
                            <span className="menu-icon">
                              <i className="ki-outline ki-code fs-2" />
                            </span>
                            <span className="menu-title">Changelog v8.2.5</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end::Menu*/}
                </div>
                {/*end::Menu holder*/}
              </div>
              {/*end::Menu wrapper*/}
            </div>
            {/*begin::Navbar*/}
            <div className="app-navbar flex-shrink-0 gap-2">
              {/*begin::Quick links*/}
              <div className="app-navbar-item me-lg-3">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_share_earn"
                  className="btn btn-sm btn-flex flex-center border border-300 bg-light-light btn-active-color-gray-900 px-0 px-lg-3 min-w-35px h-35px"
                >
                  <i className="ki-outline ki-share pe-0 pe-lg-2 fs-3" />
                  <span className="d-none d-lg-inline">Share</span>
                </a>
              </div>
              {/*end::Quick links*/}
              {/*begin::My apps*/}
              <div className="app-navbar-item ms-1">
                {/*begin::Menu- wrapper*/}
                <div
                  className="btn btn-sm btn-icon btn-custom h-35px w-35px"
                  data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                  data-kt-menu-attach="parent"
                  data-kt-menu-placement="bottom-end"
                >
                  <i className="ki-outline ki-notification-status fs-3" />
                </div>
                {/*begin::My apps*/}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column w-100 w-sm-350px"
                  data-kt-menu="true"
                >
                  {/*begin::Card*/}
                  <div className="card">
                    {/*begin::Card header*/}
                    <div className="card-header">
                      {/*begin::Card title*/}
                      <div className="card-title">My Apps</div>
                      {/*end::Card title*/}
                      {/*begin::Card toolbar*/}
                      <div className="card-toolbar">
                        {/*begin::Menu*/}
                        <button
                          type="button"
                          className="btn btn-sm btn-icon btn-active-light-primary me-n3"
                          data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                          data-kt-menu-placement="bottom-end"
                        >
                          <i className="ki-outline ki-setting-3 fs-2" />
                        </button>
                        {/*begin::Menu 3*/}
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                          data-kt-menu="true"
                        >
                          {/*begin::Heading*/}
                          <div className="menu-item px-3">
                            <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                              Payments
                            </div>
                          </div>
                          {/*end::Heading*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Create Invoice
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link flex-stack px-3">
                              Create Payment
                              <span
                                className="ms-2"
                                data-bs-toggle="tooltip"
                                title="Specify a target name for future usage and reference"
                              >
                                <i className="ki-outline ki-information fs-6" />
                              </span>
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Generate Bill
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div
                            className="menu-item px-3"
                            data-kt-menu-trigger="hover"
                            data-kt-menu-placement="right-end"
                          >
                            <a href="#" className="menu-link px-3">
                              <span className="menu-title">Subscription</span>
                              <span className="menu-arrow" />
                            </a>
                            {/*begin::Menu sub*/}
                            <div className="menu-sub menu-sub-dropdown w-175px py-4">
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Plans
                                </a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Billing
                                </a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Statements
                                </a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu separator*/}
                              <div className="separator my-2" />
                              {/*end::Menu separator*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <div className="menu-content px-3">
                                  {/*begin::Switch*/}
                                  <label className="form-check form-switch form-check-custom form-check-solid">
                                    {/*begin::Input*/}
                                    <input
                                      className="form-check-input w-30px h-20px"
                                      type="checkbox"
                                      defaultValue={1}
                                      defaultChecked={true}
                                      name="notifications"
                                    />
                                    {/*end::Input*/}
                                    {/*end::Label*/}
                                    <span className="form-check-label text-muted fs-6">
                                      Recuring
                                    </span>
                                    {/*end::Label*/}
                                  </label>
                                  {/*end::Switch*/}
                                </div>
                              </div>
                              {/*end::Menu item*/}
                            </div>
                            {/*end::Menu sub*/}
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3 my-1">
                            <a href="#" className="menu-link px-3">
                              Settings
                            </a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu 3*/}
                        {/*end::Menu*/}
                      </div>
                      {/*end::Card toolbar*/}
                    </div>
                    {/*end::Card header*/}
                    {/*begin::Card body*/}
                    <div className="card-body py-5">
                      {/*begin::Scroll*/}
                      <div className="mh-450px scroll-y me-n5 pe-5">
                        {/*begin::Row*/}
                        <div className="row g-2">
                          {/*begin::Col*/}
                          <div className="col-4">
                            <a
                              href="#"
                              className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                            >
                              <img
                                src={toAbsoluteUrl("assets/media/svg/brand-logos/amazon.svg")}
                                className="w-25px h-25px mb-2"
                                alt=""
                              />
                              <span className="fw-semibold">AWS</span>
                            </a>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-4">
                            <a
                              href="#"
                              className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                            >
                              <img
                                src={toAbsoluteUrl("assets/media/svg/brand-logos/angular-icon-1.svg")}
                                className="w-25px h-25px mb-2"
                                alt=""
                              />
                              <span className="fw-semibold">AngularJS</span>
                            </a>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-4">
                            <a
                              href="#"
                              className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                            >
                              <img
                                src={toAbsoluteUrl("assets/media/svg/brand-logos/atica.svg")}
                                className="w-25px h-25px mb-2"
                                alt=""
                              />
                              <span className="fw-semibold">Atica</span>
                            </a>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-4">
                            <a
                              href="#"
                              className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                            >
                              <img
                                src={toAbsoluteUrl("assets/media/svg/brand-logos/beats-electronics.svg")}
                                className="w-25px h-25px mb-2"
                                alt=""
                              />
                              <span className="fw-semibold">Music</span>
                            </a>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-4">
                            <a
                              href="#"
                              className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                            >
                              <img
                                src={toAbsoluteUrl("assets/media/svg/brand-logos/codeigniter.svg")}
                                className="w-25px h-25px mb-2"
                                alt=""
                              />
                              <span className="fw-semibold">Codeigniter</span>
                            </a>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-4">
                            <a
                              href="#"
                              className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                            >
                              <img
                                src={toAbsoluteUrl("assets/media/svg/brand-logos/bootstrap-4.svg")}
                                className="w-25px h-25px mb-2"
                                alt=""
                              />
                              <span className="fw-semibold">Bootstrap</span>
                            </a>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-4">
                            <a
                              href="#"
                              className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                            >
                              <img
                                src={toAbsoluteUrl("assets/media/svg/brand-logos/google-tag-manager.svg")}
                                className="w-25px h-25px mb-2"
                                alt=""
                              />
                              <span className="fw-semibold">GTM</span>
                            </a>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-4">
                            <a
                              href="#"
                              className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                            >
                              <img
                                src={toAbsoluteUrl("assets/media/svg/brand-logos/disqus.svg")}
                                className="w-25px h-25px mb-2"
                                alt=""
                              />
                              <span className="fw-semibold">Disqus</span>
                            </a>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-4">
                            <a
                              href="#"
                              className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                            >
                              <img
                                src={toAbsoluteUrl("assets/media/svg/brand-logos/dribbble-icon-1.svg")}
                                className="w-25px h-25px mb-2"
                                alt=""
                              />
                              <span className="fw-semibold">Dribble</span>
                            </a>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-4">
                            <a
                              href="#"
                              className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                            >
                              <img
                                src={toAbsoluteUrl("assets/media/svg/brand-logos/google-play-store.svg")}
                                className="w-25px h-25px mb-2"
                                alt=""
                              />
                              <span className="fw-semibold">Play Store</span>
                            </a>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-4">
                            <a
                              href="#"
                              className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                            >
                              <img
                                src={toAbsoluteUrl("assets/media/svg/brand-logos/google-podcasts.svg")}
                                className="w-25px h-25px mb-2"
                                alt=""
                              />
                              <span className="fw-semibold">Podcasts</span>
                            </a>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-4">
                            <a
                              href="#"
                              className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                            >
                              <img
                                src={toAbsoluteUrl("assets/media/svg/brand-logos/figma-1.svg")}
                                className="w-25px h-25px mb-2"
                                alt=""
                              />
                              <span className="fw-semibold">Figma</span>
                            </a>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-4">
                            <a
                              href="#"
                              className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                            >
                              <img
                                src={toAbsoluteUrl("assets/media/svg/brand-logos/github.svg")}
                                className="w-25px h-25px mb-2"
                                alt=""
                              />
                              <span className="fw-semibold">Github</span>
                            </a>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-4">
                            <a
                              href="#"
                              className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                            >
                              <img
                                src={toAbsoluteUrl("assets/media/svg/brand-logos/gitlab.svg")}
                                className="w-25px h-25px mb-2"
                                alt=""
                              />
                              <span className="fw-semibold">Gitlab</span>
                            </a>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-4">
                            <a
                              href="#"
                              className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                            >
                              <img
                                src={toAbsoluteUrl("assets/media/svg/brand-logos/instagram-2-1.svg")}
                                className="w-25px h-25px mb-2"
                                alt=""
                              />
                              <span className="fw-semibold">Instagram</span>
                            </a>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-4">
                            <a
                              href="#"
                              className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                            >
                              <img
                                src={toAbsoluteUrl("assets/media/svg/brand-logos/pinterest-p.svg")}
                                className="w-25px h-25px mb-2"
                                alt=""
                              />
                              <span className="fw-semibold">Pinterest</span>
                            </a>
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Scroll*/}
                    </div>
                    {/*end::Card body*/}
                  </div>
                  {/*end::Card*/}
                </div>
                {/*end::My apps*/}
                {/*end::Menu wrapper*/}
              </div>
              {/*end::My apps*/}
              {/*begin::Notifications*/}
              <div className="app-navbar-item ms-1">
                {/*begin::Menu- wrapper*/}
                <div
                  className="btn btn-sm btn-icon btn-custom h-35px w-35px"
                  data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                  data-kt-menu-attach="parent"
                  data-kt-menu-placement="bottom-end"
                >
                  <i className="ki-outline ki-category fs-3" />
                </div>
                {/*begin::Menu*/}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px"
                  data-kt-menu="true"
                  id="kt_menu_notifications"
                >
                  {/*begin::Heading*/}
                  <div
                    className="d-flex flex-column bgi-no-repeat rounded-top"
                    style={{
                      backgroundImage:
                        'url("assets/media/misc/menu-header-bg.jpg")'
                    }}
                  >
                    {/*begin::Title*/}
                    <h3 className="text-white fw-semibold px-9 mt-10 mb-6">
                      Notifications
                      <span className="fs-8 opacity-75 ps-3">24 reports</span>
                    </h3>
                    {/*end::Title*/}
                    {/*begin::Tabs*/}
                    <ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9">
                      <li className="nav-item">
                        <a
                          className="nav-link text-white opacity-75 opacity-state-100 pb-4"
                          data-bs-toggle="tab"
                          href="#kt_topbar_notifications_1"
                        >
                          Alerts
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-white opacity-75 opacity-state-100 pb-4 active"
                          data-bs-toggle="tab"
                          href="#kt_topbar_notifications_2"
                        >
                          Updates
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-white opacity-75 opacity-state-100 pb-4"
                          data-bs-toggle="tab"
                          href="#kt_topbar_notifications_3"
                        >
                          Logs
                        </a>
                      </li>
                    </ul>
                    {/*end::Tabs*/}
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Tab content*/}
                  <div className="tab-content">
                    {/*begin::Tab panel*/}
                    <div
                      className="tab-pane fade"
                      id="kt_topbar_notifications_1"
                      role="tabpanel"
                    >
                      {/*begin::Items*/}
                      <div className="scroll-y mh-325px my-5 px-8">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-primary">
                                <i className="ki-outline ki-abstract-28 fs-2 text-primary" />
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                Project Alice
                              </a>
                              <div className="text-gray-500 fs-7">
                                Phase 1 development
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">1 hr</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-danger">
                                <i className="ki-outline ki-information fs-2 text-danger" />
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                HR Confidential
                              </a>
                              <div className="text-gray-500 fs-7">
                                Confidential staff documents
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">2 hrs</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-warning">
                                <i className="ki-outline ki-briefcase fs-2 text-warning" />
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                Company HR
                              </a>
                              <div className="text-gray-500 fs-7">
                                Corporeate staff profiles
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">5 hrs</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-success">
                                <i className="ki-outline ki-abstract-12 fs-2 text-success" />
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                Project Redux
                              </a>
                              <div className="text-gray-500 fs-7">
                                New frontend admin theme
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">2 days</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-primary">
                                <i className="ki-outline ki-colors-square fs-2 text-primary" />
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                Project Breafing
                              </a>
                              <div className="text-gray-500 fs-7">
                                Product launch status update
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">21 Jan</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-info">
                                <i className="ki-outline ki-picture fs-2 text-info" />
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                Banner Assets
                              </a>
                              <div className="text-gray-500 fs-7">
                                Collection of banner images
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">21 Jan</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Symbol*/}
                            <div className="symbol symbol-35px me-4">
                              <span className="symbol-label bg-light-warning">
                                <i className="ki-outline ki-color-swatch fs-2 text-warning" />
                              </span>
                            </div>
                            {/*end::Symbol*/}
                            {/*begin::Title*/}
                            <div className="mb-0 me-2">
                              <a
                                href="#"
                                className="fs-6 text-gray-800 text-hover-primary fw-bold"
                              >
                                Icon Assets
                              </a>
                              <div className="text-gray-500 fs-7">
                                Collection of SVG icons
                              </div>
                            </div>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">20 March</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Items*/}
                      {/*begin::View more*/}
                      <div className="py-3 text-center border-top">
                        <a
                          href="pages/user-profile/activity.html"
                          className="btn btn-color-gray-600 btn-active-color-primary"
                        >
                          View All
                          <i className="ki-outline ki-arrow-right fs-5" />
                        </a>
                      </div>
                      {/*end::View more*/}
                    </div>
                    {/*end::Tab panel*/}
                    {/*begin::Tab panel*/}
                    <div
                      className="tab-pane fade show active"
                      id="kt_topbar_notifications_2"
                      role="tabpanel"
                    >
                      {/*begin::Wrapper*/}
                      <div className="d-flex flex-column px-9">
                        {/*begin::Section*/}
                        <div className="pt-10 pb-0">
                          {/*begin::Title*/}
                          <h3 className="text-gray-900 text-center fw-bold">
                            Get Pro Access
                          </h3>
                          {/*end::Title*/}
                          {/*begin::Text*/}
                          <div className="text-center text-gray-600 fw-semibold pt-1">
                            Outlines keep you honest. They stoping you from
                            amazing poorly about drive
                          </div>
                          {/*end::Text*/}
                          {/*begin::Action*/}
                          <div className="text-center mt-5 mb-9">
                            <a
                              href="#"
                              className="btn btn-sm btn-primary px-6"
                              data-bs-toggle="modal"
                              data-bs-target="#kt_modal_upgrade_plan"
                            >
                              Upgrade
                            </a>
                          </div>
                          {/*end::Action*/}
                        </div>
                        {/*end::Section*/}
                        {/*begin::Illustration*/}
                        <div className="text-center px-4">
                          <img
                            className="mw-100 mh-200px"
                            alt="image"
                            src={toAbsoluteUrl("assets/media/illustrations/sketchy-1/1.png")}
                          />
                        </div>
                        {/*end::Illustration*/}
                      </div>
                      {/*end::Wrapper*/}
                    </div>
                    {/*end::Tab panel*/}
                    {/*begin::Tab panel*/}
                    <div
                      className="tab-pane fade"
                      id="kt_topbar_notifications_3"
                      role="tabpanel"
                    >
                      {/*begin::Items*/}
                      <div className="scroll-y mh-325px my-5 px-8">
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-success me-4">
                              200 OK
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              New order
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">Just now</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-danger me-4">
                              500 ERR
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              New customer
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">2 hrs</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-success me-4">
                              200 OK
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              Payment process
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">5 hrs</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-warning me-4">
                              300 WRN
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              Search query
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">2 days</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-success me-4">
                              200 OK
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              API connection
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">1 week</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-success me-4">
                              200 OK
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              Database restore
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">Mar 5</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-warning me-4">
                              300 WRN
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              System update
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">May 15</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-warning me-4">
                              300 WRN
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              Server OS update
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">Apr 3</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-warning me-4">
                              300 WRN
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              API rollback
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">Jun 30</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-danger me-4">
                              500 ERR
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              Refund process
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">Jul 10</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-danger me-4">
                              500 ERR
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              Withdrawal process
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">Sep 10</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex flex-stack py-4">
                          {/*begin::Section*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Code*/}
                            <span className="w-70px badge badge-light-danger me-4">
                              500 ERR
                            </span>
                            {/*end::Code*/}
                            {/*begin::Title*/}
                            <a
                              href="#"
                              className="text-gray-800 text-hover-primary fw-semibold"
                            >
                              Mail tasks
                            </a>
                            {/*end::Title*/}
                          </div>
                          {/*end::Section*/}
                          {/*begin::Label*/}
                          <span className="badge badge-light fs-8">Dec 10</span>
                          {/*end::Label*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Items*/}
                      {/*begin::View more*/}
                      <div className="py-3 text-center border-top">
                        <a
                          href="pages/user-profile/activity.html"
                          className="btn btn-color-gray-600 btn-active-color-primary"
                        >
                          View All
                          <i className="ki-outline ki-arrow-right fs-5" />
                        </a>
                      </div>
                      {/*end::View more*/}
                    </div>
                    {/*end::Tab panel*/}
                  </div>
                  {/*end::Tab content*/}
                </div>
                {/*end::Menu*/}
                {/*end::Menu wrapper*/}
              </div>
              {/*end::Notifications*/}
              {/*begin::User menu*/}
              <div className="app-navbar-item ms-1">
                {/*begin::Menu wrapper*/}
                <div
                  className="cursor-pointer symbol position-relative symbol-35px"
                  data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                  data-kt-menu-attach="parent"
                  data-kt-menu-placement="bottom-end"
                >
                  <img src={toAbsoluteUrl("assets/media/avatars/300-2.jpg")} alt="user" />
                  <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle mb-1 bottom-0 start-100 animation-blink" />
                </div>
                {/*begin::User account menu*/}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                  data-kt-menu="true"
                >
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content d-flex align-items-center px-3">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-50px me-5">
                        <img alt="Logo" src={toAbsoluteUrl("assets/media/avatars/300-2.jpg")} />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Username*/}
                      <div className="d-flex flex-column">
                        <div className="fw-bold d-flex align-items-center fs-5">
                          {data?.fullName ?? 'Nguyen Van A'}
                          <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                            K{getFirstTwoDigits(data?.rollNumber ?? '')}
                          </span>
                        </div>
                        <span
                          className="fw-semibold text-muted text-hover-primary fs-7"
                        >
                          {data?.rollNumber ?? 'Roll Number'}
                        </span>
                      </div>
                      {/*end::Username*/}
                    </div>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-2" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a href="/User/Profile.aspx" className="menu-link px-5">
                      Student Profile
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a href="/User/verProfile.aspx" className="menu-link px-5">
                      <span className="menu-text">Update Profile</span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-2" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div
                    className="menu-item px-5"
                    data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                    data-kt-menu-placement="left-start"
                    data-kt-menu-offset="-15px, 0"
                  >
                    <a href="#" className="menu-link px-5">
                      <span className="menu-title position-relative">
                        Mode
                        <span className="ms-5 position-absolute translate-middle-y top-50 end-0">
                          <i className="ki-outline ki-night-day theme-light-show fs-2" />
                          <i className="ki-outline ki-moon theme-dark-show fs-2" />
                        </span>
                      </span>
                    </a>
                    {/*begin::Menu*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
                      data-kt-menu="true"
                      data-kt-element="theme-mode-menu"
                    >
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3 my-0">
                        <a
                          href="#"
                          className="menu-link px-3 py-2"
                          data-kt-element="mode"
                          data-kt-value="light"
                        >
                          <span className="menu-icon" data-kt-element="icon">
                            <i className="ki-outline ki-night-day fs-2" />
                          </span>
                          <span className="menu-title">Light</span>
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3 my-0">
                        <a
                          href="#"
                          className="menu-link px-3 py-2"
                          data-kt-element="mode"
                          data-kt-value="dark"
                        >
                          <span className="menu-icon" data-kt-element="icon">
                            <i className="ki-outline ki-moon fs-2" />
                          </span>
                          <span className="menu-title">Dark</span>
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3 my-0">
                        <a
                          href="#"
                          className="menu-link px-3 py-2"
                          data-kt-element="mode"
                          data-kt-value="system"
                        >
                          <span className="menu-icon" data-kt-element="icon">
                            <i className="ki-outline ki-screen fs-2" />
                          </span>
                          <span className="menu-title">System</span>
                        </a>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a
                      href="/Student.aspx?logout=true"
                      className="menu-link px-5"
                    >
                      Sign Out
                    </a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::User account menu*/}
                {/*end::Menu wrapper*/}
              </div>
              {/*end::User menu*/}
              {/*begin::Header menu toggle*/}
              <div className="app-navbar-item d-lg-none" title="Show header menu">
                <button
                  className="btn btn-sm btn-icon btn-custom h-35px w-35px"
                  id="kt_header_secondary_mobile_toggle"
                >
                  <i className="ki-outline ki-element-4 fs-2" />
                </button>
              </div>
              {/*end::Header menu toggle*/}
              {/*begin::Header menu toggle*/}
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
              {/*end::Header menu toggle*/}
            </div>
            {/*end::Navbar*/}
          </div>
          {/*end::Header primary wrapper*/}
        </div>
        {/*end::Header primary container*/}
      </div>
      {/*end::Header primary*/}
      {/*begin::Header secondary*/}
      <HeaderMenuTab />
      {/*end::Header secondary*/}
    </div>
  )
}

export { Header }
