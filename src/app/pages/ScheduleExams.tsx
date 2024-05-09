import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import ExamCard from "../components/ExamCard";
import { useScheduleExams } from "../hooks/useScheduleExams";

const ScheduleExams = () => {
  const { exams } = useScheduleExams()

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
