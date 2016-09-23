import React from 'react'

class SocialButtons extends React.Component {
	constructor(props) {
		super(props)
		this.onClick = this.onClick.bind(this)
	}

	onClick(e, provider) {
		e.preventDefault()
		this.props.onClick(provider)
	}

	render() {
		return (
			<div className="row">
				<div className="col-xs-12 col-sm-6">
			    <a className="btn btn-social btn-facebook">
		        <i className="icon icon-facebook"></i>
		        Iniciar sesión con Facebook
		      </a>
				</div>
				<div className="col-xs-12 col-sm-6">
		      <a className="btn btn-social btn-google">
		        <i className="icon icon-google"></i>
		        Iniciar sesión con Google
		      </a>
				</div>
			</div>
		)
	}
}

export default SocialButtons