import React from 'react'

class SocialButtons extends React.Component {
	constructor(props) {
		super(props)
		this.onClick = this.onClick.bind(this)
	}

	onClick(provider, e) {
		e.preventDefault()
		this.props.onClick(provider)
	}

	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
			    <a onClick={this.onClick.bind(this, 'facebook')}className="btn btn-social btn-facebook">
		        <i className="icon icon-facebook"></i>
		        Iniciar sesión con Facebook
		      </a>
				</div>
				<div className="col-xs-12">
		      <a onClick={this.onClick.bind(this, 'google')}className="btn btn-social btn-google">
		        <i className="icon icon-google"></i>
		        Iniciar sesión con Google
		      </a>
				</div>
			</div>
		)
	}
}

export default SocialButtons