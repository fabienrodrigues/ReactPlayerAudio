import React from 'react';
import ButtonPlay from './buttons/ButtonPlay.jsx';

export default class MusicItem extends React.Component {
	render() {
		return (
			<div className="musicItem">
				<div className="musicText">
					<div className="musicName">{this.props.music}</div>
					<div className="artistName">{this.props.artist}</div>
				</div>

				<ButtonPlay />
			</div>
		)
	}
}