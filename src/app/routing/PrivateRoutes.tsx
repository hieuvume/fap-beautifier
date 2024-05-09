import { Route, Routes } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import PortalDashboard from "../pages/PortalDashboard";
import Announce from "../pages/Announce";
import ScheduleOfWeek from "../pages/ScheduleOfWeek";
import Help from "../pages/Help";
import ScheduleExams from "../pages/ScheduleExams";
import SubjectFees from "../pages/SubjectFees";
import AttendanceReport from "../pages/AttendanceReport";
import MarkReport from "../pages/MarkReport";
import UserDetail from "../pages/UserDetail";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="Student.aspx" element={<PortalDashboard />} />
        <Route path="Report/ScheduleOfWeek.aspx" element={<ScheduleOfWeek />} />
        <Route path="User/Profile.aspx" element={<UserDetail />} />
        <Route path="User/verProfile.aspx" element={<UserDetail />} />
        <Route path="Thongbao.aspx" element={<Announce />} />
        <Route path="Report/Help.aspx" element={<Help />} />
        <Route path="Exam/ScheduleExams.aspx" element={<ScheduleExams />} />
        <Route path="FrontOffice/SubjectFees.aspx" element={<SubjectFees />} />
        <Route path="Report/ViewAttendstudent.aspx" element={<AttendanceReport />} />
        <Route path="Grade/StudentGrade.aspx" element={<MarkReport />} />
      </Route>
    </Routes>
  );
};

export { PrivateRoutes };
