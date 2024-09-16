import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import { useStudentFeedback } from "../hooks/useStudentFeedback";

const StudentFeedBack = () => {
  const { feedbackTable } = useStudentFeedback();
  return (
    <>
      <Toolbar title="List of feedbacks" breadcrum="Student FeedBack" />
      <div className="app-content flex-column-fluid">
        <div className="app-container container-fluid">
          <div className="card">
            <div className="card-body">
              <div
                className="table-responsive"
                dangerouslySetInnerHTML={{ __html: feedbackTable }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentFeedBack;
