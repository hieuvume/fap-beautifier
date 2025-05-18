import { useFapDataCustom } from '@/app/providers/fap-data-provider';
import { useMemo } from 'react';
import { AttendanceData, AttendanceShift, Course, Term } from './types';

export const useAttendanceReport = () => {
  // Use useFapDataCustom to fetch and parse data from FAP
  const { terms, courses, shifts } = useFapDataCustom({
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
        Array.from(rows).forEach((row) => {
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
        Array.from(rows).forEach((row) => {
          const rowA = row.cells[0].querySelector("a");
          const fullText = row ? row.innerText : "";
          const pattern = /(.+)\((.+)\)\((.+),start (.+)(?:,end (.+))?\)/;
          const match = fullText.match(pattern);
          const name = match ? match[1].trim() : "";
          const code = match ? match[2].trim() : "";
          const group = match ? match[3].trim() : "";
          const date = match ? match[4].trim() : "";
          const endDate = match && match[5] ? match[5].trim() : undefined;
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
    shifts: (original) => {
      if (!original) return [];
      const shifts: AttendanceShift[] = [];
      const table = original.querySelector(".table1") as HTMLTableElement;
      if (table) {
        const rows = table?.rows;
        Array.from(rows).forEach((row, index) => {
          if (index <= 1 || index === rows.length - 1) return;
          const cells = row.querySelectorAll("td");
          const [day, date] = cells[1]?.textContent?.split(" ") ?? ["", ""];
          const [slot, time] = cells[2]?.textContent?.split("_") ?? ["", ""];
          const room = cells[3]?.textContent?.trim() ?? "";
          const lecturer = cells[4]?.textContent?.trim() ?? "";
          const group = cells[5]?.textContent?.trim() ?? "";
          const status = cells[6]?.textContent?.trim() ?? "";
          shifts.push({
            day,
            date,
            slot,
            time: time.replace(/[()]/g, ""),
            room,
            lecturer,
            group,
            status,
          });
        });
      }
      return shifts;
    },
  });

  // Combine data into a single object for component use
  const attendanceData: AttendanceData = {
    terms: terms || [],
    courses: courses || [],
    shifts: shifts || []
  };

  const activeTerm = useMemo(() => {
    const term = attendanceData.terms.find(term => term.active);
    return term ? `${term.season} ${term.year}` : 'Loading...';
  }, [attendanceData.terms]);

  const activeCourse = useMemo(() => {
    const course = attendanceData.courses.find(course => course.active);
    return course ? `${course.name} (${course.code})` : 'Select a course to see the report';
  }, [attendanceData.courses]);

  const presentedCount = useMemo(() => {
    if (!attendanceData.shifts.length) return 0;
    return attendanceData.shifts.reduce((count, shift) => {
      return count + (shift.status === 'Present' ? 1 : 0);
    }, 0);
  }, [attendanceData.shifts]);

  return {
    attendanceData,
    activeTerm,
    activeCourse,
    presentedCount
  };
}; 