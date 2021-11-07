import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../pages/Home';

export function Routes() {
	return (
		<Switch>
			<Route component={Home} path="/" exact />

			<Redirect from="*" to="/" />
		</Switch>
	);
}
