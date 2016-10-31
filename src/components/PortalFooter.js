import React, {PropTypes as T} from 'react'
import conatelLogo from '../_images/conatel_logo.png'

const PortalFooter = ({portal}) => {
	return (
		<footer>
			<p>
				{'Powered by: '}
				<img src={conatelLogo} className="ConatelLogo" alt="conatel logo"/>
			</p>
		</footer>
	)
}

PortalFooter.propTypes = {
	portal: T.string,
	className: T.string,
}

export default PortalFooter
