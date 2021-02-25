import React from 'react';
import Header from './Header';
import Links from './Links';
import { colorScheme } from '../details';

class App extends React.Component {

	componentDidMount() {
		document.querySelector( 'body' ).className=colorScheme;
	}

	render() {
		return (
			<div className="wrap">
				<Header />
				<Links />
			</div>
		)
	}
}

export default App;