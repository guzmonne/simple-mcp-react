import React, {PropTypes as T} from 'react'
import ButtonLoading from '../ButtonLoading.js'

const ContinueRow = ({baseGrantUrl, onSubmit, submitting}) => 
	<div className="row Welcome_continue">
		<div className="col-xs-12">
		{submitting 
		? <ButtonLoading />
		: <a href="#" onClick={onSubmit} className="btn btn-dark-red">
				Continuar hacia Internet
			</a>}
		</div>
	</div>

ContinueRow.propTypes = {
	baseGrantUrl: T.string,
}

export default ContinueRow
