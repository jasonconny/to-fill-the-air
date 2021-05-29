import * as React from 'react';
import { Route, Switch } from 'react-router';
import Loading from 'components/Loading';

const LazyReleasesView = React.lazy(() =>
    import(
        '../views/ReleasesView'
        /* webpackChunkNam: "ReleasesView" */
    )
);

const ReleasesRoutes: React.FC = () => (
    <React.Suspense fallback={<Loading/>}>
        <Switch>
            <Route path={'/releases/:releaseType'}>
                <LazyReleasesView/>
            </Route>

            <Route path={'/releases'}>
                <LazyReleasesView/>
            </Route>
        </Switch>
    </React.Suspense>
);

export default ReleasesRoutes;
