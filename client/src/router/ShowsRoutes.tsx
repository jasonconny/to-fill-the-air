import * as React from 'react';
import { Route, Routes } from 'react-router'
import Loading from 'components/Loading';
import { PrimaryLayout } from 'components/Layouts';


const LazyShowsView = React.lazy(() =>
    import(
        '../views/ShowsView'
        /* webpackChunkName: "ShowsView" */
    )
);

const ShowsRoutes: React.FC = () => (
    <React.Suspense fallback={<Loading/>}>
        <Routes>
            <Route element={<PrimaryLayout/>}>
                <Route index element={<LazyShowsView/>} />
                <Route path={':year'} element={<LazyShowsView/>} />
            </Route>
        </Routes>
    </React.Suspense>
);

export default ShowsRoutes;
