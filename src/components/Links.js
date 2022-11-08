import React from 'react';
import { links } from '../details';

class Links extends React.Component {
	getLinks = () => {
		// Not really doing anything special here, so we'll just iterate over this to make unique keys.
		let key = 0;
		return (
			Object.values( links )
				.map( link => {
					key++;
					let link;

					if ( link.rel !== undefined ) {
						link = <a href={ link.url } rel={link.rel}>{ link.name }</a>
					} else {
						link = <a href={ link.url }>{ link.name }</a>
					};
					let output = (
						<li key={ key } className="links--single">
							<span className={ `${ link.prefix } fa-${ link.icon }` }></span>
							${ link }
						</li>

					);
					return output;
					} )
		)
	}

	render() {
		return (
			<ul className="links">
				{ this.getLinks() }
			</ul>
		)
	}
}

export default Links;
