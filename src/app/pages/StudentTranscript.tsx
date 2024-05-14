import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import { useStudentTranscript } from "../hooks/useStudentTranscript";
import { GradeCourse } from "../models/GradeTranscript";

const StudentTranscript = () => {
  const { gpaList, averageGPA } = useStudentTranscript();

  const getGradeColor = (course: GradeCourse) => {
    if (course.status.includes("Not passed")) {
      if (course.credit === 0) return "dark";
      return "danger";
    } else if (course.status.includes("Passed")) {
      if (course.credit === 0) return "dark";
      return "success";
    } else if (course.status.includes("Not started")) {
      return "secondary";
    } else if (course.status.includes("Studying")) {
      return "warning";
    }
  };

  return (
    <>
      <Toolbar
        title={"Grade report for transcript"}
        breadcrum="Grade Transcript"
      />
      <div className="app-content flex-column-fluid">
        <div className="app-container container-fluid ">
          <div className="card">
            <div className="card-body">
              <h3 className="text-gray-800 fw-bold mb-4">GPA Overview</h3>
              <div className="d-flex flex-wrap gap-4">
                <div className="d-flex flex-column flex-grow-1">
                  <span className="text-muted fs-7 fw-bold">Average GPA</span>
                  <span className="text-dark fs-2 fw-bolder">
                    {averageGPA.toFixed(2)}
                  </span>
                </div>
                <div className="d-flex flex-column flex-grow-1">
                  <span className="text-muted fs-7 fw-bold">Total Credits</span>
                  <span className="text-dark fs-2 fw-bolder">
                    {gpaList.reduce((acc, gpa) => acc + gpa.totalCredit, 0)}
                  </span>
                </div>
              </div>
              <div className="d-flex flex-wrap gap-5 my-2">
                <div className="d-flex fs-6 fw-semibold align-items-center">
                  <div
                    className="bullet bg-success me-2"
                    style={{width: "12px", height: "12px", borderRadius: "3px"}}
                  ></div>
                  <div className="fw-semibold text-gray-600">
                    Passed
                  </div>
                </div>
                <div className="d-flex fs-6 align-items-center">
                  <div
                    className="bullet bg-danger me-2"
                    style={{width: "12px", height: "12px", borderRadius: "3px"}}
                  ></div>
                  <div className="fw-semibold text-gray-600">
                    Not passed
                  </div>
                </div>
                <div className="d-flex fs-6 align-items-center">
                  <div
                    className="bullet bg-warning me-2"
                    style={{width: "12px", height: "12px", borderRadius: "3px"}}
                  ></div>
                  <div className="fw-semibold text-gray-600">
                    Studying
                  </div>
                </div>
                <div className="d-flex fs-6 align-items-center">
                  <div
                    className="bullet bg-gray me-2"
                    style={{width: "12px", height: "12px", borderRadius: "3px"}}
                  ></div>
                  <div className="fw-semibold text-gray-600">
                    Not started
                  </div>
                </div>
                <div className="d-flex fs-6 align-items-center">
                  <div
                    className="bullet bg-dark me-2"
                    style={{width: "12px", height: "12px", borderRadius: "3px"}}
                  ></div>
                  <div className="fw-semibold text-gray-600">
                    Not included in GPA
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-row-dashed align-middle fs-6 gy-4 my-0 pb-3 dataTable">
                  <tbody>
                    {gpaList.map((item, index) => (
                      <tr key={index}>
                        <td className="min-w-150px">
                          <div className="position-relative ps-6 pe-3 py-2">
                            <div className="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-info" />
                            <span className="mb-1 text-gray-900 text-hover-primary fw-bold">
                              Term {item.term} -{" "}
                              {item.semester.session
                                ? `${item.semester.session} ${item.semester.year}`
                                : "Not started"}
                            </span>
                            <div className="fs-7 text-muted fw-bold">
                              GPA: {item.gpa.toFixed(2)}
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex gap-2 mb-2 flex-wrap">
                            {item.courses.map((course, index) => (
                              <span
                                className={`badge badge-${getGradeColor(
                                  course
                                )}`}
                                key={index}
                              >
                                {course.subjectCode}
                                {course.grade > 0 && (
                                  <>
                                    {" |"}
                                    <span className="fw-bolder ms-1">
                                      {course.grade.toFixed(1)} x{" "}
                                      {course.credit}
                                    </span>
                                  </>
                                )}
                              </span>
                            ))}
                          </div>
                          <div className="fs-7 text-muted fw-bold">
                            {item.courses.length} courses, {item.totalCredit}{" "}
                            credits
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentTranscript;
