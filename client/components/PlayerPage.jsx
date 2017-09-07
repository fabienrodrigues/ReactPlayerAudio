import React from 'react';
import './medias/styles/scss/playerPage.scss';
import ButtonBack from './buttons/ButtonBack.jsx';
import ButtonPlayBig from './buttons/ButtonPlayBig.jsx';
import ButtonPause from './buttons/ButtonPause.jsx';
import {store} from  './SharedDatas.js';
import Player from  './SharedDatas.js';


export default class PlayerPage extends React.Component {

	render() {
		let artist = store.artists[0];
		let album = artist.albums[0];
		let player = new Player(album, artist, album.musics[0].title, 1.00, album.musics[0].duration, true);

		let button = null;
		if (player.isPlaying) {
			button = <ButtonPause />
		} else {
			button = <ButtonPlayBig />
		}

		return (
			<div id="playerPage">
				<header>
					<ButtonBack />

					<div className="headerContent">
						<span className="avatar">
							<img src={player.artist.avatar} alt={player.artist} />
						</span>
					</div>
				</header>


				<div id="pageContent">
					<div className="albumThumb"><img src={player.album.thumb} /></div>
					
					<div className="albumText">
						<div className="currentMusic">{player.currentMusic}</div>
						<div className="artistName">{player.artist.name}</div>
						<div className="albumName">{player.album.name}</div>
					</div>

					<div className="playerContainer">
						<div className="playerControls">
							<a href="" className="btn prevMusic">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 24" width="31" height="24" className="fill white">
									<path d="M0.4,11.3L14.5,0.2C15.1-0.3,16,0.1,16,0.9v9.9L29.5,0.2C30.1-0.3,31,0.1,31,0.9v22.1c0,0.7-0.9,1.2-1.5,0.7 L16,13.2v9.9c0,0.7-0.9,1.2-1.5,0.7L0.4,12.7C-0.1,12.4-0.1,11.6,0.4,11.3z"/>
								</svg>
							</a>

							{button}

							<a href="" className="btn nextMusic">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 24" width="31" height="24" className="fill white">
									<path d="M30.6,11.3L16.5,0.2C15.9-0.3,15,0.1,15,0.9v9.9L1.5,0.2C0.9-0.3,0,0.1,0,0.9V23c0,0.7,0.9,1.2,1.5,0.7L15,13.2 v9.9c0,0.7,0.9,1.2,1.5,0.7l14.1-11.1C31.1,12.4,31.1,11.6,30.6,11.3z"/>
								</svg>
							</a>
						</div>

						<div className="playerSeekbar">
							<div className="currentTime">{player.currentTime}</div>
							<div className="duration">{player.currentDuration}</div>
							<div className="clearfix"></div>
							<div className="seekBarContainer">
								<div className="progressBar" style={{width: player.progress + '%'}}>
									<a className="disc"></a>
								</div>
							</div>
						</div>

						<div className="playerOptions">
							<div className="left">
								<a href="" className="btn random">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.5 21.5" width="24.5" height="21.5" className="fill grey">
										<path d="M19.5,15.4c-3.6-0.4-5.2-2.2-6.8-4.4c1.6-2.3,3.2-4,6.8-4.4v2.9l5-4.7l-5-4.7v3.6c-4.6,0.4-6.9,2.6-8.6,4.9
										C8.8,5.9,6,3.5,0,3.5v3c5.2,0,7.2,2,9,4.5c-1.8,2.5-3.9,4.5-9,4.5v3c6,0,8.8-2.4,10.9-5c1.8,2.3,4.1,4.5,8.6,4.9v3.1l5-4.7l-5-4.7
										V15.4z"/>
									</svg>
								</a>
							</div>
							<div className="center">
								<a href="" className="btn options">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 6" width="28" height="6" className="fill grey">
										<circle cx="3" cy="3" r="3"/>
										<circle cx="14" cy="3" r="3"/>
										<circle cx="25" cy="3" r="3"/>
									</svg>
								</a>
							</div>
							<div className="right">
								<a href="" className="btn loop">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.9 21" width="20.9" height="21" className="fill grey">
									<path d="M16.8,12c-0.7,2.9-3.3,5-6.3,5C6.9,17,4,14.1,4,10.5S6.9,4,10.5,4c1.7,0,3.2,0.7,4.4,1.7l-2.6,1.9l7.1,0.9
										l1.2-7.1l-2.5,1.9c-1.9-2-4.6-3.3-7.6-3.3C4.7,0,0,4.7,0,10.5C0,16.3,4.7,21,10.5,21c5.3,0,9.7-3.9,10.4-9H16.8z"/>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>				
			</div>
		);
	}
}