import { useMemo, useState } from "react";
import { usePageData, usePageDataCustom } from "../../_metronic/layout/core";
import { Shift } from "../models/WeeklyTimeable";

function convertToScheduler(original: Element) {
  const table = original?.querySelectorAll("table")[2] as HTMLTableElement;
  if (!table) return [];
  const shifts = Array.from({ length: table.rows.length - 2 }, () =>
    Array.from(
      { length: table.rows[0].cells.length - 1 },
      (): Shift | undefined => undefined
    )
  );
  const dates = Array.from(table.rows[1].cells).map(
    (cell) => cell.textContent?.trim() || ""
  );
  const yearElement = original?.querySelector(
    "#ctl00_mainContent_drpYear"
  ) as HTMLSelectElement;
  const currentYear = Array.from(yearElement.options).find(
    (option) => option.selected
  )?.value;

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
          ?.textContent?.trim(); // (12:50-15:10)

        // Extracting the syllabusURL
        const syllabusLink = cell.querySelector("a.label.label-warning");
        const syllabusURL = syllabusLink?.getAttribute("href");

        // Extracting the meetURL
        const meetLink = cell.querySelector("a.label.label-default");
        const meetURL = meetLink?.getAttribute("href");

        // if cell has .online-text
        const onlineText = cell.querySelector(".online-text");

        const date = dates[j - 1]; // dd/mm
        const [day, month] = date.split("/");
        const [startHour, startMinute, endHour, endMinute] =
          time?.replace(/[()]/g, "").split(/[-:]/) || [];
        const startTime = new Date(
          parseInt(currentYear || "0"),
          parseInt(month) - 1,
          parseInt(day),
          parseInt(startHour),
          parseInt(startMinute)
        );
        const endTime = new Date(
          parseInt(currentYear || "0"),
          parseInt(month) - 1,
          parseInt(day),
          parseInt(endHour),
          parseInt(endMinute)
        );

        shifts[i - 2][j - 1] = {
          activityId: parseInt(activityId || "0"),
          courseName: courseName || "",
          room: room || "",
          time: time || "",
          dateTime: {
            start: startTime.toISOString(),
            end: endTime.toISOString(),
          },
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

export const useScheduleOfWeek = () => {
  const [loading, setLoading] = useState(false);
  const { setData } = usePageData();
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
      return convertToScheduler(original);
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

  const futureShifts = useMemo(() => {
    return shifts
      .map((row) =>
        row.filter(
          (shift) =>
            new Date(shift?.dateTime.start ?? "").getTime() >
            new Date().getTime()
        )
      )
      .flat() as Shift[];
  }, [shifts]);

  return {
    shifts,
    days,
    yearOptions,
    weekOptions,
    viewStateValue,
    viewStateGeneratorValue,
    eventValidationValue,
    currentWeekValue,
    loading,
    futureShifts,
    changeWeek,
    fetchSchedule,
  };
};
