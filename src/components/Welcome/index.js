import React from 'react'
import AuthorizingRow from './AuthorizingRow.js'
import ContinueRow from './ContinueRow.js'
import ErrorRow from './ErrorRow.js'
import ProfileRow from './ProfileRow.js'
import Api from '../../modules/api.js'
import get from 'lodash/get'

class Welcome extends React.Component {
	constructor() {
		super()
		this.state = {
			authorized: false,
			error: false,
			profile: {},
		}
	}

	componentWillMount() {
		const sessionID = get(this.props, 'location.query.session_id')
		if (sessionID)
			document.cookie= 'sessionID = ' + sessionID
		Api.getProfile()
			.then(response => this.setState({
				profile: response,
				authorized: true,
			}))
			.catch(error => this.setState({error: true}))
	}

	render() {
		const {error, authorized, profile} = this.state
		const {location: {query: {provider}}} = this.props
		return (
			<div className="Welcome">
				{!error && !!authorized && <ProfileRow profile={profile}/>}
				{!error && !!authorized && <ContinueRow baseGrantUrl={profile.base_grant_url}/>}
				{!error && !authorized && <AuthorizingRow provider={provider}/>}
				{!!error && <ErrorRow />}
			</div>
		)
	}
}

export default Welcome
