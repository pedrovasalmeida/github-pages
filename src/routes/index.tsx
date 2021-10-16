import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../components/Home';

export function Routes() {
	return (
		<Switch>
			<Route component={Home} path="/" exact />
			<Route component={Home} path="/bye" exact />

			<Redirect from="*" to="/" />
		</Switch>
	);
}
