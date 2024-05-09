import { useState } from "react";
import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import OverlayLoading from "../../_metronic/partials/layout/OverlayLoading";
import ShiftModal from "../components/ShiftModal";
import { useScheduleOfWeek } from "../hooks/useScheduleOfWeek";
import { Shift } from "../models/WeeklyTimeable";
import ImportCalendarModal from "../components/ImportCalendarModal";

const ScheduleOfWeek = () => {
  const [activityId, setActivityId] = useState<number | undefined>();
  const [importActive, setImportActive] = useState(false);
  const {
    shifts,
    futureShifts,
    days,
    yearOptions,
    weekOptions,
    loading,
    changeWeek,
    fetchSchedule,
  } = useScheduleOfWeek();

  return (
    <>
      <Toolbar title="Schedule of Week" breadcrum="Weekly timeable" />
      <div className="app-content flex-column-fluid">
        <div className="app-container container-fluid">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-10">
                <div className="d-flex align-items-center gap-5">
                  <select
                    className="form-select form-select-solid fw-bold fs-6 text-gray-600 w-150px"
                    data-placeholder="Select year"
                    name="ctl00$mainContent$drpYear"
                    id="ctl00_mainContent_drpYear"
                    onChange={fetchSchedule}
                  >
                    {yearOptions?.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        selected={option.selected}
                      >
                        Năm {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <button
                    className="btn btn-icon btn-light-primary"
                    data-bs-toggle="tooltip"
                    title="Previous week"
                    type="button"
                    onClick={() => changeWeek("prev")}
                  >
                    <i className="ki-outline ki-double-left fs-4 text-danger" />
                  </button>
                  <select
                    className="form-select form-select-solid fw-bold fs-6 text-gray-600 w-150px"
                    data-placeholder="Select week"
                    name="ctl00$mainContent$drpSelectWeek"
                    id="ctl00_mainContent_drpSelectWeek"
                    onChange={fetchSchedule}
                  >
                    {weekOptions?.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        selected={option.selected}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-icon btn-light-primary"
                    data-bs-toggle="tooltip"
                    title="Next week"
                    type="button"
                    onClick={() => changeWeek("next")}
                  >
                    <i className="ki-outline ki-double-right fs-4 text-danger" />
                  </button>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <button
                    type="button"
                    onClick={() => setImportActive(true)}
                    className="btn btn-light btn-active-light-primary fw-bold fs-6 px-7 py-3"
                  >
                    Import to Calendar
                  </button>
                </div>
              </div>
              <div
                className={`table-responsive mt-10 ${
                  loading ? "overlay overlay-block" : ""
                }`}
              >
                <table
                  className={`table table-bordered table-rounded gs-5 ${
                    loading ? "overlay-wrapper" : ""
                  }`}
                >
                  <thead>
                    <tr className="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
                      <th>SLOT</th>
                      {Array.from([
                        "MON",
                        "TUE",
                        "WED",
                        "THU",
                        "FRI",
                        "SAT",
                        "SUN",
                      ]).map((day, index) => (
                        <th
                          key={index}
                          className={
                            index === new Date().getDay() - 1
                              ? "text-primary"
                              : ""
                          }
                        >
                          {day} - {days[index]}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 12 }).map((_, index) => (
                      <tr key={index}>
                        <td>Slot {index + 1}</td>
                        {shifts?.[index]?.map(
                          (shift: Shift | undefined, dayIndex: number) => (
                            <td key={dayIndex}>
                              {shift ? (
                                <>
                                  <div
                                    className="d-flex align-items-center cursor-pointer"
                                    onClick={() =>
                                      setActivityId(shift.activityId)
                                    }
                                  >
                                    <span
                                      className={`bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-3 bg-${
                                        shift.status === 0
                                          ? "info"
                                          : shift.status === 1
                                          ? "success"
                                          : "danger"
                                      }`}
                                    />
                                    <div className="flex-grow-1">
                                      <div className="text-primary fw-semibold fs-5">
                                        {shift.courseName}
                                        {shift.online ? (
                                          <span className="bullet bullet-dot bg-success h-10px w-10px animation-blink ms-1"></span>
                                        ) : null}
                                      </div>
                                      <div className="text-gray-800 fw-semibold fs-6">
                                        {shift.time}
                                      </div>
                                      <div className="text-gray-500 fw-semibold fs-7">
                                        At room{" "}
                                        <span className="text-success opacity-75-hover fw-semibold">
                                          {shift.room}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              ) : null}
                            </td>
                          )
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <OverlayLoading show={loading} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShiftModal
        activityId={activityId}
        onHide={() => setActivityId(undefined)}
        show={activityId !== undefined}
      />
      <ImportCalendarModal
        shifts={futureShifts}
        show={importActive}
        onHide={() => setImportActive(false)}
      />
    </>
  );
};

export default ScheduleOfWeek;
