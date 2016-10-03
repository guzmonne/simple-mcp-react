import React, {PropTypes as T} from 'react'
import ButtonLoading from './ButtonLoading.js'
import ErrorMessage from './ErrorMessage.js'

class SignupForm extends React.Component {
	constructor(props) {
		super(props)
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
		this.closeError = this.closeError.bind(this)
		this.state = {
			user: {
				name: '',
				email: '',
				password: '',
				gender: undefined,
				age: undefined,
			},
			error: undefined,
		}
	}

	onChange(key, event) {
		const {user} = this.state
		this.setState({user: Object.assign({}, user, {[key]: event.target.value})})
	}

	onSubmit(e) {
		e.preventDefault()
		const {user} = this.state
		if (Object.keys(user).reduce((acc, key) => acc || user[key] === '', false)) {
			this.setState({error: 'Todos los campos son obligatorios.'})
			return
		}
		this.props.onSubmit(user)
	}

	closeError() {
		this.setState({error: undefined})
	}

	render() {
		const {error, user: {name, email, password, gender, age}} = this.state
		const {loading} = this.props
		return (
			<form className="Signup__Form" onSubmit={this.onSubmit}>
  			<div className="row clearfix">
  				<div className="col-xs-12">
						{!!error && <ErrorMessage onClick={this.closeError} error={error} />}
  					<div className="form-group">
  						<div className="controls">
  							<input 
  								type="text"
  								name="name"
  								placeholder="Nombre"
  								value={name}
  								onChange={this.onChange.bind(this, 'name')}
  								className="form-control input-lg"
								/>
  						</div>
  					</div>
					</div>
					
  				<div className="col-xs-12">
  					<div className="form-group">
  						<div className="controls">
  							<input
  								type="text"
  								name="email"
  								placeholder="Email"
  								value={email}
  								onChange={this.onChange.bind(this, 'email')}
  								className="form-control input-lg"
								/>
  						</div>
  					</div>
					</div>
					
  				<div className="col-xs-12">
  					<div className="form-group">
  						<div className="controls">
  							<input
  								type="password"
  								name="password"
  								placeholder="Contraseña"
  								value={password}
  								onChange={this.onChange.bind(this, 'password')}
  								className="form-control input-lg"
								/>
  						</div>
  					</div>
					</div>
					
  				<div className="col-xs-12">
  					<div className="form-group">
  						<div className="radio">
							  <label>
							    <input
							    	type="radio"
							    	checked={gender === 'male'}
							    	onChange={this.onChange.bind(this, 'gender')}
							    	name="gender"
							    	value="male"
						    	/>
							    <span>Hombre</span>
							  </label>
							</div>
							<div className="radio">
							  <label>
							    <input
							    	type="radio"
							    	checked={gender === 'female'}
							    	onChange={this.onChange.bind(this, 'gender')}
							    	name="gender"
							    	value="female"
						    	/>
							    <span>Mujer</span>
							  </label>
							</div>
  					</div>
					</div>
					
  				<div className="col-xs-12">
  					<div className="form-group">
  						<div className="controls">
  							<select 
  								type="text"
  								name="age"
  								placeholder="Edad"
  								value={age}
  								onChange={this.onChange.bind(this, 'age')}
  								className="form-control input-lg"
								>
									<option >--Seleccione una opción--</option>
									<option value='{"min":18, "max":20}'>Mayor de 18</option>
									<option value='{"min":13, "max":17}'>Menor de 18</option>
  							</select>
  						</div>
  					</div>
					</div>
					
          <div className="col-xs-12">
          	{!!loading && <ButtonLoading />}
          	{!loading && 
	        		<button className="btn btn-dark-red btn-block" type="submit">
	          		Crear usuario
	        		</button>}
          </div>
					
  			</div>
  		</form>
		)
	}
}

SignupForm.propTypes = {
	onSubmit: T.func,
	loading: T.bool,
}

SignupForm.defaultProps = {
	onSubmit: () => {},
}

export default SignupForm
