import React from 'react'
import AuthorizingRow from './AuthorizingRow.js'
import ContinueRow from './ContinueRow.js'
import ErrorRow from './ErrorRow.js'
import ProfileRow from './ProfileRow.js'
import BeforeYouGoRow from './BeforeYouGoRow.js'
import Api from '../../modules/api.js'

class Welcome extends React.Component {
	constructor() {
		super()
		this.state = {
			authorized: false,
			error: false,
			profile: {},
			company: '',
			companyEmail: '',
			loading: false,
		}
	}

	componentWillMount() {
		const {location: {query: {token, provider}}} = this.props
		Api.getProfile({token, provider})
			.then(response => this.setState({
				profile: response,
				authorized: true,
			}))
			.catch(error => this.setState({error: true}))
	}

	onChange = (key) => (e) => this.setState({[key]: e.target.value})

	onSubmit = (e) => {
		e.preventDefault()
		this.setState({loading: true})
		const {profile: {email}, company, companyEmail} = this.state
		const {location: {query: {provider, base_grant_url}}} = this.props
		Api.updateProfile({email, provider, company, companyEmail})
		.then(response => location.href = base_grant_url)
		.catch(console.error)
	}

	render() {
		const {error, authorized, profile, company, companyEmail} = this.state
		const {location: {query: {provider, portal}}} = this.props
		return (
			<div className="Welcome">
			{!error && !!authorized && 
				<ProfileRow profile={profile} portal={portal}/>}
			{!error && !!authorized &&
				<BeforeYouGoRow onChange={this.onChange} {...{portal, company, companyEmail}}/>}
			{!error && !!authorized && 
				<ContinueRow portal={portal} onClick={this.onSubmit}/>}
			{!error && !authorized && 
				<AuthorizingRow provider={provider}/>}
			{!!error && 
				<ErrorRow />}
			</div>
		)
	}
}

export default Welcome
