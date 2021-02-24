import React from 'react';
import Header from './Header';
import Links from './Links';
import { colorScheme } from '../details';

class App extends React.Component {

	render() {
		return (
			<div className={`wrap ${colorScheme}`}>
				<Header />
				<Links />
			</div>
		)
	}
}

export default App;