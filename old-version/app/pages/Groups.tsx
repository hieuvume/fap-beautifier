import Toolbar from "../../_metronic/layout/components/toolbar/Toolbar";
import { useGroups } from "../hooks/useGroups";

const Groups = () => {
  const { courseName, groupName, members, currentRollNumber } = useGroups();

  return (
    <>
      <Toolbar title={`Group ${groupName}`} breadcrum={groupName} />
      <div className="app-content flex-column-fluid">
        <div className="app-container container-fluid">
          <div className="card">
            <div className="card-body">
              <h2 className="text-gray-800 fw-bold mb-4">{courseName} [{groupName}]</h2>
              <div className="table-responsive">
                <table className="table table-striped table-rounded border gs-7">
                  <thead>
                    <tr className="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
                      <th>STT</th>
                      <th>Roll Number</th>
                      <th>Surname</th>
                      <th>Middle Name</th>
                      <th>Given Name</th>
                      <th>Full Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((member, index) => (
                      <tr key={index} className={`${currentRollNumber.includes(member.rollNumber.toLowerCase()) ? 'table-primary' : ''}`}>
                        <td>{index + 1}</td>
                        <td className="fw-bold text-primary">{member.rollNumber}</td>
                        <td className="fw-semibold">{member.surname}</td>
                        <td className="fw-semibold">{member.middleName}</td>
                        <td className="fw-semibold">{member.givenName}</td>
                        <td className="fw-semibold">{`${member.surname} ${member.middleName} ${member.givenName}`}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
