import React from 'react';
import { profile } from '../details';

class Title extends React.Component {
	render() {
		return profile.name;
	}
}

export default Title;