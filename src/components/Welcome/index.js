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

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)

		this.state = {
			authorized: false,
			error: false,
			profile: {},
			document: '',
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
			.catch(error => this.setState({error: error}))
	}

	onSubmit (e) {
		e.preventDefault()
		const {profile, document:doc} = this.state
		if (doc === '') {
			return location.href = profile.base_grant_url || 'http://www.tata.com.uy'
		}
		Api.updateProfileDocument(this.state.document)
			 .then(console.log)
			 .catch(console.error)
	}

	onChange (e) {
		let doc = e.target.value.replace(/\D+/g, '')
		if (doc.length > 7) return
		if (window.isNaN(doc)) doc = ''
		this.setState({
			document: doc,
		})
	}

	render() {
		const {error, authorized, profile, document:doc} = this.state
		const {location: {query: {provider}}} = this.props
		return (
			<div className="Welcome">
				{!error && !!authorized && <ProfileRow profile={profile} doc={doc} onChange={this.onChange} showInput={!profile.Document}/>}
				{!error && !!authorized && <ContinueRow baseGrantUrl={profile.base_grant_url} onSubmit={this.onSubmit}/>}
				{!error && !authorized && <AuthorizingRow provider={provider}/>}
				{!!error && <ErrorRow />}
			</div>
		)
	}
}

export default Welcome
