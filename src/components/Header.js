import React from 'react';
import { profile } from '../details';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="header--profile-pic">
					<img src={ profile.image } alt={ profile.name } />
				</div>
				<div className="header--name">
					<h1>{ profile.name }</h1>
				</div>
				<div className="header--pronouns">
					{ profile.pronouns }
				</div>
				<div className="header--bio">
					{ profile.bio }
				</div>
			</header>
		)
	}
}

export default Header;