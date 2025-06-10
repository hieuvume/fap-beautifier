import { usePageDataCustom } from "../../_metronic/layout/core";
import { AttendanceReportShift, Course, Term } from "../models/Attendance";

export const useAttendanceReport = () => {
  return usePageDataCustom({
    terms: (original) => {
      if (!original) {
        return [];
      }
      const terms: Term[] = [];
      const table = original.querySelector(
        "#ctl00_mainContent_divTerm table"
      ) as HTMLTableElement;
      if (table) {
        const rows = table.rows;
        Array.from(rows).forEach((row, index) => {
          const rowA = row.cells[0].querySelector("a");
          const fullText = row ? row.innerText : "";
          const year = fullText.slice(-4);
          const season = fullText.slice(0, -4);
          const link = rowA
            ? rowA.href.replace("https://fap.fpt.edu.vn", "")
            : "";
          const term = {
            year,
            season,
            link,
            active: !rowA,
          };
          terms.push(term);
        });
      }
      return terms.reverse();
    },
    courses: (original) => {
      if (!original) return [];
      const courses: Course[] = [];
      const table = original.querySelector(
        "#ctl00_mainContent_divCourse table"
      ) as HTMLTableElement;
      if (table) {
        const rows = table.rows;
        Array.from(rows).forEach((row, index) => {
          const rowA = row.cells[0].querySelector("a");
          const fullText = row ? row.innerText : "";
          const pattern = /(.+)\((.+)\)\((.+),start (.+)\)/;
          const match = fullText.match(pattern);
          const name = match ? match[1] : ""; // Tên môn học
          const code = match ? match[2] : "";
          const group = match ? match[3] : "";
          const date = match ? match[4] : "";
          const link = rowA
            ? rowA.href.replace("https://fap.fpt.edu.vn", "")
            : "";
          const course = {
            name,
            code,
            group,
            date,
            link,
            active: !rowA,
          };
          courses.push(course);
        });
      }
      return courses;
    },
    shifts: (original) => {
      if (!original) return [];
      const shifts: AttendanceReportShift[] = [];
      const table = original.querySelector(".table1") as HTMLTableElement;
      if (table) {
        const rows = table?.rows;
        Array.from(rows).forEach((row, index) => {
          if (index <= 1 || index === rows.length - 1) return;
          const cells = row.querySelectorAll("td");
          const [day, date] = cells[1]?.textContent?.split(" ") ?? ["", ""];
          const [slot, time] = cells[2]?.textContent?.split("_") ?? ["", ""];
          const room = cells[3]?.textContent ?? "";
          const lecturer = cells[4]?.textContent ?? "";
          const group = cells[5]?.textContent ?? "";
          const status = cells[6]?.textContent ?? "";
          shifts.push({
            day,
            date,
            slot,
            time: time.replace(/[()]/g, ""),
            room,
            group,
            lecturer,
            status,
          });
        });
      }
      return shifts;
    },
  });
}