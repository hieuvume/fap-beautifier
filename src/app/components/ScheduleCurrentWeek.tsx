import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import OverlayLoading from "../../_metronic/partials/layout/OverlayLoading";
import { useScheduleCurrentWeek } from "../hooks/useScheduleCurrentWeek";
import ShiftModal from "./ShiftModal";
import { useState } from "react";

const ScheduleCurrentWeek = () => {
  const [activityId, setActivityId] = useState<number | undefined>();
  const { data, loading } = useScheduleCurrentWeek();
  return (
    <div
      className={`card h-xl-100 ${
        loading ? "overlay overlay-block overlay-wrapper" : ""
      }`}
    >
      <div className="card-header position-relative py-0 border-bottom-2">
        <ul
          className="nav nav-stretch nav-pills nav-pills-custom d-flex mt-3"
          role="tablist"
        >
          {data?.days?.map((day, index) => (
            <li
              key={index}
              className="nav-item p-0 ms-0 me-8"
              role="presentation"
            >
              <a
                className={`nav-link btn btn-color-muted px-0 ${
                  day.active ? "active" : ""
                }`}
                data-bs-toggle="tab"
                href={`#weely-timeable-tab-${index}`}
                aria-selected="true"
                role="tab"
              >
                <span className="nav-text fw-semibold fs-4 mb-3">
                  {day.date}
                </span>
                <span className="bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded" />
              </a>
            </li>
          ))}
        </ul>
        <div className="card-toolbar">
          <Link
            to={"/Report/ScheduleOfWeek.aspx"}
            className="btn btn-sm btn-light d-flex align-items-center px-4"
          >
            <div className="text-gray-600 fw-bold">View All</div>
            <i className="ki-outline ki-calendar-8 fs-1 ms-2 me-0" />
          </Link>
        </div>
      </div>
      <div className="card-body">
        <div className="tab-content mb-2">
          {data?.days?.map((day, index) => (
            <div
              key={index}
              className={`tab-pane fade ${day.active ? "active show" : ""}`}
              id={`weely-timeable-tab-${index}`}
              role="tabpanel"
            >
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th className="min-w-150px p-0" />
                      <th className="min-w-200px p-0" />
                      <th className="min-w-100px p-0" />
                      <th className="min-w-80px p-0" />
                    </tr>
                  </thead>
                  <tbody>
                    {day.shifts.map((shift, index) => (
                      <Fragment key={index}>
                        <tr>
                          <td className="fs-6 fw-bold text-gray-800">
                            {shift.time
                              .replace(/[()]/g, "")
                              .replace("-", " - ")}
                          </td>
                          <td className="fs-6 fw-bold text-gray-500">
                            <span className="text-gray-800">
                              {shift.courseName}
                            </span>
                          </td>
                          <td className="fs-6 fw-bold text-gray-500">
                            Room:{" "}
                            <span className="text-gray-800">{shift.room}</span>
                          </td>
                          <td className="pe-0 text-end">
                            <button
                              className="btn btn-sm btn-light"
                              onClick={() => setActivityId(shift.activityId)}
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                        {index !== day.shifts.length - 1 && (
                          <tr>
                            <td
                              className="bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2"
                              colSpan={4}
                            >
                              Break time
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
      <OverlayLoading show={loading} />
      <ShiftModal
        activityId={activityId}
        onHide={() => setActivityId(undefined)}
        show={activityId !== undefined}
      />
    </div>
  );
};

export default ScheduleCurrentWeek;
