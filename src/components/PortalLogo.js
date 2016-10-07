import React, {PropTypes as T} from 'react'
import WiFiAndLogo from './WiFiAndLogo.js'
import tataLogo from '../_images/svg/tata-logo.svg'
import basLogo from '../_images/svg/bas-logo.svg'
import basTextLogo from '../_images/bas-logo-text.png'
import mhogarLogo from '../_images/mhogar-logo.png'
import wifiLogoBas from '../_images/wifi-logo-bas.png'

const PortalLogo = ({portal, className}) => {
	let portalLogo, secondaryLogo, wifiLogo;
	console.log(portal)
	switch(portal) {
		case 'bas':
			wifiLogo = wifiLogoBas
			portalLogo = basTextLogo
			secondaryLogo = basLogo
			break
		case 'mhogar': 
			portalLogo = mhogarLogo
			break
		default: 
			portalLogo = tataLogo
	}
	return <WiFiAndLogo className={className} wifiLogo={wifiLogo} logo={portalLogo} secondaryLogo={secondaryLogo}/>
}

PortalLogo.propTypes = {
	portal: T.string,
	className: T.string,
}

export default PortalLogo
