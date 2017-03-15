import React from 'react'
import cn from 'classnames'
import get from 'lodash/get'
import PortalLogo from './PortalLogo.js'
import PortalFooter from './PortalFooter.js'

class MainLayout extends React.Component {
	constructor() {
		super()
		this.getPortal = this.getPortal.bind(this)
		this.getPortalFromUrl = this.getPortalFromUrl.bind(this)
		this.getPortalFromCookie = this.getPortalFromCookie.bind(this)
		this.state = {
			portal: ''
		}
	}

	componentDidMount() {
		this.getPortal()
	}

	getPortal() {
		return this.getPortalFromUrl() ? true : this.getPortalFromCookie()
	}

	setPortal(portal) {
		document.cookie = 'portal=' + portal 
		this.setState({portal})
	}

	getPortalFrom(fn) {
		const portal = fn()
		if (portal)
			this.setPortal(portal)
		return portal
	} 

	getPortalFromUrl() {
		return this.getPortalFrom(() => get(this.props, 'location.query.portal'))
	}

	getPortalFromCookie(){
		return this.getPortalFrom(() => document.cookie.match(/portal=(.*?)(;|$)/)[1])
	}

	render() {
		const {portal} = this.state
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
