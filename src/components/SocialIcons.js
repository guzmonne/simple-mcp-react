import React from 'react'

class SocialIcons extends React.Component {
	render() {
		return (
	    <div className="SocialIcons">
	      <a href="https://kvmveb8o06.execute-api.us-east-1.amazonaws.com/dev/authentication/signin/facebook" 
	      	className="Login__social-icon">
	        <div className="icon-container facebook eclipse">
	          <i className="icon icon-facebook"></i>
	        </div>
	      </a>
	      <a id="google" href="https://kvmveb8o06.execute-api.us-east-1.amazonaws.com/dev/authentication/signin/google" 
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