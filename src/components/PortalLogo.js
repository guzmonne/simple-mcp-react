import React, {PropTypes as T} from 'react'
import WiFiAndLogo from './WiFiAndLogo.js'
import wifiLogoDefault from '../_images/wifi-logo.png'
import tataLogo from '../_images/tata-logo.png'
import basLogo from '../_images/bas-logo.png'
import mhogarLogo from '../_images/mhogar-logo.png'
import conatelLogo from '../_images/conatel-logo.png'

const PortalLogo = ({portal, className}) => {
	let portalLogo, secondaryLogo, wifiLogo = wifiLogoDefault;
	switch(portal) {
		case 'bas':
			wifiLogo = null
			portalLogo = basLogo
			break
		case 'mhogar': 
			portalLogo = mhogarLogo
			break
		case 'conatel':
		wifiLogo = null
			portalLogo = conatelLogo
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
