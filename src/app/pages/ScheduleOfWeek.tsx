import { useEffect, useState } from "react";
import useData from "../hooks/useData";
import { Shift } from "../models/WeeklyTimeable";

declare global {
  interface Window {
    _data: Element;
  }
}

function convertToScheduler(table: HTMLTableElement) {
  if (!table) return []
  const shifts = Array.from({ length: table.rows.length - 2 }, () => Array.from({ length: table.rows[0].cells.length - 1 }, (): Shift | undefined => undefined))
  for (let i = 2; i < table.rows.length; i++) {
    for (let j = 1; j < table.rows[i].cells.length; j++) {
      const cell = table.rows[i].cells[j]
      const shift = cell.textContent?.trim() === '-' ? undefined : {
        activityId: 1,
        courseName: 'FPT',
        room: "BE",
        time: "10"
      }
      shifts[i - 2][j - 1] = shift
    }
  }
  return shifts
}

const ScheduleOfWeek = () => {
  const [shifts, setShifts] = useState<any>();

  useEffect(() => {
    const table = window._data?.querySelectorAll("table")[2] as HTMLTableElement;
    setShifts(convertToScheduler(table));
    console.log("setShifts", shifts);
    
    
  }, []);

  console.log(shifts);

  return (
    <>
      <div id="kt_app_toolbar" className="app-toolbar  pt-10 mb-0 ">
        <div
          id="kt_app_toolbar_container"
          className="app-container  container-fluid d-flex align-items-stretch "
        >
          <div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
            <div className="page-title d-flex flex-column justify-content-center gap-1 me-3">
              <h1 className="page-heading d-flex flex-column justify-content-center text-gray-900 fw-bold fs-3 m-0">
                Weekly timeable
              </h1>
              <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0">
                <li className="breadcrumb-item text-muted">
                  <a
                    href="/Student.aspx"
                    className="text-muted text-hover-primary"
                  >
                    Home{" "}
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <span className="bullet bg-gray-500 w-5px h-2px" />
                </li>
                <li className="breadcrumb-item text-muted">Weekly timeable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="app-content flex-column-fluid">
        <div className="app-container container-fluid">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-bordered table-rounded gs-5">
                  <thead>
                    <tr className="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
                      <th>SLOT</th>
                      <th>MON</th>
                      <th>TUE</th>
                      <th>WED</th>
                      <th>THU</th>
                      <th>FRI</th>
                      <th>SAT</th>
                      <th>SUN</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 12 }).map((_, index) => (
                      <tr key={index}>
                        <td>Slot {index + 1}</td>
                        {Array.from({ length: 7 }).map((_, dayIndex) => (
                          <td key={dayIndex}>
                            {index > 1 &&
                            index <= 4 &&
                            dayIndex >= 0 &&
                            dayIndex < 5 ? (
                              <>
                                <div className="d-flex align-items-center cursor-pointer">
                                  <span className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-3 bg-info" />
                                  <div className="flex-grow-1">
                                    <div className="text-primary fw-semibold fs-5">
                                      PRM392
                                    </div>
                                    <div className="text-gray-800 fw-semibold fs-6">
                                      10:20 - 11:00
                                    </div>
                                    <div className="text-gray-500 fw-semibold fs-7">
                                      At room{" "}
                                      <span className="text-success opacity-75-hover fw-semibold">
                                        DE-C405
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </>
                            ) : null}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleOfWeek;
