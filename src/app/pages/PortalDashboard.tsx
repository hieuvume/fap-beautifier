import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import UpComingExams from "../components/UpComingExams";
import ScheduleCurrentWeek from "../components/ScheduleCurrentWeek";
import FastNews from "../components/FastNews";
import { usePortalDashboard } from "../hooks/usePortalDashboard";
import { Link } from "react-router-dom";

const PortalDashboard = () => {
  const { isRequireFeedback } = usePortalDashboard();

  return (
    <>
      <Toolbar title="Portal Dashboard" breadcrum="Portal" />
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
