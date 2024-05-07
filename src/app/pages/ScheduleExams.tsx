import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import { usePageDataCustom } from "../../_metronic/layout/core";
import ExamCard from "../components/ExamCard";
import { Exam } from "../models/Exam";

const ScheduleExams = () => {
  const { exams } = usePageDataCustom({
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

  return (
    <>
      <Toolbar title="Exam Schedules" breadcrum="Exam Schedules" />
      <div className="app-content flex-column-fluid">
        <div className="app-container container-fluid">
          <div className="row">
            {exams?.map((e, index) => (
              <ExamCard exam={e} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleExams;
