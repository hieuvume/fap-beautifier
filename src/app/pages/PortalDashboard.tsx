import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import UpComingExams from "../components/UpComingExams";
import ScheduleCurrentWeek from "../components/ScheduleCurrentWeek";
import FastNews from "../components/FastNews";

const PortalDashboard = () => {
  return (
    <>
      <Toolbar title="Portal Dashboard" breadcrum="Portal" />
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
    </>
  );
};

export default PortalDashboard;
