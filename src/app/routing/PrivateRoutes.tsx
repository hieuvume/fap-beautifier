import { Route, Routes } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import DashboardWrapper from "../pages/DashboardWrapper";
import Announce from "../pages/Announce";
import ScheduleOfWeek from "../pages/ScheduleOfWeek";
import Help from "../pages/Help";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="Student.aspx" element={<DashboardWrapper />} />
        <Route path="Report/ScheduleOfWeek.aspx" element={<ScheduleOfWeek />} />
        <Route path="User/UserDetail.aspx" element={<DashboardWrapper />} />
        <Route path="Thongbao.aspx" element={<Announce />} />
        <Route path="Report/Help.aspx" element={<Help />} />
      </Route>
    </Routes>
  );
};

export { PrivateRoutes };
