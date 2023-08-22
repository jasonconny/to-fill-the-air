import * as React from 'react';
import { Route, Routes } from 'react-router';
import Loading from 'components/Loading';
import { PrimaryLayout } from 'components/Layouts';

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
