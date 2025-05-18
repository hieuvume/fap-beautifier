import { useMemo } from "react";
import { usePageDataCustom } from "../../_metronic/layout/core";
import { GPA, GradeTranscript } from "../models/GradeTranscript";

const defaultNonGPA = ["OJS", "VOV", "GDQP", "LAB", "ENT", "SSS", "ĐNH", "TMI", "OJT"];

export const useStudentTranscript = () => {

  const { transcripts } = usePageDataCustom({
    transcripts: (original) => {
      const content = original?.querySelector(
        "#ctl00_mainContent_divGrade"
      ) as HTMLElement;
      const table = content?.querySelector("table") as HTMLTableElement;
      const rows = table?.rows ?? [];

      const transcripts: GradeTranscript[] = [];
      Array.from(rows).forEach((row, index) => {
        if (index === 0) return;
        const cells = row.cells;
        const term = cells[1].innerText;
        const semesterText = cells[2].innerText; // Fall2020
        const year = semesterText.slice(-4);
        const session = semesterText.slice(0, -4);
        const semester = { session, year };
        const subjectCode = cells[3].innerText;
        const prerequisite = cells[4].innerText;
        const replacedSubject = cells[5].innerText;
        const subjectName = cells[6].innerText;
        const credit = Number(cells[7].innerText);
        const grade = Number(cells[8].innerText);
        const status = cells[9].innerText;
        transcripts.push({
          term,
          semester,
          subjectCode,
          prerequisite,
          replacedSubject,
          subjectName,
          credit,
          grade,
          status,
        });
      });
      return transcripts;
    },
  });

  const gpaList = useMemo(() => {
    const gpaList = transcripts.reduce((acc, transcript) => {
      const { term, semester, grade, subjectCode, subjectName, credit, status } = transcript;
      const semesterKey = term;
      const gpa = acc[semesterKey] || {
        semester: semester,
        term,
        gpa: 0,
        courses: [],
      };

      const isExcluded = defaultNonGPA.some((code) => subjectCode.includes(code));
      const realCredit = isExcluded ? 0 : credit;
      gpa.courses.push({ subjectCode, subjectName, credit: realCredit, grade, status});
      gpa.totalCredit = gpa.courses.reduce((acc, course) => acc + course.credit, 0);
      gpa.gpa = gpa.courses.reduce((acc, course) => acc + course.credit * course.grade, 0) / gpa.totalCredit;
      if (isNaN(gpa.gpa)) {
        gpa.gpa = 0;
      }
      acc[semesterKey] = gpa;
      return acc;
    }, {} as Record<string, GPA>)
    return Object.values(gpaList);
  }, [transcripts]);

  const averageGPA = useMemo(() => {
    const totalGPA = gpaList.reduce((acc, gpa) => acc + gpa.gpa * gpa.totalCredit, 0);
    const totalCredit = gpaList.reduce((acc, gpa) => acc + gpa.totalCredit, 0);
    return totalGPA / totalCredit;
  }, [gpaList]);

  return { transcripts, gpaList, averageGPA };
};
