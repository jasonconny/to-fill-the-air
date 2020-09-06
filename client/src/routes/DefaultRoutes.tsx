import * as React from 'react';
import { Route, Switch } from 'react-router';
import Loading from '../components/Loading';

const LazyBandView = React.lazy(() =>
    import(
        '../views/BandView'
        /* webpackChunkNam: "BandView" */
    )
);

const LazyHomeView = React.lazy(() =>
    import(
        '../views/HomeView'
        /* webpackChunkNam: "HomeView" */
    )
);

const LazyShowsView = React.lazy(() =>
    import(
        '../views/ShowsView'
        /* webpackChunkNam: "ShowsView" */
    )
);

const LazySongsView = React.lazy(() =>
    import(
        '../views/SongsView'
        /* webpackChunkNam: "SongsView" */
    )
);

const LazyStatsView = React.lazy(() =>
    import(
        '../views/StatsView'
        /* webpackChunkNam: "StatsView" */
    )
);

const LazyToursView = React.lazy(() =>
    import(
        '../views/ToursView'
        /* webpackChunkNam: "ToursView" */
    )
);

const LazyVenuesView = React.lazy(() =>
    import(
        '../views/VenuesView'
        /* webpackChunkNam: "VenuesView" */
    )
);

const DefaultRoutes: React.FC = () => (
    <React.Suspense fallback={<Loading/>}>
        <Switch>
            <Route path={'/band'}>
                <LazyBandView/>
            </Route>

            <Route path={'/shows'}>
                <LazyShowsView/>
            </Route>

            <Route path={'/songs'}>
                <LazySongsView/>
            </Route>

            <Route path={'/stats'}>
                <LazyStatsView/>
            </Route>

            <Route path={'/tours'}>
                <LazyToursView/>
            </Route>

            <Route path={'/venues'}>
                <LazyVenuesView/>
            </Route>

            <Route path={'/'}>
                <LazyHomeView/>
            </Route>
        </Switch>
    </React.Suspense>
);

export default DefaultRoutes;
