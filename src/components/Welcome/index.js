import React from 'react'
import AuthorizingRow from './AuthorizingRow.js'
import ContinueRow from './ContinueRow.js'
import ErrorRow from './ErrorRow.js'
import ProfileRow from './ProfileRow.js'
import BeforeYouGoRow from './BeforeYouGoRow.js'
import Api from '../../modules/api.js'
import get from 'lodash/get'

class Welcome extends React.Component {
	constructor() {
		super()

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
		this.redirect = this.redirect.bind(this)

		this.state = {
			authorized: false,
			error: false,
			profile: {},
<<<<<<< HEAD
			company: '',
			companyEmail: '',
			loading: false,
=======
			document: '',
			submitting: false,
>>>>>>> lambda-express-app
		}
	}

	componentWillMount() {
		const sessionID = get(this.props, 'location.query.session_id')
		if (sessionID)
			document.cookie= 'sessionID = ' + sessionID
		Api.getProfile(sessionID)
			.then(response => this.setState({
				profile: response,
				authorized: true,
			}))
			.catch(error => this.setState({error: error}))
	}

	onSubmit (e) {
		e.preventDefault()
		const {document:doc} = this.state
		this.setState({submitting: true})
		if (doc === '') {
			this.redirect()
			return
		}
		Api.updateProfileDocument(this.state.document)
			 .then(this.redirect)
			 .catch(this.redirect)
	}
	onChange (e) {
		let doc = e.target.value.replace(/\D+/g, '')
		if (doc.length > 7) return
		if (window.isNaN(doc)) doc = ''
		this.setState({
			document: doc,
		})
	}

	redirect() {
		try {
			const {profile:{base_grant_url}} = this.state
			return location.href = base_grant_url || 'http://www.tata.com.uy'
		} catch (err) {
			return location.href = 'http://www.tata.com.uy'
		}
	}


	render() {
		const {error, authorized, profile, document:doc, submitting} = this.state
		const {location: {query: {provider}}} = this.props
		return (
			<div className="Welcome">
				{!error && !!authorized && <ProfileRow profile={profile} doc={doc} onChange={this.onChange} showInput={!profile.Document && profile.portal !== 'conatel'}/>}
				{!error && !!authorized && <ContinueRow submitting={submitting} baseGrantUrl={profile.base_grant_url} onSubmit={this.onSubmit}/>}
				{!error && !authorized && <AuthorizingRow provider={provider}/>}
				{!!error && <ErrorRow />}
			</div>
		)
	}
}

export default Welcome
