import React, {PropTypes as T} from 'react'
import cn from 'classnames'
import wifiLogo from '../_images/wifi-logo.png'
import tataLogo from '../_images/tata-logo.png'

class WiFiAndTataLogo extends React.Component {
	render() {
		const {className} = this.props
		return (
			<div className={cn('row', className)}>
				<div className="col-xs-12">
					<img src={wifiLogo}
						className="img-responsive"
						alt="Wifi Logo"
					/>
					<img src={tataLogo}
						className="img-responsive"
						alt="Wifi Logo"
					/>
				</div>
			</div>
		)
	}
}

WiFiAndTataLogo.propTypes = {
	className: T.string,
}

export default WiFiAndTataLogo