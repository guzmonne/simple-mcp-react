import React from 'react'
import {Link} from 'react-router'
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
		this.getQueryParamsFromProps = this.getQueryParamsFromProps.bind(this)
		this.state = {
			error: undefined,
			loading: false,
		}
	}

	closeError(){
		this.setState({error: undefined})
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

	onSubmit(data) {
		this.setState({loading: true})
		const query = this.getQueryParamsFromProps()
		Api.signupUser(data, query)
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
						<div className="row">
							<div className="col-xs-12">
								{!!error && <ErrorMessage error={errors[error.message] || 'Oops, ocurrio un error.'} onClick={this.closeError}/>}
							</div>
						</div>
						<SignupForm loading={loading} onSubmit={this.onSubmit}/>
						{!loading && 
	          	<Link to={{
	          		pathname: '/login',
			    			query: this.getQueryParamsFromProps(),
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
