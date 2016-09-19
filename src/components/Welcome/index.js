import React from 'react'
import AuthorizingRow from './AuthorizingRow.js'
import ContinueRow from './ContinueRow.js'
import ErrorRow from './ErrorRow.js'
import LogoRow from './LogoRow.js'
import ProfileRow from './ProfileRow.js'

class Welcome extends React.Component {
	constructor() {
		super()
		this.state = {
			authorized: false,
			error: false,
		}
	}

	render() {
		const {error, authorized} = this.state
		const {location: {query: {provider}}} = this.props
		return (
			<div className="Welcome">
				{!error && !!authorized && <LogoRow />}
				{!error && !!authorized && <ProfileRow />}
				{!error && !!authorized && <ContinueRow />}
				{!error && !authorized && <AuthorizingRow provider={provider}/>}
				{!!error && <ErrorRow />}
			</div>
		)
	}
}

export default Welcome
