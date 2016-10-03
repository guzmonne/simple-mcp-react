import React from 'react'
import WiFiAndTataLogo from './WiFiAndTataLogo.js'

class MainLayout extends React.Component {
	render() {
		const {children} = this.props
		return (
			<div className="outer">
				<div className="MainLayout inner">
					<div className="container">
						<WiFiAndTataLogo className="MainLayout__logo" />
						{children}
					</div>
					<footer>
						<p>
							<small>comprá desde tu casa</small>
							<br/>
							www.tata.com.uy
						</p>
					</footer>
				</div>
			</div>
		)
	}
}

export default MainLayout
