import React from 'react';

function Username({user}) {
	return (
		<>
			{user && (
				<div className="desktop-header__login">
					<span className="user-login-email">
						{user.displayName.split(' ')[0]}
					</span>
				</div>
			)}
		</>
	);
}

export default Username;
