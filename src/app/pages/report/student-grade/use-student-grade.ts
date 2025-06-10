import { useFapDataCustom } from '@/app/providers/fap-data-provider';
import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { Course, GradeData, Term } from './types';

export const useStudentGrade = () => {
  const intl = useIntl();
  
  // Use useFapDataCustom to fetch and parse data from FAP
  const { terms, courses, markTable, resultText } = useFapDataCustom({
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
          // Use the correct pattern from the old version
          const pattern = /^(.*?) \((.*?)\) \((.*?), from (.*?) - (.*?)\)$/;
          const match = fullText.match(pattern);

          if (match) {
            const name = match[1].trim();
            const code = match[2].trim();
            const group = match[3].trim();
            const date = match[4].trim();
            const endDate = match[5] ? match[5].trim() : undefined;
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
          } else {
            // Try alternative pattern without end date
            const altPattern = /^(.*?) \((.*?)\) \((.*?), from (.*?)\)$/;
            const altMatch = fullText.match(altPattern);
            
            if (altMatch) {
              const name = altMatch[1].trim();
              const code = altMatch[2].trim();
              const group = altMatch[3].trim();
              const date = altMatch[4].trim();
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
            }
          }
        });
      }
      return courses;
    },
    markTable: (original) => {
      const html = original?.querySelector("#ctl00_mainContent_divGrade");
      if (!html) return "";
      
      // Add tailwind classes to tables
      const tables = html.querySelectorAll("table");
      tables.forEach((table) => {
        table.classList.add("w-full");
        table.setAttribute("style", "");
        
        // Process table rows and cells
        const rows = table.querySelectorAll("tr");
        rows.forEach((row, rowIndex) => {
          // Add styles to header row
          if (rowIndex === 0) {
            row.classList.add("bg-muted/50");
            const headerCells = row.querySelectorAll("th");
            headerCells.forEach(cell => {
              cell.classList.add("px-4", "py-2", "text-left", "text-xs", "font-medium", "text-muted-foreground");
            });
          } else {
            row.classList.add(rowIndex % 2 === 0 ? "bg-card" : "bg-muted/20", "hover:bg-muted/40");
            const cells = row.querySelectorAll("td");
            cells.forEach(cell => {
              cell.classList.add("px-4", "py-2", "text-sm");
            });
          }
        });
      });
      
      // Remove caption if it exists
      html.querySelector("caption")?.remove();
      
      return html.innerHTML;
    },
    resultText: (original) => {
      const html = original?.querySelector("#ctl00_mainContent_divGrade");
      if (!html) return "";
      const fullText = html.textContent || "";
      
      if (fullText.includes("Attendance Fail")) {
        return "Attendance Fail";
      } else if (fullText.includes("Not Passed")) {
        return "Not Passed";
      } else if (fullText.includes("Suspended")) {
        return "Is Suspended";
      } else if (fullText.includes("Passed")) {
        return "Passed";
      }
      
      return "";
    },
  });

  // Combine data into a single object for component use
  const gradeData: GradeData = {
    terms: terms || [],
    courses: courses || [],
    markTable: markTable || ""
  };

  const activeTerm = useMemo(() => {
    const term = gradeData.terms.find(term => term.active);
    return term ? `${term.season} ${term.year}` : intl.formatMessage({ id: 'COMMON.LOADING' });
  }, [gradeData.terms, intl]);

  const activeCourse = useMemo(() => {
    const course = gradeData.courses.find(course => course.active);
    return course ? `${course.name} (${course.code})` : intl.formatMessage({ id: 'GRADE.REPORT.SELECT_COURSE_MESSAGE' });
  }, [gradeData.courses, intl]);

  return {
    gradeData,
    activeTerm,
    activeCourse,
    result: resultText
  };
}; 