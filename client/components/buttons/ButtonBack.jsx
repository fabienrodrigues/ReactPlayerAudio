import React from 'react';

export default class ButtonBack extends React.Component {
	buttonBack() {
		console.log('click sur Back');
	}
	
	render() {
		return (
			<button className="btn back" onClick={() => this.buttonBack()}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.8 16.6" width="25.8" height="16.6" className="fill white"><path d="M24.6 6.7H5.1l4.2-4.2c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0L.4 7.3c-.6.6-.6 1.5 0 2.1l6.8 6.8c.6.6 1.5.6 2.1 0 .6-.6.6-1.5 0-2.1L5.1 9.8h19.5c.7 0 1.3-.7 1.3-1.6s-.6-1.5-1.3-1.5z"/></svg>
			</button>
		)
	}
}