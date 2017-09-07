import React from 'react';

export default class ButtonSearch extends React.Component {
	buttonSearch() {
		console.log('click sur Search');
	}
	
	render() {
		return (
			<button className="btn search" onClick={() => this.buttonSearch()}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.1 22.9" width="23.1" height="22.9" className="fill white"><path d="M22.8 20.8L18 16c1.3-1.7 2-3.7 2-6 0-5.5-4.5-10-10-10S0 4.5 0 10s4.5 10 10 10c2.4 0 4.5-.8 6.2-2.2l4.8 4.8c.2.2.6.4.9.4s.6-.1.9-.4c.5-.5.5-1.3 0-1.8zM10 17.5c-4.1 0-7.5-3.4-7.5-7.5S5.9 2.5 10 2.5s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5z"/></svg>
			</button>
		)
	}
}