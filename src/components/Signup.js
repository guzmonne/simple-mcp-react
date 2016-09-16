import React from 'react'
import SignupForm from './SignupForm.js'
import logoSrc from "../_images/tata_logo_fill.png"

class Signup extends React.Component {
	render() {
		return (
			<div className="Signup text-center">
				<div className="row Signup__logo">
					<div className="col-xs-12">
						<img src={logoSrc}
							className="img-responsive"
							alt="TaTa Logo"/>
					</div>
				</div>

				<div className="row Signup__form">
					<div className="col-xs-12">
						<p className="text-shadow">Ingrese sus datos:</p>
						<SignupForm />
					</div>
				</div>
			</div>
		)
	}
}

export default Signup
