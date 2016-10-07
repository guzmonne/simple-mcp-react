import React, {PropTypes as T} from 'react'

const PortalFooter = ({portal,}) => {
	let domain;
	switch(portal) {
		case 'bas':
			domain = 'bas'
		case 'mhogar': 
			domain = 'multiahorro'
			break
		default: 
			domain = 'tata'
	}
	return (
		<footer>
			<p>
				<small>Comprá desde tu casa</small>
				<br/>
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
