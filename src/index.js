import React from 'react';
import { render } from 'react-dom';
import Title from './components/Title';
import App from './components/App';
import './assets/style.css';

render(
	<Title />,
	document.querySelector( 'title' )
);

render(
	<App />,
	document.querySelector( 'body' )
);