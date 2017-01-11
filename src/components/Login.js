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
		this.toggleLocalLogin = this.toggleLocalLogin.bind(this)
		this.state = {
			error: false,
			loading: false,
			showLocalLogin: false,
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
			.then(({href}) => location.href = href)
			.catch(error => this.setState({
				loading: false,
				error: error,
			}))
	}

	closeError(){
		this.setState({error: undefined})
	}

	toggleLocalLogin(e) {
		e.preventDefault()
		this.setState(state => ({
			showLocalLogin: !state.showLocalLogin,
		}))
	}

	render() {
		const {loading, error, showLocalLogin} = this.state
		return (
			<div className="Login text-center">
				<div className="row Login__social">
					<p>Inicie su sesión con su red social favorita.</p>
					<SocialButtons onClick={this.onSocialLogin}/>
				</div>
				<div className="row Login__form">
				<p>... o ingrese sus datos:</p>
				{!!error && 
					<div className="row col-xs-12">
						<ErrorMessage error={errors[error.message] || 'Oops, ocurrio un error.'} onClick={this.closeError}/>
					</div>}
				{showLocalLogin &&
					<LoginForm loading={loading} onSubmit={this.onSubmit}/>}
					<div className="col-xs-12">
					{!showLocalLogin &&
						<button className="btn btn-dark-red btn-block"
										type="button"
										onClick={this.toggleLocalLogin}>
			    		Iniciar Sesión
		    		</button>}
					{!loading && 
						<Link to={{
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
