import React from 'react';
import { Route, Routes } from 'react-router';
import { Loading } from 'components';
import { PrimaryLayout } from 'components/Layouts/Primary';

const LazyVenuesView = React.lazy(
  () =>
    import(
      '../views/VenuesView'
      /* webpackChunkName: "VenuesView" */
    ),
);

const VenuesRoutes: React.FC = () => (
  <React.Suspense fallback={<Loading />}>
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route index element={<LazyVenuesView />} />
        <Route path={':page'} element={<LazyVenuesView />} />
      </Route>
    </Routes>
  </React.Suspense>
);

export default VenuesRoutes;
