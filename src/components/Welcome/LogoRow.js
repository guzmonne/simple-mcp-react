import React from 'react'
import logo from '../../_images/tata_logo_fill.png'

const LogoRow = () => 
	<div className="row text-center Welcome__image">
    <div className="col-xs-12">
      <img 
      	src={logo}
      	className="img-responsive"
      	alt="Tata Logo"
    	/>
    </div>
  </div>

export default LogoRow
