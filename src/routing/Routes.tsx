import * as React from 'react';
import { Route, Switch } from 'react-router';

const LazyHomeView = React.lazy(() =>
	import(
		'../views/HomeView'
		/* webpackChunkNam: "HomeView" */
	)
);

const Routes = () => (
	<React.Suspense fallback={'loading'}>
		<Switch>
			<Route path={'/'}>
				<LazyHomeView/>
			</Route>
		</Switch>
	</React.Suspense>
);

export default Routes;
