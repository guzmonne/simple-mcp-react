import React, {PropTypes as T} from 'react'
import cn from 'classnames'

const AuthorizingRow = ({provider}) => 
	<div className="Authorizing">
		<div className="Authorizing__inner">
			<h3>Autorizando</h3>
			<div className="loading-container">
				<div className="loading"></div>
				<div>
					<a href="#">
            <div className={cn('icon-container eclipse', {
            	[provider]: !!provider, 
            })}>
              <i className={cn('icon', {
              	'icon-wifi': !provider || provider === 'local',
              	[`icon-${provider}`]: !!provider, 
              })}></i>
            </div>
          </a>
				</div>
			</div>
		</div>
	</div>

AuthorizingRow.propTypes = {
	provider: T.string,
}

AuthorizingRow.defaultProps = {
	provider: 'wifi',
}

export default AuthorizingRow


