import React from 'react'
import {Link} from 'react-router'
import get from 'lodash/get'
import SocialButtons from './SocialButtons.js'
import LoginForm from './LoginForm.js'
import ErrorMessage from './ErrorMessage.js'
import Api from '../modules/api.js'

const errors = []

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.onSubmit = this.onSubmit.bind(this)
		this.closeError = this.closeError.bind(this)
		this.onSocialLogin = this.onSocialLogin.bind(this)
		this.state = {
			error: false,
			loading: false,
		}
	}

	onSocialLogin(provider) {
		const query = get(this.props, 'location.query')
		Api.socialLogin(provider, query)
	}

	onSubmit(values) {
		this.setState({loading: true})
		const query = get(this.props, 'location.query')
		Api.loginUser(values, query)
			.then(response => location.href = response)
			.catch(error => this.setState({
				loading: false,
				error: error,
			}))
	}

	closeError(){
		this.setState({error: undefined})
	}

	render() {
		const {loading, error} = this.state
		return (
			<div className="Login text-center">
				<div className="row Login__social">
					<div className="col-xs-12">
						<p>Inicie su sesión con su red social favorita.</p>
						<SocialButtons onClick={this.onSocialLogin}/>
					</div>
				</div>
				<div className="row Login__form">
					<div className="col-xs-12">
						<p>... o ingrese sus datos:</p>
						<div className="row col-xs-12">
							{!!error && <ErrorMessage error={errors[error.message] || 'Oops, ocurrio un error.'} onClick={this.closeError}/>}
						</div>
						<LoginForm loading={loading} onSubmit={this.onSubmit}/>
			    	{!loading && <Link to={{
			    		pathname: '/signup',
			    		query: get(this.props, 'location.query'),
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
