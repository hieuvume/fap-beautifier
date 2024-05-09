import { usePageDataCustom } from "../../_metronic/layout/core";
import { Course, Term } from "../models/Attendance";

export const useMarkReport = () => {
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
          const pattern = /^(.*?) \((.*?)\) \((.*?), from (.*?) - (.*?)\)$/;
          const match = fullText.match(pattern);
          const name = match ? match[1] : ""; // Tên môn học
          const code = match ? match[2] : "";
          const group = match ? match[3] : "";
          const date = match ? match[4] : "";
          const endDate = match ? match[5] : "";
          const link = rowA
            ? rowA.href.replace("https://fap.fpt.edu.vn", "")
            : "";
          const course = {
            name,
            code,
            group,
            date,
            endDate,
            link,
            active: !rowA,
          };
          courses.push(course);
        });
      }
      return courses;
    },
    markTable: (original) => {
      const html = original?.querySelector("#ctl00_mainContent_divGrade");
      if (!html) return "";
      html?.querySelectorAll("table").forEach((table, index) => {
        table.classList.add("table", "table-bordered", "table-hover");
        table.style.width = "100%";
      });
      html?.querySelector("caption")?.remove();
      return html.innerHTML;
    },
    result: (original) => {
      const html = original?.querySelector("#ctl00_mainContent_divGrade");
      if (!html) return <></>;
      const fullText = html.textContent;
      if (fullText?.includes("Attendance Fail")) {
        return <span className="text-danger">Attendance Fail</span>;
      } else if (fullText?.includes("Not Passed")) {
        return <span className="text-danger">Not Passed</span>;
      } else if (fullText?.includes("Suspended")) {
        return <span className="text-danger">Is Suspended</span>;
      } else if (fullText?.includes("Passed")) {
        return <span className="text-success">Passed</span>;
      }
      return <></>;
    },
  });

}