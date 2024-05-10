import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import { useStudentFees } from "../hooks/useStudentFees";

const StudentFees = () => {
  const { studentFeeTable } = useStudentFees();

  return (
    <>
      <Toolbar title="Student Fees" breadcrum="Student Fees" />
      <div className="app-content flex-column-fluid">
        <div className="app-container container-fluid">
          <div className="card">
            <div className="card-body">
              <h2 className="text-gray-800 fw-bold mb-4">Student Fees</h2>
              <div className="table-responsive">
                <div dangerouslySetInnerHTML={{ __html: studentFeeTable }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentFees;
