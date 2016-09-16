import React from 'react'
import logo from '../_images/tata_logo_fill.png'
import cn from 'classnames'

class Welcome extends React.Component {
	constructor() {
		super()
		this.logoRow = this.logoRow.bind(this)
		this.profileRow = this.profileRow.bind(this)
		this.state = {
			authorized: false,
			error: false,
		}
	}

	logoRow() {
		return (
			<div className="row text-center Welcome__image">
        <div className="col-xs-12">
          <img 
          	src={logo}
          	className="img-responsive"
          	alt="Tata Logo"
        	/>
        </div>
      </div>
		)
	}

	profileRow() {
		return (
			<div className="row Welcome__profile">
				<div className="col-xs-12">
					<h3 className="text-shadow">Bienvenido</h3>
					<img 
						src="http://placehold.it/50x50"
						alt="Profile"
						className="img-circle Welcome__profile-picture"
					/>
					<h4 className="text-shadow">Profile Name</h4>
				</div>
			</div>
		)
	}

	continueRow() {
		return (
			<div className="row Welcome_continue">
				<div className="col-xs-12">
					<a href="http://www.tata.com.uy/" className="btn btn-danger">
						Continuar hacia Internet
					</a>
				</div>
			</div>
		)
	}

	authorizingRow() {
		return (
			<div className="Authorizing">
				<div className="Authorizing__inner">
					<h3 className="text-shadow">Autorizando</h3>
					<div className="loading-container">
						<div className="loading"></div>
						<div>
							<a href="#">
	              <div className={cn('icon-container eclipse', {
	              	[this.props.location.query.provider]: !!this.props.location.query.provider, 
	              })}>
	                <i className={cn('icon', {
	                	'icon-wifi': !this.props.location.query.provider,
	                	[`icon-${this.props.location.query.provider}`]: !!this.props.location.query.provider, 
	                })}></i>
	              </div>
	            </a>
						</div>
					</div>
				</div>
			</div>
		)
	}

	errorRow() {
		return (
			<div className="Error">
				<div className="row">
					<div className="col-xs-12">
						<h3 className="text-shadow">¡Error!</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<a href="http://www.tata.com.uy/" className="btn btn-danger">
							Continuar hacia Internet
						</a>
					</div>
				</div>
			</div>
		)
	}

	render() {
		const {error, authorized} = this.state
		return (
			<div className="Welcome">
				{!error && !!authorized && this.logoRow()}
				{!error && !!authorized && this.profileRow()}
				{!error && !!authorized && this.continueRow()}
				{!error && !authorized && this.authorizingRow()}
				{!!error && this.errorRow()}
			</div>
		)
	}
}

export default Welcome
