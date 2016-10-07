import React from 'react'
import cn from 'classnames'
import get from 'lodash/get'
import PortalLogo from './PortalLogo.js'
import PortalFooter from './PortalFooter.js'

class MainLayout extends React.Component {
	render() {
		const portal = get(this.props, 'location.query.portal', 'tata')
		return (
			<div className={cn('MainLayout', portal)}>
				<div className="MainLayout__container">
					<PortalLogo portal={portal} className="MainLayout__logo" />
					{this.props.children}
				</div>
				<PortalFooter portal={portal} />
			</div>
		)
	}
}

export default MainLayout
