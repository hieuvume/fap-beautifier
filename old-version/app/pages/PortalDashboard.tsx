import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import UpComingExams from "../components/UpComingExams";
import ScheduleCurrentWeek from "../components/ScheduleCurrentWeek";
import FastNews from "../components/FastNews";
import { usePortalDashboard } from "../hooks/usePortalDashboard";
import { Link } from "react-router-dom";

const PortalDashboard = () => {
  const {
    isRequireFeedback,
    accountBalance,
    tuitionContent,
    EOSClientDownloadLink,
  } = usePortalDashboard();

  return (
    <>
      <Toolbar
        title="Portal Dashboard"
        breadcrum="Portal"
        EOSDownloadLink={EOSClientDownloadLink}
      />
      {isRequireFeedback ? (
        <div className="app-content flex-column-fluid">
          <div className="app-container container-fluid ">
            <div className="card">
              <div className="card-body p-lg-17">
                <div className="text-center mb-5">
                  <h3 className="fs-2x text-gray-900 mb-3">Feedbacks</h3>
                  <div className="fs-5 fw-semibold">
                    Now is the time to take feedbacks on teachers and subjects
                    which you are learning! The feedbacks will help FPT
                    University to have information about teachers and the
                    teaching of teachers. Take all your feebacks before you view
                    the information about learning (such as grade, attendance
                    ...) please! This page will display on your screen, unless
                    you take all your feedbacks.
                  </div>

                  <Link
                    to="/Feedback/StudentFeedBack.aspx"
                    className="btn btn-primary mt-8"
                  >
                    Ý kiến về việc giảng dạy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="app-content flex-column-fluid">
          <div className="app-container container-fluid">
            {/* <div className="alert alert-info">
              Trở thành người đồng hành phát triển Fap Beautifier, đóng góp tại:{" "}
              <a href="https://github.com/hieuvume/fap-beautifier">
                https://github.com/hieuvume/fap-beautifier
              </a>
            </div> */}

            {tuitionContent && (
              <div className="alert alert-dismissible bg-light-danger border border-danger border-dashed d-flex flex-column flex-sm-row w-100 p-5 mb-10">
                <i className="ki-duotone ki-message-text-2 fs-2hx text-danger me-4 mb-5 mb-sm-0">
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                </i>
                <div className="d-flex flex-column pe-0 pe-sm-10">
                  <h6 className="mb-1">{tuitionContent}</h6>
                  {accountBalance && (
                    <span dangerouslySetInnerHTML={{__html: accountBalance}}/>
                  )}
                </div>
              </div>
            )}

            <div className="row g-5 gx-xl-10 mb-5 mb-xl-10">
              <div className="col-xl-8">
                <ScheduleCurrentWeek />
              </div>
              <div className="col-xl-4">
                <UpComingExams />
              </div>
              <div className="col-xl-12">
                <FastNews />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortalDashboard;
