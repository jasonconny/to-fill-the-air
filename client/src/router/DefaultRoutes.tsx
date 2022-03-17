import * as React from 'react';
import { Route, Routes } from 'react-router';
import Loading from '../components/Loading';

const LazyBandView = React.lazy(() =>
    import(
        '../views/BandView'
        /* webpackChunkName: "BandView" */
    )
);

const LazyLoginView = React.lazy(() =>
    import(
        '../views/LoginView'
        /* webpackChunkName: "LoginView" */
    )
);

const LazyNotFoundView = React.lazy(() =>
    import(
        '../views/NotFoundView'
        /* webpackChunkName: "NotFoundView" */
    )
);

const LazySongsView = React.lazy(() =>
    import(
        '../views/SongsView'
        /* webpackChunkName: "SongsView" */
    )
);

const LazyStatsView = React.lazy(() =>
    import(
        '../views/StatsView'
        /* webpackChunkName: "StatsView" */
    )
);

const LazyToursView = React.lazy(() =>
    import(
        '../views/ToursView'
        /* webpackChunkName: "ToursView" */
    )
);

const DefaultRoutes: React.FC = () => (
    <React.Suspense fallback={<Loading/>}>
        <Routes>
            <Route path={'band'} element={<LazyBandView/>}/>
            <Route path={'login'} element={<LazyLoginView />}/>
            <Route path={'songs'} element={<LazySongsView/>}/>
            <Route path={'stats'} element={<LazyStatsView/>}/>
            <Route path={'tours'} element={<LazyToursView/>}/>
            <Route path={'*'} element={<LazyNotFoundView/>}/>
        </Routes>
    </React.Suspense>
);

export default DefaultRoutes;
