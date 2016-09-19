import React, {PropTypes as T} from 'react'

const ContinueRow = ({baseGrantUrl}) => 
	<div className="row Welcome_continue">
		<div className="col-xs-12">
			<a href={baseGrantUrl || 'http://www.tata.com.uy/'} 
				className="btn btn-danger">
				Continuar hacia Internet
			</a>
		</div>
	</div>

ContinueRow.propTypes = {
	baseGrantUrl: T.string,
}

export default ContinueRow
