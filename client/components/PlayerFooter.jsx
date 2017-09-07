import React from 'react';
import './medias/styles/scss/playerFooter.scss';
import AlbumItem from './AlbumItem.jsx';
import ButtonPause from './buttons/ButtonPause.jsx';

export default class PlayerFooter extends React.Component {
	render() {
		return (
			<div className="playerFooter">
				<AlbumItem album={this.props.album} thumb={this.props.thumb} artist={this.props.artist} currentMusic={this.props.currentMusic} />

				<ButtonPause />
			</div>
		)
	}
}