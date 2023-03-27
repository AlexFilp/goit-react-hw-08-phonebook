import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Appbar } from '../AppBar/AppBar';
import { PageLoader } from '../PageLoader/PageLoader';

export const Layout = () => {
  return (
    <div>
      <Appbar />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
