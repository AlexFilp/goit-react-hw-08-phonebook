import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Appbar } from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <div>
      <Appbar />
      <Suspense fallback={<h1>LOADING PAGE...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
