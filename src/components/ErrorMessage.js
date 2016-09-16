import React, {PropTypes as T} from 'react'

const ErrorMessage = ({onClick, error}) => 
	<div onClick={onClick} className="alert alert-danger">
		{error}
	</div>

ErrorMessage.propTypes = {
	error: T.string,
}

export default ErrorMessage