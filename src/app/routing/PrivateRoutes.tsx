import { Route, Routes } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import PortalDashboard from "../pages/PortalDashboard";
import Announce from "../pages/Announce";
import ScheduleOfWeek from "../pages/ScheduleOfWeek";
import Help from "../pages/Help";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="Student.aspx" element={<PortalDashboard />} />
        <Route path="Report/ScheduleOfWeek.aspx" element={<ScheduleOfWeek />} />
        <Route path="User/UserDetail.aspx" element={<PortalDashboard />} />
        <Route path="Thongbao.aspx" element={<Announce />} />
        <Route path="Report/Help.aspx" element={<Help />} />
      </Route>
    </Routes>
  );
};

export { PrivateRoutes };
