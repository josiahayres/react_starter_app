import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";

/**
 * Returns a component that wraps the routes and a navigation component
 */
function Routes() {
	return (
		<div>
			<nav></nav>
			<main>
				<Router>
					<Switch>
						<Route path="/" component={Home} />
					</Switch>
				</Router>
			</main>
		</div>
	);
}

export default Routes;
