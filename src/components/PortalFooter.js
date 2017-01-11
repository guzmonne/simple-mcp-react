import React, {PropTypes as T} from 'react'

const PortalFooter = ({portal,}) => {
	let domain;
	switch(portal) {
		case 'bas':
			domain = 'bas'
			break;
		case 'mhogar': 
			domain = 'multiahorro'
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
