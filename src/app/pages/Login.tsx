import { useEffect, useState } from "react";
import { toAbsoluteUrl } from "../../_metronic/helpers";
import { usePageDataCustom, usePageDataSelector } from "../../_metronic/layout/core";

const Login = () => {
  const [campusId, setCampusId] = useState('')

  const { message } = usePageDataSelector({
    message: '#ctl00_mainContent_lblMessage'
  })

  const { viewStateValue, viewStateGeneratorValue, eventValidationValue } = usePageDataCustom({
    viewStateValue: (original) => {
      const viewState = original?.querySelector('#__VIEWSTATE') as HTMLInputElement;
      return viewState ? viewState.value : '';
    },
    viewStateGeneratorValue: (original) => {
      const viewStateGenerator = original?.querySelector('#__VIEWSTATEGENERATOR') as HTMLInputElement;
      return viewStateGenerator ? viewStateGenerator.value : '';
    },
    eventValidationValue: (original) => {
      const eventValidation = original?.querySelector('#__EVENTVALIDATION') as HTMLInputElement;
      return eventValidation ? eventValidation.value : '';
    },
  })

  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.style.display = 'flex';
      rootElement.style.flex = '1';
    }
    const savedCampusId = localStorage.getItem('lastCampus');
    if (savedCampusId) {
      setCampusId(savedCampusId);
    }
  }, [])

  const setEventTarget = (targetValue: string) => {
    const eventTarget = document.getElementById("__EVENTTARGET") as HTMLInputElement;
    if (eventTarget) {
      eventTarget.value = targetValue;
    }
  }

  const onGoogleLogin = () => {
    localStorage.setItem('lastCampus', campusId);
    setEventTarget("ctl00$mainContent$btnLogin");
  }

  const onFeIdLogin = () => {
    setEventTarget("ctl00$mainContent$btnloginFeId");
  }


  return (
    <div className="d-flex flex-column flex-root" id="kt_app_root">
      <div className="d-flex flex-column flex-lg-row flex-column-fluid">
        <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
          <div className="d-flex flex-center flex-column flex-lg-row-fluid">
            <div className="w-lg-500px p-10">
              <form
                name="loginForm"
                id="kt_sign_in_form"
                className="form w-100"
                action="./Default.aspx"
                method="POST"
              >
                <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="ctl00$mainContent$btnLogin" />
                <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
                <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
                <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value={viewStateValue} />
                <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value={viewStateGeneratorValue} />
                <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value={eventValidationValue} />
                <input type="hidden" name="ctl00$mainContent$message" id="ctl00_mainContent_message" />

                <div className="text-center mb-11">
                  <h1 className="text-gray-900 fw-bolder mb-3">Sign In</h1>
                  <div className="text-gray-500 fw-semibold fs-6">
                    Sinh viên, Giảng viên, Cán bộ ĐH-FPT
                  </div>
                </div>
                {message ? (
                  <div className="alert alert-danger d-flex align-items-center p-5 mb-10">
                    <div className="d-flex flex-column">
                      <span>{message}</span>
                    </div>
                  </div>
                ) : null}
                <div className="row g-3 mb-9">
                  <div className="fv-row mb-2">
                    <select
                      className="form-select form-select-lg fw-bolder h-auto"
                      name="ctl00$mainContent$ddlCampus"
                      value={campusId}
                      onChange={(e) => setCampusId(e?.target?.value)}
                    >
                      <option value="">Select Campus</option>
                      <option value="3">FU-Hòa Lạc</option>
                      <option value="4">FU-Hồ Chí Minh</option>
                      <option value="5">FU-Đà Nẵng</option>
                      <option value="6">FU-Cần Thơ</option>
                      <option value="7">FU-Quy Nhơn</option>
                    </select>
                  </div>
                  <input type="hidden" name="ctl00$mainContent$ddlSwitchCampus" value={campusId} />
                  <div className="col-md-12">
                    <button
                      type="submit"
                      onClick={onGoogleLogin}
                      className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                    >
                      <img
                        alt="Logo"
                        src={toAbsoluteUrl("assets/media/svg/google-icon.svg")}
                        className="h-15px me-3"
                      />
                      Sign in with Google
                    </button>
                  </div>
                </div>
                <div className="separator separator-content my-14">
                  <span className="w-125px text-gray-500 fw-semibold fs-7">
                    Or with FeID
                  </span>
                </div>
                <div className="d-grid mb-10">
                  <button
                    type="submit"
                    onClick={onFeIdLogin}
                    className="btn btn-primary"
                  >
                    <span className="indicator-label">Sign in with FeID</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-lg-500px d-flex flex-stack px-10 mx-auto">
            <div className="d-flex fw-semibold text-primary fs-base gap-5">
              <a href="http://cms.fpt.edu.vn" target="_blank" rel="noreferrer">
                CMS
              </a>
              <a href="http://library.fpt.edu.vn/" target="_blank" rel="noreferrer">
                Library
              </a>
              <a href="http://library.books24x7.com/" target="_blank" rel="noreferrer">
                Books24x7
              </a>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
          style={{ backgroundImage: `url("${toAbsoluteUrl("assets/media/fpt/background.png")}")` }}
        >
          <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
            <span className="mb-0 mb-lg-12">
              <img
                alt="Logo"
                src="https://vectorseek.com/wp-content/uploads/2023/08/FPT-University-Logo-Vector.svg-.png"
                className="h-60px h-lg-75px"
              />
            </span>
            <img
              className="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20"
              src={toAbsoluteUrl("assets/media/fpt/small-background.jpg")}
              alt=""
            />
            <h1 className="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7">
              FPT University Academic Portal
            </h1>
            <div className="d-none d-lg-block text-white fs-base text-center">
              As an education brand with international influence,<br />
              FPT Education has expanded to a full range of educational levels, <br />
              contributing to nurturing high-quality human resources for the labor market.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login