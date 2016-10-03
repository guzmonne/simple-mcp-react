import React, {PropTypes as T} from 'react'
import cn from 'classnames'
import logoSrc from "../_images/tata_logo_fill.png"

const TataLogoTransparent = () =>
	<div className="row">
		<div className="col-xs-12">
			<img src={logoSrc}
				className="img-responsive"
				alt="TaTa Logo"/>
		</div>
	</div>

	
TataLogoTransparent.propTypes = {
	className: T.string,
}

export default TataLogoTransparent
