import React from 'react';

export default class AlbumItem extends React.Component {
	render() {
		return (
			<a href="" className="albumItem">
				<div className="albumThumb"><img src={this.props.thumb} /></div>
				<div className="albumText">
					<div className="currentMusic">{this.props.currentMusic}</div>
					<div className="artistName">{this.props.artist}</div>
					<div className="albumName">{this.props.album}</div>
				</div>
			</a>
		)
	}
}