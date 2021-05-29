import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import DefaultRoutes from './DefaultRoutes';
import ReleasesRoutes from './ReleasesRoutes';

const AppRouter: React.FC = () => (
    <BrowserRouter forceRefresh={false}>
        <ScrollToTop/>

        <Switch>
            <Route path={'/releases'}>
                <ReleasesRoutes/>
            </Route>

            <Route path={'/'}>
                <DefaultRoutes/>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default AppRouter;
