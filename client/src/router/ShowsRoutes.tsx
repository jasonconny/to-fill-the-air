import React from 'react';
import { Route, Routes } from 'react-router';
import { Loading } from 'components';
import { PrimaryLayout } from 'components/Layouts/Primary';

const LazyShowsView = React.lazy(
  () =>
    import(
      '../views/ShowsView'
      /* webpackChunkName: "ShowsView" */
    ),
);

const LazyShowView = React.lazy(
  () =>
    import(
      '../views/ShowView'
      /* webpackChunkName: "ShowView" */
    ),
);

const ShowsRoutes: React.FC = () => (
  <React.Suspense fallback={<Loading />}>
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route index element={<LazyShowsView />} />
        <Route path={':year'} element={<LazyShowsView />} />
        <Route path={':year/:month/:date'} element={<LazyShowView />} />
      </Route>
    </Routes>
  </React.Suspense>
);

export default ShowsRoutes;
