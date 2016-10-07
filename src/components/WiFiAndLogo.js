import React, {PropTypes as T} from 'react'
import cn from 'classnames'
import wifiLogoDefault from '../_images/wifi-logo.png'

class WiFiAndLogo extends React.Component {
	render() {
		const {className, wifiLogo, secondaryLogo, logo} = this.props
		return (
			<div className={cn('row', className)}>
				<div className="col-xs-12">
					<img src={wifiLogo || wifiLogoDefault}
						className="img-responsive"
						alt="Wifi Logo"
					/>
				{secondaryLogo && 
					<img src={secondaryLogo}
						className="img-responsive secondary-logo"
						alt="Wifi Logo"
					/>
				}
					<img src={logo}
						className="img-responsive"
						alt="Wifi Logo"
					/>
				</div>
			</div>
		)
	}
}

WiFiAndLogo.propTypes = {
	className: T.string,
	logo: T.string,
}

export default WiFiAndLogo