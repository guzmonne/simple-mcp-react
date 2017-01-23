import React, {PropTypes as T} from 'react'
import userImage from '../../_images/svg/user.svg'
import {formatMoney} from '../../modules/helpers.js'

const ProfileRow = ({profile, doc, onChange, showInput}) => 
	<div className="row Welcome__profile">
		<div className="col-xs-12">
			<h3>Bienvenido</h3>
			<img 
				src={profile.Picture || userImage}
				alt="Profile"
				className="img-circle Welcome__profile-picture"
			/>
			<h4>
				{profile.Name || ''}
			</h4>
		{showInput &&	
			<div className="Welcome__document_input">
				<p>Compartí con nosotros tu documento de identidad para obtener mejores beneficios.</p>
				<div className="form-group">
					<div className="controls">
						<input
							type="text"
							name="document"
							placeholder="Documento de identidad"
							value={formatMoney(doc)}
							onChange={onChange}
							className="form-control input-lg"
						/>
						<p>Solo números, sin guion.</p>
					</div>
				</div>
			</div>}
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


