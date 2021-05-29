import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Loading from 'components/Loading';

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

const LazyNotFoundView = React.lazy(() =>
    import(
        '../views/NotFoundView'
        /* webpackChunkNam: "NotFoundView" */
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
            <Redirect exact path={'/'} to={'/home'} />

            <Route path={'/band'}>
                <LazyBandView/>
            </Route>

            <Route path={'/home'}>
                <LazyHomeView/>
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

            <Route path={'*'}>
                <LazyNotFoundView/>
            </Route>
        </Switch>
    </React.Suspense>
);

export default DefaultRoutes;
