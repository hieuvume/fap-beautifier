import { ErrorLayout } from '@/app/layouts/error/layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Error404 } from './error-404';
import { Error500 } from './error-500';

export function ErrorRouting() {
  return (
    <Routes>
      <Route element={<ErrorLayout />}>
        <Route index element={<Error404 />} />
        <Route path="404" element={<Error404 />} />
        <Route path="500" element={<Error500 />} />
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
}
