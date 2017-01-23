import React, {PropTypes as T} from 'react'
import {formatMoney} from '../modules/helpers.js'
import ButtonLoading from './ButtonLoading.js'
import ErrorMessage from './ErrorMessage.js'

class SignupForm extends React.Component {
	constructor(props) {
		super(props)
		this.onChange = this.onChange.bind(this)
		this.onDocumentChange = this.onDocumentChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
		this.closeError = this.closeError.bind(this)
		this.state = {
			user: {
				name: '',
				email: '',
				password: '',
				document: undefined,
				gender: undefined,
				age: undefined,
			},
			error: undefined,
		}
	}

	onChange(key, isNumber) {
		const {user} = this.state
		return (event) => (
			this.setState({
				user: {
					...user,
					[key]: isNumber ? parseInt(event.target.value, 10) : event.target.value,
				}
			})
		)
	}

	onDocumentChange(e) {
		const {user} = this.state		
		const doc = parseInt(e.target.value.replace(/\D+/g, ''), 10)
		console.log(doc, formatMoney(doc, 0))
		this.setState({
			user: {
				...user,
				document: formatMoney(doc, 0)
			},
		})
	}

	onSubmit(e) {
		e.preventDefault()
		const {user} = this.state
		if (Object.keys(user).reduce((acc, key) => acc || user[key] === '', false)) {
			this.setState({error: 'Todos los campos son obligatorios.'})
			return
		}
		const result = Object.assign({}, user, {document: user.document.replace(/\D+/g, '')})
		this.props.onSubmit(result)
	}

	closeError() {
		this.setState({error: undefined})
	}

	render() {
		const {error, user: {name, email, password, gender, age, document:doc}} = this.state
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
  								onChange={this.onChange('name')}
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
  								onChange={this.onChange('email')}
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
  								onChange={this.onChange('password')}
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
  								name="document"
  								placeholder="Documento de identidad"
  								value={doc}
  								onChange={this.onDocumentChange}
  								className="form-control input-lg"
								/>
								<p>Solo números, sin guion.</p>
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
							    	onChange={this.onChange('gender')}
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
							    	onChange={this.onChange('gender')}
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
  								onChange={this.onChange('age')}
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
