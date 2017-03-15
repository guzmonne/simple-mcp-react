import React from 'react'
import Spinner from './Spinner.js'

class SocialButtons extends React.Component {
	constructor(props) {
		super(props)
		this.onClick = this.onClick.bind(this)
		this.state = {provider: null}
	}

	onClick(provider, e) {
		e.preventDefault()
		this.setState({provider})
		this.props.onClick(provider)
	}

	render() {
		return (
			<div className="SocialButtons col-xs-12">
			{this.state.provider === 'facebook' ? 
				<a href="#" onClick={e => e.preventDefault()} className="btn btn-social btn-facebook">
					<i className="icon icon-facebook"></i>
					<Spinner></Spinner>
				</a>
				:
				<a onClick={this.onClick.bind(this, 'facebook')} className="btn btn-social btn-facebook">
					<i className="icon icon-facebook"></i>
					Iniciar sesión con Facebook
				</a>
			}
			{this.state.provider === 'google' ? 
				<a href="#" onClick={e => e.preventDefault()} className="btn btn-social btn-google">
					<i className="icon icon-google"></i>
					<Spinner></Spinner>
				</a>
				:
				<a onClick={this.onClick.bind(this, 'google')} className="btn btn-social btn-google">
					<i className="icon icon-google"></i>
					Iniciar sesión con Google
				</a>
			} 

			</div>
		)
	}
}

export default SocialButtons