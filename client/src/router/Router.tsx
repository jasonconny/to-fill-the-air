import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { PrimaryLayout } from '../components/Layouts';
import HomeView from '../views/HomeView';
import DefaultRoutes from './DefaultRoutes';
import ReleasesRoutes from './ReleasesRoutes';
import ShowsRoutes from './ShowsRoutes';
import VenuesRoutes from './VenuesRoutes';

const Router: React.FC = () => (
  <BrowserRouter>
    <ScrollToTop />

    <Routes>
      <Route path={'/'}>
        <Route path={'releases/*'} element={<ReleasesRoutes />} />
        <Route path={'shows/*'} element={<ShowsRoutes />} />
        <Route path={'venues/*'} element={<VenuesRoutes />} />
        <Route element={<PrimaryLayout />}>
          <Route index element={<HomeView />} />
          <Route path={'*'} element={<DefaultRoutes />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
