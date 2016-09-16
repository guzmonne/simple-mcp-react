import React, {PropTypes as T} from 'react'
import Spinner from './Spinner.js'
import cn from 'classnames'

const ButtonLoading = ({className}) =>
	<button className={cn('btn-spinner', className)} disabled>
		<Spinner />
	</button>

ButtonLoading.propTypes = {
	className: T.string,
}

ButtonLoading.defaultProps = {
	className: 'btn btn-red btn-block'
}

export default ButtonLoading
