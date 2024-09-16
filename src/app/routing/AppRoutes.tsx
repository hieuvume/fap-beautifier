import { FC } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { App } from '../App'
import Login from '../pages/Login'

import "../../_metronic/assets/fonticon/fonticon.css";
import "../../_metronic/assets/keenicons/duotone/style.css";
import "../../_metronic/assets/keenicons/outline/style.css";
import "../../_metronic/assets/keenicons/solid/style.css";
import "../../_metronic/assets/style.bundle.css";

const { BASE_URL } = process.env

const AppRoutes: FC = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Login />} />
          <Route path='/Default.aspx' element={<Login />} />
          <Route path='/*' element={<PrivateRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { AppRoutes }
