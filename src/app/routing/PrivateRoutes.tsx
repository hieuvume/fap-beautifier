import { Route, Routes } from 'react-router-dom'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import DashboardWrapper from '../modules/Dashboard/DashboardWrapper'

const PrivateRoutes = () => {

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path='Student.aspx' element={<DashboardWrapper />} />
        <Route path='Report/ScheduleOfWeek.aspx' element={<DashboardWrapper />} />
        <Route path='User/UserDetail.aspx' element={<DashboardWrapper />} />
      </Route>
    </Routes>
  )
}

export { PrivateRoutes }
