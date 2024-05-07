import { useState } from "react";
import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import { usePageData, usePageDataCustom } from "../../_metronic/layout/core";
import { Shift } from "../models/WeeklyTimeable";
import OverlayLoading from "../../_metronic/partials/layout/OverlayLoading";
import ShiftModal from "../components/ShiftModal";

function convertToScheduler(table: HTMLTableElement) {
  if (!table) return [];
  const shifts = Array.from({ length: table.rows.length - 2 }, () =>
    Array.from(
      { length: table.rows[0].cells.length - 1 },
      (): Shift | undefined => undefined
    )
  );
  for (let i = 2; i < table.rows.length; i++) {
    for (let j = 1; j < table.rows[i].cells.length; j++) {
      const cell = table.rows[i].cells[j];
      if (!cell || cell.textContent?.trim() === "-") {
        continue;
      }
      try {
        const activityLink = cell.querySelector(
          'a[href*="ActivityDetail.aspx?id"]'
        );
        const activityId = activityLink?.getAttribute("href")?.split("id=")[1];
        const courseName = activityLink?.textContent?.trim().replace("-", "");
        const cellContent = cell.textContent;
        const room =
          (cell?.textContent?.match(/\(/g) || [])?.length > 2
            ? cellContent?.split(" at ")[1]?.split("(")[0]
            : cellContent?.split(" at ")[1]?.split(" ")[0];

        const statusText = cell.textContent
          ?.match(/(Not yet|attended|absent)/i)?.[0]
          .toLowerCase();
        let status = 0;
        switch (statusText) {
          case "not yet":
            status = 0;
            break;
          case "attended":
            status = 1;
            break;
          case "absent":
            status = 2;
            break;
        }
        // Extracting the time
        const time = cell
          .querySelector("span.label.label-success")
          ?.textContent?.trim();

        // Extracting the syllabusURL
        const syllabusLink = cell.querySelector("a.label.label-warning");
        const syllabusURL = syllabusLink?.getAttribute("href");

        // Extracting the meetURL
        const meetLink = cell.querySelector("a.label.label-default");
        const meetURL = meetLink?.getAttribute("href");

        // if cell has .online-text
        const onlineText = cell.querySelector(".online-text");

        shifts[i - 2][j - 1] = {
          activityId: parseInt(activityId || "0"),
          courseName: courseName || "",
          room: room || "",
          time: time || "",
          materialURL: syllabusURL || "",
          meetingURL: meetURL || "",
          status: status,
          online: onlineText ? true : false,
        };
      } catch (error) {
        console.log("Error", error);
      }
    }
  }
  return shifts;
}

const ScheduleOfWeek = () => {
  const [loading, setLoading] = useState(false);
  const { setData } = usePageData();
  const [activityId, setActivityId] = useState<number | undefined>();
  const {
    shifts,
    days,
    yearOptions,
    weekOptions,
    viewStateValue,
    viewStateGeneratorValue,
    eventValidationValue,
    currentWeekValue,
  } = usePageDataCustom({
    shifts: (original) => {
      if (!original) return [];
      const table = original?.querySelectorAll("table")[2] as HTMLTableElement;
      return convertToScheduler(table);
    },
    days: (original) => {
      if (!original) return [];
      const table = original?.querySelectorAll("table")[2] as HTMLTableElement;
      return Array.from(table.rows[1].cells).map(
        (cell) => cell.textContent?.trim() || ""
      );
    },
    yearOptions: (original) => {
      if (!original) return [];
      const year = original?.querySelector(
        "#ctl00_mainContent_drpYear"
      ) as HTMLSelectElement;
      if (!year) return [];
      return Array.from(year.options).map((option) => ({
        value: option.value,
        label: option.text?.trim(),
        selected: option.selected,
      }));
    },
    weekOptions: (original) => {
      if (!original) return [];
      const week = original?.querySelector(
        "#ctl00_mainContent_drpSelectWeek"
      ) as HTMLSelectElement;
      if (!week) return [];
      return Array.from(week.options).map((option) => ({
        value: option.value,
        label: option.text?.trim()?.replace("To", "-"),
        selected: option.selected,
      }));
    },
    currentWeekValue: (original) => {
      if (!original) return 0;
      const week = original?.querySelector(
        "#ctl00_mainContent_drpSelectWeek"
      ) as HTMLSelectElement;
      if (!week) return 0;
      const currentWeekValue = Array.from(week.options).find(
        (option) => option.selected
      )?.value;
      return currentWeekValue ? currentWeekValue : "1";
    },
    viewStateValue: (original) => {
      const viewState = original?.querySelector(
        "#__VIEWSTATE"
      ) as HTMLInputElement;
      return viewState ? viewState.value : "";
    },
    viewStateGeneratorValue: (original) => {
      const viewStateGenerator = original?.querySelector(
        "#__VIEWSTATEGENERATOR"
      ) as HTMLInputElement;
      return viewStateGenerator ? viewStateGenerator.value : "";
    },
    eventValidationValue: (original) => {
      const eventValidation = original?.querySelector(
        "#__EVENTVALIDATION"
      ) as HTMLInputElement;
      return eventValidation ? eventValidation.value : "";
    },
  });

  const changeWeek = (direction: string) => {
    var selectWeek = document.getElementById(
      "ctl00_mainContent_drpSelectWeek"
    ) as HTMLSelectElement;
    if (selectWeek === null) return;
    var currentIndex = selectWeek.selectedIndex;

    if (direction === "prev" && currentIndex > 0) {
      selectWeek.selectedIndex = currentIndex - 1;
    } else if (
      direction === "next" &&
      currentIndex < selectWeek.options.length - 1
    ) {
      selectWeek.selectedIndex = currentIndex + 1;
    }
    fetchSchedule();
  };

  const fetchSchedule = () => {
    setLoading(true);
    const year = (
      document.getElementById("ctl00_mainContent_drpYear") as HTMLSelectElement
    ).value;
    const week = (
      document.getElementById(
        "ctl00_mainContent_drpSelectWeek"
      ) as HTMLSelectElement
    ).value;
    fetch("/Report/ScheduleOfWeek.aspx", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        __EVENTTARGET: "ctl00$mainContent$drpSelectWeek",
        __EVENTARGUMENT: "",
        __LASTFOCUS: "",
        __VIEWSTATE: viewStateValue,
        __VIEWSTATEGENERATOR: viewStateGeneratorValue,
        __EVENTVALIDATION: eventValidationValue,
        ctl00$mainContent$drpYear: year,
        ctl00$mainContent$drpSelectWeek: week,
      }).toString(),
    })
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, "text/html");
        const table = htmlDoc.querySelector(".container") as Element;
        setData(table);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onReset = () => {
    const weekSelect = document.getElementById(
      "ctl00_mainContent_drpSelectWeek"
    ) as HTMLSelectElement;
    weekSelect.selectedIndex =
      weekOptions?.findIndex((option) => option.value === currentWeekValue) ||
      0;
    fetchSchedule();
  };

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
                    onClick={onReset}
                    className="btn btn-light btn-active-light-primary fw-bold fs-6 px-7 py-3"
                  >
                    Reset
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
    </>
  );
};

export default ScheduleOfWeek;
