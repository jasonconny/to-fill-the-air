import React from 'react';
import { Route, Routes } from 'react-router';
import { Loading } from 'components';

const LazyBandView = React.lazy(
  () =>
    import(
      '../views/Band/BandView'
      /* webpackChunkName: "BandView" */
    ),
);

const LazyNotFoundView = React.lazy(
  () =>
    import(
      '../views/NotFound/NotFoundView'
      /* webpackChunkName: "NotFoundView" */
    ),
);

const LazySongsView = React.lazy(
  () =>
    import(
      '../views/Songs/SongsView'
      /* webpackChunkName: "SongsView" */
    ),
);

const LazyStatsView = React.lazy(
  () =>
    import(
      '../views/Stats/StatsView'
      /* webpackChunkName: "StatsView" */
    ),
);

const LazyToursView = React.lazy(
  () =>
    import(
      '../views/Tours/ToursView'
      /* webpackChunkName: "ToursView" */
    ),
);

const DefaultRoutes: React.FC = () => (
  <React.Suspense fallback={<Loading />}>
    <Routes>
      <Route path={'band'} element={<LazyBandView />} />
      <Route path={'songs'} element={<LazySongsView />} />
      <Route path={'stats'} element={<LazyStatsView />} />
      <Route path={'tours'} element={<LazyToursView />} />
      <Route path={'*'} element={<LazyNotFoundView />} />
    </Routes>
  </React.Suspense>
);

export default DefaultRoutes;
