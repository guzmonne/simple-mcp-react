import React from 'react'
import {Link} from 'react-router'
import get from 'lodash/get'
import SignupForm from './SignupForm.js'
import ErrorMessage from './ErrorMessage.js'
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
		const query = get(this.props, 'location.query')
		Api.signupUser(data, query)
			.then(({href}) => location.href = href)
			.catch(error => this.setState({
				error: error,
				loading: false,
			}))
	}

	render() {
		const {error, loading} = this.state
		return (
			<div className="Signup text-center">
				<div className="row Signup__form">
					<div className="col-xs-12">
						<p>Ingrese sus datos:</p>
						<div className="row">
							<div className="col-xs-12">
								{!!error && <ErrorMessage error={errors[error.message] || 'Oops, ocurrio un error.'} onClick={this.closeError}/>}
							</div>
						</div>
						<SignupForm loading={loading} onSubmit={this.onSubmit}/>
						{!loading && 
	          	<Link to={{
	          		pathname: '/login',
			    			query: get(this.props, 'location.query'),
	          	}} className="btn btn-block btn-link">
								Iniciar Sesión
	          	</Link>}
					</div>
				</div>
			</div>
		)
	}
}

export default Signup
