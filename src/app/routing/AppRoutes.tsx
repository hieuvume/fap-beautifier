/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { FC } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { App } from '../App'
import Login from '../modules/Login/Login'

const { BASE_URL } = process.env

const AppRoutes: FC = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Login />} />
          <Route path='/Default.aspx' element={<Login />} />
          <Route path='/*' element={<PrivateRoutes />} />
          {/* {currentUser ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to='/dashboard' />} />
            </>
          ) : (
            <>
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />
            </>
          )} */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { AppRoutes }
