import React from 'react';
import './medias/styles/scss/artistPage.scss';
import AlbumItem from './AlbumItem.jsx';
import ButtonBack from './buttons/ButtonBack.jsx';
import ButtonSearch from './buttons/ButtonSearch.jsx';
import PlayerFooter from './PlayerFooter.jsx';
import {store} from  './SharedDatas.js';
import {player} from  './SharedDatas.js';


function dispatch() {

}


export default class ArtistPage extends React.Component {

	render() {
		let artist = store.artists[0];
		let album = artist.albums[0];

		return (		
			<div id="artistPage">
				<header>
					<ButtonBack />

					<div className="headerContent">
						<span className="avatar">
							<img src={artist.avatar} alt={artist.name} />
						</span>
						<span className="artistName">{artist.name}</span>
					</div>

					<ButtonSearch />
				</header>

				<div id="pageContent">
					<div className="albumsList">
						{
							artist.albums.map((album) => (
									<AlbumItem album={album.name} thumb={album.thumb} artist={artist.name} />
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