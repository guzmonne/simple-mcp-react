import React, {PropTypes as T} from 'react'
import cn from 'classnames'
import saltoGrandeLogo from '../_images/salto_grande_logo.png'

const PortalLogo = ({portal, className}) => {
	return (
		<div className={cn('row', className)}>
			<div className="col-xs-12">
				<h1 className="Logo">Jobic 2016</h1>
				<img src={saltoGrandeLogo}
					className="img-responsive"
					alt="Wifi Logo"
				/>
			</div>
		</div>
	)
}

PortalLogo.propTypes = {
	portal: T.string,
	className: T.string,
}

export default PortalLogo
