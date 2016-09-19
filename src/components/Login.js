import React from 'react'
import SocialIcons from './SocialIcons.js'
import LoginForm from './LoginForm.js'
import logoSrc from "../_images/tata_logo_fill.png"

class Login extends React.Component {
	render() {
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
						<SocialIcons />
					</div>
				</div>

				<div className="row Login__form">
					<div className="col-xs-12">
						<p className="text-shadow">... o ingrese sus datos:</p>
						<LoginForm />
					</div>
				</div>
			</div>
		)
	}
}

export default Login
