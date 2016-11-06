import React, {PropTypes as T} from 'react'

const ContinueRow = ({onClick, portal}) => 
	<div className="row Welcome_continue">
		<div className="col-xs-12">
			<a href="#" onClick={onClick}
				className="btn btn-dark-red">
			{portal === 'conatel' ? 'Finalizar inscripción' : 'Continuar hacia internet'}	
			</a>
		</div>
	</div>

ContinueRow.propTypes = {
	onClick: T.func.isRequired,
}

export default ContinueRow
