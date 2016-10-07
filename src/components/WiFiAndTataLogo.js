import React, {PropTypes as T} from 'react'
import WiFiAndLogo from './WiFiAndLogo.js'
import tataLogo from '../_images/tata-logo.svg'

class WiFiAndTataLogo extends React.Component {
	render() {
		const {className} = this.props
		return <WiFiAndLogo className={className} logo={tataLogo} />
	}
}

WiFiAndTataLogo.propTypes = {
	className: T.string,
}

export default WiFiAndTataLogo