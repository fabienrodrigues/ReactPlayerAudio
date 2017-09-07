import React from 'react';

export default class ButtonPlayBig extends React.Component {
	buttonPlayPlayer() {
		console.log('click sur Play');
	}
	
	render() {
		return (
			<button className="btn play" onClick={() => this.buttonPlayPlayer()}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 38" width="26" height="38" className="fill white">
					<path d="M25.4,17.8c0.9,0.6,0.9,1.8,0,2.3L2.4,37.7c-1,0.7-2.4,0-2.4-1.2V1.5c0-1.3,1.4-1.9,2.4-1.2L25.4,17.8z"/>
				</svg>
			</button>
		)
	}
}