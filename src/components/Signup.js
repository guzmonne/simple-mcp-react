import React from 'react'
import SignupForm from './SignupForm.js'
import ErrorMessage from './ErrorMessage.js'
import logo from "../_images/tata_logo_fill.png"
import Api from '../modules/api.js'

const errors = {
	'email is in use': 'El usuario ya existe.'
}

class Signup extends React.Component {
	constructor(props) {
		super(props)
		this.onSubmit = this.onSubmit.bind(this)
		this.closeError = this.closeError.bind(this)
		this.state = {
			error: undefined,
			loading: false,
		}
	}

	closeError(){
		this.setState({error: undefined})
	}

	onSubmit(data) {
		this.setState({loading: true})
		Api.signupUser(data)
			.then(response => location.href = response)
			.catch(error => this.setState({
				error: error,
				loading: false,
			}))
	}

	render() {
		const {error, loading} = this.state
		return (
			<div className="Signup text-center">
				<div className="row Signup__logo">
					<div className="col-xs-12">
						<img src={logo}
							className="img-responsive"
							alt="TaTa Logo"/>
					</div>
				</div>

				<div className="row Signup__form">
					<div className="col-xs-12">
						<p className="text-shadow">Ingrese sus datos:</p>
						<div className="row col-xs-12">
							{!!error && <ErrorMessage error={errors[error.message] || 'Oops, ocurrio un error.'} onClick={this.closeError}/>}
						</div>
						<SignupForm loading={loading} onSubmit={this.onSubmit}/>
					</div>
				</div>
			</div>
		)
	}
}

export default Signup
