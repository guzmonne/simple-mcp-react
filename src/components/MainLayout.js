import React from 'react'

class MainLayout extends React.Component {
	render() {
		const {children} = this.props
		return (
			<div className="outer">
				<div className="MainLayout inner">
					<div className="container">
						{children}
					</div>
				</div>
			</div>
		)
	}
}

export default MainLayout
