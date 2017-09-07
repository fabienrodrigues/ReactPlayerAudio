import React from 'react';

export default class ButtonPause extends React.Component {
	buttonPausePlayer() {
		console.log('click sur Pause');
	}
	
	render() {
		return (
			<button className="btn pause" onClick={() => this.buttonPausePlayer()}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 26" width="23" height="26" className="fill white"><path d="M7 26H3c-1.6 0-3-1.4-3-3V3c0-1.6 1.4-3 3-3h4c1.6 0 3 1.4 3 3v20c0 1.6-1.4 3-3 3zM20 26h-4c-1.6 0-3-1.4-3-3V3c0-1.6 1.4-3 3-3h4c1.6 0 3 1.4 3 3v20c0 1.6-1.4 3-3 3z"/></svg>
			</button>
		)
	}
}