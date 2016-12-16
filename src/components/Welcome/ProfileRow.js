import React, {PropTypes as T} from 'react'

const ProfileRow = ({profile}) => 
	<div className="row Welcome__profile">
		<div className="col-xs-12">
			<h3>Bienvenido</h3>
			<img 
				src={profile.Picture || 'http://placehold.it/50x50'}
				alt="Profile"
				className="img-circle Welcome__profile-picture"
			/>
			<h4>
				{profile.Name || ''}
			</h4>
		</div>
	</div>

ProfileRow.propTypes = {
	profile: T.shape({
		name: T.string,
		email: T.string,
		picture: T.string,
		base_grant_url: T.string,
	})
}

export default ProfileRow


