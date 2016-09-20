import React from 'react'

class SocialIcons extends React.Component {
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
	    <div className="SocialIcons">
	      <a href="#"
	      	onClick={e => this.onClick(e, 'facebook')} 
	      	className="Login__social-icon">
	        <div className="icon-container facebook eclipse">
	          <i className="icon icon-facebook"></i>
	        </div>
	      </a>
	      <a href="#" 
	      	onClick={e => this.onClick(e, 'google')} 
	      	className="Login__social-icon">
	        <div className="icon-container google eclipse">
	          <i className="icon icon-google"></i>
	        </div>
	      </a>
	    </div>
		)
	}
}

export default SocialIcons