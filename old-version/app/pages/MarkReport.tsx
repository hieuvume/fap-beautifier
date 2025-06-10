import { Link } from "react-router-dom";
import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import { usePageData } from "../../_metronic/layout/core";
import OverlayLoading from "../../_metronic/partials/layout/OverlayLoading";
import CourseTab from "../components/CourseTab";
import { useMarkReport } from "../hooks/useMarkReport";
import { Term } from "../models/Attendance";

const MarkReport = () => {
  const { loading } = usePageData();
  const { terms, courses, markTable, result } = useMarkReport()

  const getActiveTerm = () => {
    const term = terms.find((term) => term.active);
    return `${term?.season} ${term?.year}`;
  };

  const getActiveCourse = () => {
    const course = courses.find((course) => course.active);
    if (course) {
      return `${course?.name} (${course?.code})`;
    } else {
      return `Select a course to see the report`;
    }
  };

  const onChangeTerm = (term: Term) => {};

  return (
    <>
      <Toolbar title="Mark Report" breadcrum="Mark Report" />
      <div className="app-content flex-column-fluid">
        <div className="app-container container-fluid">
          <div className="row">
            <div className="col-md-12">
              <ul className="nav nav-pills nav-pills-custom mb-3 flex-nowrap overflow-auto">
                {terms?.map((term, index) => (
                  <li
                    className="nav-item mb-3 me-3 me-lg-6"
                    role="presentation"
                    key={index}
                    onClick={() => onChangeTerm(term)}
                  >
                    <Link
                      to={term.link ?? ""}
                      onClick={(e) => {
                        if (!term.link) {
                          e.preventDefault();
                        }
                      }}
                      className={`nav-link d-flex flex-column flex-center overflow-hidden w-80px h-85px py-4 cursor-pointer ${
                        term.active ? "active" : ""
                      }`}
                    >
                      <span className="text-gray-800 fw-bold fs-4 d-block">
                        {term.year}
                      </span>
                      <span className="text-gray-500 fw-semibold fs-7">
                        {term.season}
                      </span>
                      <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 mb-5">
              <div
                className={`card h-xl-100 ${
                  loading ? "overlay overlay-block" : ""
                }`}
              >
                <div className="card-header border-0 pt-5">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bold text-gray-900">
                      Select course
                    </span>
                    <span className="text-muted mt-1 fw-semibold fs-7">
                      {getActiveTerm()}
                    </span>
                  </h3>
                </div>
                <div
                  className={`card-body pt-6 ${
                    loading ? "overlay-wrapper" : ""
                  }`}
                >
                  {courses?.map((course, index) => (
                    <>
                      <CourseTab key={index} onClick={() => {}} {...course} />
                      {index !== courses.length - 1 && (
                        <div className="separator separator-dashed my-4" />
                      )}
                    </>
                  ))}
                </div>
                <OverlayLoading show={loading} />
              </div>
            </div>
            <div className="col-xl-8 mb-5">
              <div
                className={`card card-flush h-xl-100 ${
                  loading ? "overlay overlay-block" : ""
                }`}
              >
                <div className="card-header border-0 pt-5">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bold text-gray-900">
                      Mark Report
                    </span>
                    <span className="text-muted mt-1 fw-semibold fs-7">
                      {getActiveCourse()}
                    </span>
                  </h3>
                  <div className="card-toolbar">
                    <span className="fw-bold text-uppercase">{result}</span>
                  </div>
                </div>
                <div
                  className={`card-body pt-6 ${
                    loading ? "overlay-wrapper" : ""
                  }`}
                >
                  <div dangerouslySetInnerHTML={{ __html: markTable }} />
                </div>
                <OverlayLoading show={loading} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarkReport;
