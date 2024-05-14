import { dayOfWeeks } from "../constants";
import { Shift } from "../models/WeeklyTimeable";
import useFetch from "./useFetch";

type Day = {
  date: string;
  active: boolean;
  shifts: Shift[];
};

export const useScheduleCurrentWeek = () => {
  return useFetch("/Report/ScheduleOfWeek.aspx", {
    days: (original) => {
      const table = original?.querySelectorAll("table")[2] as HTMLTableElement;
      if (table) {
        const dates = Array.from(table.rows[1].cells).map(
          (cell) => cell.textContent?.trim() || ""
        );
        const days: Day[] = [];
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
              const activityId = activityLink
                ?.getAttribute("href")
                ?.split("id=")[1];
              const courseName = activityLink?.textContent
                ?.trim()
                .replace("-", "");
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
              // if cell has .online-text
              const onlineText = cell.querySelector(".online-text");
              const date = dates[j - 1]; // dd/mm
              const startDate = new Date();
              const [day, month] = date.split("/").map((d) => parseInt(d));
              const startTime = new Date(
                startDate.getFullYear(),
                month - 1,
                day
              );
              const isToday =
                new Date().toDateString() === startTime.toDateString();
              const dayOfWeek = dayOfWeeks[j - 1];
              if (days.findIndex((day) => day.date === dayOfWeek) === -1) {
                days.push({
                  date: dayOfWeek,
                  active: isToday,
                  shifts: [],
                });
              }
              const shifts =
                days.find((day) => day.date === dayOfWeek)?.shifts || [];
              shifts.push({
                activityId: parseInt(activityId || "0"),
                courseName: courseName || "",
                room: room || "",
                time: time || "",
                dateTime: {
                  start: "",
                  end: "",
                },
                materialURL: "",
                meetingURL: "",
                status: status,
                online: onlineText ? true : false,
              });
            } catch (error) {
              console.log("Error", error);
            }
          }
        }
        // short day by date
        days.sort((a, b) => {
          const dayA = dayOfWeeks.indexOf(a.date);
          const dayB = dayOfWeeks.indexOf(b.date);
          return dayA - dayB;
        });
        return days;
      }
      return [];
    },
  });
};
