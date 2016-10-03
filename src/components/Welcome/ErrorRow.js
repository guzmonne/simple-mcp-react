import React from 'react'
import {Link} from 'react-router'

const ErrorRow = () => 
	<div className="Error">
		<div className="row">
			<div className="col-xs-12">
				<h3>¡Error!</h3>
			</div>
		</div>
		<div className="row">
			<div className="col-xs-12">
				<Link to="/login" className="btn btn-dark-red">
					Volver a inicio de sesión
				</Link>
			</div>
		</div>
	</div>

export default ErrorRow
