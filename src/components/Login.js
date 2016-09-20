import React from 'react'
import {Link} from 'react-router'
import SocialIcons from './SocialIcons.js'
import LoginForm from './LoginForm.js'
import ErrorMessage from './ErrorMessage.js'
import logoSrc from "../_images/tata_logo_fill.png"
import Api from '../modules/api.js'

const errors = []

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.onSubmit = this.onSubmit.bind(this)
		this.closeError = this.closeError.bind(this)
		this.getQueryParamsFromProps = this.getQueryParamsFromProps.bind(this)
		this.onSocialLogin = this.onSocialLogin.bind(this)
		this.state = {
			error: false,
			loading: false,
		}
	}

	getQueryParamsFromProps() {
		const {location: {
			query: {
				base_grant_url,
				client_ip,
				client_mac,
				node_mac,
			}
		}} = this.props
		return {
			base_grant_url,
			client_ip,
			client_mac,
			node_mac,
		}
	}

	onSocialLogin(provider) {
		const query = this.getQueryParamsFromProps()
		Api.socialLogin(provider, query)
	}

	onSubmit(values) {
		this.setState({loading: true})
		const query = this.getQueryParamsFromProps()
		Api.loginUser(values, query)
			.then(response => location.href = response)
			.catch(error => {console.error(error); this.setState({
				loading: false,
				error: error,
			})})
	}

	closeError(){
		this.setState({error: undefined})
	}

	render() {
		const {loading, error} = this.state
		return (
			<div className="Login text-center">
				<div className="row Login__logo">
					<div className="col-xs-12">
						<img src={logoSrc}
							className="img-responsive"
							alt="TaTa Logo"/>
					</div>
				</div>

				<div className="row Login__social">
					<div className="col-xs-12">
						<p className="text-shadow">Inicie su sesión con su red social favorita.</p>
						<SocialIcons onClick={this.onSocialLogin}/>
					</div>
				</div>

				<div className="row Login__form">
					<div className="col-xs-12">
						<p className="text-shadow">... o ingrese sus datos:</p>
						<div className="row col-xs-12">
							{!!error && <ErrorMessage error={errors[error.message] || 'Oops, ocurrio un error.'} onClick={this.closeError}/>}
						</div>
						<LoginForm loading={loading} onSubmit={this.onSubmit}/>
			    	{!loading && <Link to={{
			    		pathname: '/signup',
			    		query: this.getQueryParamsFromProps(),
			    	}} className="btn btn-block btn-link">
							Nuevo usuario
			    	</Link>}
					</div>
				</div>
			</div>
		)
	}
}

export default Login
