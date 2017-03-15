import React, {PropTypes as T} from 'react'
import conatelLogo from '../_images/conatel_logo.png'

const PortalFooter = ({portal,}) => {
	let domain;
	switch(portal) {
		case 'bas':
			domain = 'bas'
			break;
		case 'mhogar': 
			domain = 'multiahorro'
			break
		case 'conatel':
			domain = 'conatel'
			break
		default: 
			domain = 'tata'
	}
	return (
		<footer className="PortalFooter">
			<p>
				{`www.${domain}.com.uy`}
			</p>
		</footer>
	)
}

PortalFooter.propTypes = {
	portal: T.string,
	className: T.string,
}

export default PortalFooter
