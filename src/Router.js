import React from 'react'
import {Router as ReactRouter, Route, IndexRedirect, hashHistory} from 'react-router'
import MainLayout from './components/MainLayout.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Welcome from './components/Welcome/'

class AppRouter extends React.Component {
	render() {
		return (
			<ReactRouter history={hashHistory}>
				<Route path="/" component={MainLayout}>
					<IndexRedirect to="login" />
					<Route path="login" component={Login} />
					<Route path="signup" component={Signup} />
					<Route path="welcome" component={Welcome} />
				</Route>
			</ReactRouter>
		)
	}
}

export default AppRouter
