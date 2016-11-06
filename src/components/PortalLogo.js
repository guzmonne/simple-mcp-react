import React, {PropTypes as T} from 'react'
import cn from 'classnames'
import saltoGrandeLogo from '../_images/salto_grande_logo.png'
import urumanLogo from '../_images/uruman-logo.jpg'
import conatelLogo from '../_images/conatel_logo.png'

const logo = (portal) => {
	if (portal === 'jobic') return saltoGrandeLogo
	if (portal === 'uruman') return urumanLogo
	return conatelLogo
}

const PortalLogo = ({portal, className}) => {
	return (
		<div className={cn('row', className)}>
			<div className="col-xs-12">
				{portal === 'jobic' && <h1 className="Logo">Jobic 2016</h1>}
				<img src={logo(portal)}
					className="img-responsive"
					alt="Portal Logo"
				/>
				{portal === 'conatel' && <h1 className="Logo">Uruman 2016</h1>}
			</div>
		</div>
	)
}

PortalLogo.propTypes = {
	portal: T.string,
	className: T.string,
}

export default PortalLogo
