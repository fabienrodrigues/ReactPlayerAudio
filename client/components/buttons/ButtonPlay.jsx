import React from 'react';

export default class ButtonPlay extends React.Component {
	buttonPlayPlayer() {
		console.log('click sur Play');
	}
	
	render() {
		return (
			<button className="btn play" onClick={() => this.buttonPlayPlayer()}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 26" width="18" height="26" className="fill white">
					<path d="M17.6,12.2c0.6,0.4,0.6,1.2,0,1.6l-15.9,12C1,26.3,0,25.8,0,25V1c0-0.9,1-1.3,1.7-0.8L17.6,12.2z"/>
				</svg>

				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 27" width="34" height="27" className="fill pink">
					<g>
						<path d="M22,2c0-1.1-0.9-2-2-2s-2,0.9-2,2v25h4V2z"/>
						<path d="M10,13c0-1.1-0.9-2-2-2s-2,0.9-2,2v14h4V13z"/>
						<path d="M28,10c0-1.1-0.9-2-2-2s-2,0.9-2,2v17h4V10z"/>
						<path d="M16,7c0-1.1-0.9-2-2-2s-2,0.9-2,2v20h4V7z"/>
						<path d="M34,18c0-1.1-0.9-2-2-2s-2,0.9-2,2v9h4V18z"/>
						<path d="M4,10c0-1.1-0.9-2-2-2s-2,0.9-2,2v17h4V10z"/>
					</g>
				</svg>
			</button>
		)
	}
}