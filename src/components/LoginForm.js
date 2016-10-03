import React, {PropTypes as T} from 'react'
import {Link} from 'react-router'
import ButtonLoading from './ButtonLoading.js'
import ErrorMessage from './ErrorMessage.js'

class LoginForm extends React.Component {
	constructor(props) {
		super(props)
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
		this.closeError = this.closeError.bind(this)
		this.state = {
			email: '',
			password: '',
			error: undefined,
		}
	}

	onChange(key, event) {
		this.setState({[key]: event.target.value})
	}

	onSubmit(e) {
		e.preventDefault()
		const {email, password} = this.state
		if (email === '' || password === '') {
			this.setState({error: 'Todos los campos son obligatorios.'})
			return
		}
		this.props.onSubmit({email, password})
	}

	closeError() {
		this.setState({error: undefined})
	}

	render() {
		const {error, email, password} = this.state
		const {loading} = this.props
		return (
			<form onSubmit={this.onSubmit} className="Login__form">
			  <div className="row clearfix">
			    <div className="col-xs-12 col-sm-6 col-sm-offset-3">
						{!!error && <ErrorMessage onClick={this.closeError} error={error} />}
			      <div className="form-group">
			        <div className="control-label">
			          Email
			        </div>
			        <div className="controls">
			          <input 
			          	name="email"
			          	type="email"
			          	value={email}
			          	onChange={this.onChange.bind(this, 'email')}
			          	placeholder="Email"
			          	className="form-control input-lg" 
			          />
			        </div>
			      </div>
			    </div>
			    <div className="col-xs-12 col-sm-6 col-sm-offset-3">
			      <div className="form-group">
			        <div className="control-label">
			          Contraseña
			        </div>
			        <div className="controls">
			          <input 
			          	name="password"
			          	type="password"
			          	value={password}
			          	onChange={this.onChange.bind(this, 'password')}
			          	placeholder="Contraseña"
			          	className="form-control input-lg"
		          	/>
			        </div>
			      </div>
			    </div>
			    <div className="col-xs-12 col-sm-6 col-sm-offset-3 Login__forgot-password">
			    	<Link to="/recover-password">
			    		¿Olvido su contraseña?
		    		</Link>
			    </div>
			    <div className="col-xs-12 col-sm-6 col-sm-offset-3">
			    	{!loading && <button className="btn btn-dark-red btn-block" type="submit">
			    		Iniciar Sesión
		    		</button>}
			    	{!!loading && <ButtonLoading />}
			    </div>
			  </div>
			</form>
		)
	}
}

LoginForm.propTypes = {
	loading: T.bool,
	onSubmit: T.func,
}

LoginForm.defaultProps = {
	onSubmit: () => {},
}

export default LoginForm
