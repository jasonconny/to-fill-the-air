import React from 'react';
import { Routes, Route } from 'react-router';
import Loading from 'components/Loading';
import { PrimaryLayout } from 'components/Layouts';
import SubNav from 'components/Layouts/SubNav';

export const SubNavLinks: Array<NavLink> = [
  {
    name: 'Box Set',
    slug: 'box-set',
  },
  {
    name: 'Dicks Picks',
    slug: 'dicks-picks',
  },
  {
    name: 'Download Series',
    slug: 'download-series',
  },
  {
    name: 'Road Trips',
    slug: 'road-trips',
  },
  {
    name: 'Daves Picks',
    slug: 'daves-picks',
  },
];

const LazyReleasesView = React.lazy(
  () =>
    import(
      '../views/ReleasesView'
      /* webpackChunkName: "ReleasesView" */
    ),
);

const ReleasesRoutes: React.FC = () => (
  <React.Suspense fallback={<Loading />}>
    <Routes>
      <Route
        element={<PrimaryLayout subNav={<SubNav links={SubNavLinks} />} />}
      >
        <Route index element={<LazyReleasesView />} />
        <Route path={':releaseType'} element={<LazyReleasesView />} />
      </Route>
    </Routes>
  </React.Suspense>
);

export default ReleasesRoutes;
