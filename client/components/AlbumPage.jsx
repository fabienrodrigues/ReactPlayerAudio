import React from 'react';
import './medias/styles/scss/albumPage.scss';
import ButtonBack from './buttons/ButtonBack.jsx';
import MusicItem from './MusicItem.jsx';
import PlayerFooter from './PlayerFooter.jsx';
import {store} from  './SharedDatas.js';
import {player} from  './SharedDatas.js';


export default class AlbumPage extends React.Component {

	render() {
		
		let artist = store.artists[0];
		let album = artist.albums[0];

		return (
			<div id="albumPage">
				<header>
					<div className="headerBg">
						<img src={album.thumb} alt={album.name}/>
					</div>

					<ButtonBack />

					<div className="headerContent">
						<div className="albumName">{album.name}</div>
						<span className="artistName">{artist.name}</span>
						<span className="avatar">
							<img src={artist.avatar} alt={artist.name} />
						</span>
					</div>
				</header>

				<div id="pageContent">
					<div className="musicsList">
						{
							album.musics.map((music) => (
									<MusicItem album={album.name} music={music} artist={artist.name} />
								)
							)
						}
					</div>
				</div>

				<footer>
					<PlayerFooter album={player.album.name} thumb={player.album.thumb} artist={player.artist.name} currentMusic={player.currentMusic}/>
				</footer>
			</div>
		)
	}
}