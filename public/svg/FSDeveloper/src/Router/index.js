import React from 'react';
import {  Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;