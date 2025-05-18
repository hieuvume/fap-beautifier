import { Link } from "react-router-dom";
import { useUpComingExams } from "../hooks/useUpComingExams";
import OverlayLoading from "../../_metronic/partials/layout/OverlayLoading";

const UpComingExams = () => {
  const { exams, loading } = useUpComingExams();

  return (
    <div
      className={`card card-flush h-xl-100 ${
        loading ? "overlay overlay-block overlay-wrapper" : ""
      }`}
    >
      <div className="card-header pt-7">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold text-gray-900">
            Upcoming exam subjects
          </span>
        </h3>
        <div className="card-toolbar">
          <Link to="/Exam/ScheduleExams.aspx" className="btn btn-sm btn-light">
            View All
          </Link>
        </div>
      </div>
      <div className="card-body">
        <div
          className="hover-scroll-overlay-y pe-6 me-n6"
          style={{ height: 300 }}
        >
          {!loading && exams.length === 0 && (
            <div className="text-center py-10">
              <h4 className="text-gray-400 fs-4">No exams found</h4>
            </div>
          )}
          {exams.map((exam, index) => (
            <div
              className="border border-dashed border-gray-300 rounded px-7 py-3 mb-6"
              key={index}
            >
              <div className="d-flex flex-stack mb-1">
                <div className="me-3">
                  <span className="fs-6 text-gray-800 text-hover-primary fw-bold">
                    {exam.subjectCode}
                  </span>
                </div>
                <div className="m-0">
                  <span className="badge badge-light-success fs-base">
                    {exam.type}
                  </span>
                </div>
              </div>
              <div className="d-flex flex-stack">
                <span className="text-gray-500 fw-bold">
                  {exam.date} ({exam.time})
                </span>
                <span className="text-gray-500 fw-bold">{exam.room}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <OverlayLoading show={loading} />
    </div>
  );
};

export default UpComingExams;
