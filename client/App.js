import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './components/LoginPage.jsx';
import ArtistPage from './components/ArtistPage.jsx';
import AlbumPage from './components/AlbumPage.jsx';
import PlayerPage from './components/PlayerPage.jsx';


export default class App extends React.Component {
	render() {
		return (
			<div>
				{/*<LoginPage />*/}
				{/*<ArtistPage />*/}
				{/*<AlbumPage />*/}
				<PlayerPage />
			</div>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('root'));