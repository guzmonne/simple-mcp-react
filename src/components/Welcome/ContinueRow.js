import React, {PropTypes as T} from 'react'

const ContinueRow = ({baseGrantUrl, onSubmit}) => 
	<div className="row Welcome_continue">
		<div className="col-xs-12">
			<a href="#" onClick={onSubmit} className="btn btn-dark-red">
				Continuar hacia Internet
			</a>
		</div>
	</div>

ContinueRow.propTypes = {
	baseGrantUrl: T.string,
}

export default ContinueRow
