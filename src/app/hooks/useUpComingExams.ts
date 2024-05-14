import { Exam } from "../models/Exam";
import useFetch from "./useFetch";

export const useUpComingExams = () => {
  const { data, loading } = useFetch("/Exam/ScheduleExams.aspx", {
    exams: (original) => {
      if (!original) return [];
      const table = original?.querySelector(
        "#ctl00_mainContent_divContent table"
      ) as HTMLTableElement;
      const rows = table?.querySelectorAll("tr");
      const exams: Exam[] = [];
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.querySelectorAll("td");
        exams.push({
          subjectCode: cells[1].textContent?.trim() || "",
          subjectName: cells[2].textContent?.trim() || "",
          date: cells[3].textContent?.trim() || "",
          room: cells[4].textContent?.trim() || "",
          time: cells[5].textContent?.trim() || "",
          form: cells[6].textContent?.trim() || "",
          type: cells[7].textContent?.trim() || "",
          publicDate: cells[8].textContent?.trim() || "",
        });
      }
      return exams;
    },
  });

  return { exams: data?.exams || [], loading };
};
