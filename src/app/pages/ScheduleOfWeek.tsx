import { useEffect, useState } from "react";
import { Shift } from "../models/WeeklyTimeable";
import useFormData from "../hooks/useFormData";

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

      if (!cell || cell.textContent?.trim() === '-') {
        continue
      }

      try {
        const activityLink = cell.querySelector('a[href*="ActivityDetail.aspx?id"]');
        const activityId = activityLink?.getAttribute('href')?.split('id=')[1];

        // Extracting the courseName
        const courseName = activityLink?.textContent?.trim().replace('-', '');

        const roomText = cell.textContent?.split(' at ')[1].split('<br>')[0];
        let room = roomText?.includes('-') ? roomText?.split(' - ')[0].trim() : roomText?.trim();
        if (room && room.length > 15) {
          room = room.substring(0, 15);
        }

        const statusText = cell.textContent?.match(/(Not yet|attended|absent)/i)?.[0].toLowerCase();
        let status = 0
        switch (statusText) {
          case 'not yet':
            status = 0;
            break;
          case 'attended':
            status = 1;
            break;
          case 'absent':
            status = 2;
            break;
        }

        // Extracting the time
        const time = cell.querySelector('span.label.label-success')?.textContent?.trim();

        // Extracting the syllabusURL
        const syllabusLink = cell.querySelector('a.label.label-warning');
        const syllabusURL = syllabusLink?.getAttribute('href');

        // Extracting the meetURL
        const meetLink = cell.querySelector('a.label.label-default');
        const meetURL = meetLink?.getAttribute('href');

        // if cell has .online-text
        const onlineText = cell.querySelector('.online-text');

        shifts[i - 2][j - 1] = {
          activityId: parseInt(activityId || '0'),
          courseName: courseName || '',
          room: room || '',
          time: time || '',
          materialURL: syllabusURL || '',
          meetingURL: meetURL || '',
          status: status,
          online: onlineText ? true : false
        }
      } catch (error) {
        console.log("Error", error)
      }
    }
  }
  return shifts
}

const ScheduleOfWeek = () => {
  const [shifts, setShifts] = useState<any>();
  const [yearOptions, setYearOptions] = useState<{ value: string, label: string, selected: boolean }[]>();
  const [weekOptions, setWeekOptions] = useState<{ value: string, label: string, selected: boolean }[]>();
  const { data } = useFormData()
  const [days, setDays] = useState<string[]>([])

  useEffect(() => {
    if (!window._data) return
    const table = window._data?.querySelectorAll("table")[2] as HTMLTableElement;
    setShifts(convertToScheduler(table));

    const days = Array.from(table.rows[1].cells).map(cell => cell.textContent?.trim() || "")
    setDays(days)

    const year = window._data?.querySelector('#ctl00_mainContent_drpYear') as HTMLSelectElement;
    setYearOptions(Array.from(year.options).map((option) => ({ value: option.value, label: option.text?.trim(), selected: option.selected })));

    const week = window._data?.querySelector('#ctl00_mainContent_drpSelectWeek') as HTMLSelectElement;
    setWeekOptions(Array.from(week.options).map((option) => ({ value: option.value, label: option.text?.trim()?.replace("To", "-"), selected: option.selected })));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeWeek = (direction: string) => {
    var selectWeek = document.getElementById('ctl00_mainContent_drpSelectWeek') as HTMLSelectElement;
    if (selectWeek === null) return;
    var currentIndex = selectWeek.selectedIndex;

    if (direction === 'prev' && currentIndex > 0) {
      selectWeek.selectedIndex = currentIndex - 1;
    } else if (direction === 'next' && currentIndex < selectWeek.options.length - 1) {
      selectWeek.selectedIndex = currentIndex + 1;
    }

    if (selectWeek.form) {
      selectWeek.form.submit();
    }
  }


  console.log("shifts", shifts);
  console.log(days)


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
            <div className="card-body">
              <form
                name="loginForm"
                id="kt_sign_in_form"
                className="form w-100"
                action="./ScheduleOfWeek.aspx"
                method="POST"
              >
                <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="ctl00$mainContent$drpSelectWeek" />
                <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
                <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
                <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value={data.viewStateValue} />
                <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value={data.viewStateGeneratorValue} />
                <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value={data.eventValidationValue} />
                <input type="hidden" name="ctl00$mainContent$message" id="ctl00_mainContent_message" />
                <div className="d-flex justify-content-between align-items-center mb-10">
                  <div className="d-flex align-items-center gap-5">
                    <select
                      className="form-select form-select-solid fw-bold fs-6 text-gray-600 w-150px"
                      data-placeholder="Select year"
                      name="ctl00$mainContent$drpYear"
                      id="ctl00_mainContent_drpYear"
                      onChange={(e) => {
                        e.currentTarget.form?.submit();
                      }}
                    >
                      {yearOptions?.map((option) => (
                        <option key={option.value} value={option.value} selected={option.selected}>
                          {option.label}
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
                      onClick={() => changeWeek('prev')}
                    >
                      <i className="ki-outline ki-double-left fs-4 text-danger" />
                    </button>
                    <select
                      className="form-select form-select-solid fw-bold fs-6 text-gray-600 w-150px"
                      data-placeholder="Select week"
                      name="ctl00$mainContent$drpSelectWeek"
                      id="ctl00_mainContent_drpSelectWeek"
                      onChange={(e) => {
                        e.currentTarget.form?.submit();
                      }}
                    >
                      {weekOptions?.map((option) => (
                        <option key={option.value} value={option.value} selected={option.selected}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <button
                      className="btn btn-icon btn-light-primary"
                      data-bs-toggle="tooltip"
                      title="Next week"
                      type="button"
                      onClick={() => changeWeek('next')}
                    >
                      <i className="ki-outline ki-double-right fs-4 text-danger" />
                    </button>
                  </div>
                  <div className="d-flex align-items-center gap-5">
                    <a
                      href='/Report/ScheduleOfWeek.aspx'
                      className="btn btn-light btn-active-light-primary fw-bold fs-6 px-7 py-3"
                    >
                      Reset
                    </a>
                  </div>
                </div>
              </form>
              <div className="table-responsive mt-10">
                <table className="table table-bordered table-rounded gs-5">
                  <thead>
                    <tr className="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
                      <th>SLOT</th>
                      {Array.from(["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]).map((day, index) => (
                        <th key={index}>{day} - {days[index]}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 12 }).map((_, index) => (
                      <tr key={index}>
                        <td>Slot {index + 1}</td>
                        {shifts?.[index].map((shift: Shift | undefined, dayIndex: number) => (
                          <td key={dayIndex}>
                            {shift ? (
                              <>
                                <div className="d-flex align-items-center cursor-pointer">
                                  <span className={`bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-3 bg-${shift.status === 0 ? 'info' : shift.status === 1 ? 'success' : 'danger'}`} />
                                  <div className="flex-grow-1">
                                    <div className="text-primary fw-semibold fs-5">
                                      {shift.courseName}
                                      {shift.online ? (<span className="bullet bullet-dot bg-success h-10px w-10px animation-blink ms-1"></span>) : null}
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
