import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import { useStudentCurriculum } from "../hooks/useStudentCurriculum";

const StudentCurriculum = () => {
  const { title, curiculumTable, prequisiteTable } = useStudentCurriculum();

  return (
    <>
      <Toolbar title="Curiculum" breadcrum="Curiculum" />
      <div className="app-content flex-column-fluid">
        <div className="app-container container-fluid">
          <div className="card">
            <div className="card-body">
              <h2 className="text-gray-800 fw-bold mb-4">Curiculum {title}</h2>
              <div className="table-responsive">
                <div dangerouslySetInnerHTML={{ __html: curiculumTable }} />
              </div>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <h2 className="text-gray-800 fw-bold mb-4">Subject Prequisite</h2>
              <div className="table-responsive">
                <div dangerouslySetInnerHTML={{ __html: prequisiteTable }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentCurriculum;
