import React, {PropTypes as T} from 'react'
import cn from 'classnames'

class WiFiAndLogo extends React.Component {
	render() {
		const {className, wifiLogo, secondaryLogo, logo} = this.props
		return (
			<div className={cn('WiFiAndLogo row', className)}>
				<div className="col-xs-12">
				{wifiLogo &&	
					<img src={wifiLogo}
						className="img-responsive"
						alt="Wifi Logo"
				/>}
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