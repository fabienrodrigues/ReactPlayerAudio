
export const store = {
	artists: [
		{
			id: 0,
			name: 'Nom de l\'artiste 1',
			avatar: 'datas/images/artists/artist1/avatar.jpg',
			// LISTE DES ALBUMS
			albums: [
				{
					name: 'Album 1',
					thumb: 'datas/images/artists/artist1/albums/album1/thumbAlbum1.jpg',
					musics : [
						{
							title: 'Music1',
							duration: 3.06,
						},
						{
							title: 'Music2',
							duration: 4.25,
						},
						{
							title: 'Music3',
							duration: 3.35,
						},
						{
							title: 'Music4',
							duration: 4.02,
						}
					]
				},
				{
					name: 'Album 2',
					thumb: 'datas/images/artists/artist1/albums/album2/thumbAlbum2.jpg',
					musics : [
						{
							title: 'Music1',
							duration: 3.06,
						},
						{
							title: 'Music2',
							duration: 4.25,
						},
						{
							title: 'Music3',
							duration: 3.35,
						},
						{
							title: 'Music4',
							duration: 4.02,
						}
					]
				},
				{
					name: 'Album 3',
					thumb: 'datas/images/artists/artist1/albums/album3/thumbAlbum3.jpg',
					musics : [
						{
							title: 'Music1',
							duration: 3.06,
						},
						{
							title: 'Music2',
							duration: 4.25,
						},
						{
							title: 'Music3',
							duration: 3.35,
						},
						{
							title: 'Music4',
							duration: 4.02,
						}
					]
				},
				{
					name: 'Album 1',
					thumb: 'datas/images/artists/artist1/albums/album1/thumbAlbum1.jpg',
					musics : [
						{
							title: 'Music1',
							duration: 3.06,
						},
						{
							title: 'Music2',
							duration: 4.25,
						},
						{
							title: 'Music3',
							duration: 3.35,
						},
						{
							title: 'Music4',
							duration: 4.02,
						}
					]
				},
				{
					name: 'Album 2',
					thumb: 'datas/images/artists/artist1/albums/album2/thumbAlbum2.jpg',
					musics : [
						{
							title: 'Music1',
							duration: 3.06,
						},
						{
							title: 'Music2',
							duration: 4.25,
						},
						{
							title: 'Music3',
							duration: 3.35,
						},
						{
							title: 'Music4',
							duration: 4.02,
						}
					]
				},
				{
					name: 'Album 3',
					thumb: 'datas/images/artists/artist1/albums/album3/thumbAlbum3.jpg',
					musics : [
						{
							title: 'Music1',
							duration: 3.06,
						},
						{
							title: 'Music2',
							duration: 4.25,
						},
						{
							title: 'Music3',
							duration: 3.35,
						},
						{
							title: 'Music4',
							duration: 4.02,
						}
					]
				},
				{
					name: 'Album 1',
					thumb: 'datas/images/artists/artist1/albums/album1/thumbAlbum1.jpg',
					musics : [
						{
							title: 'Music1',
							duration: 3.06,
						},
						{
							title: 'Music2',
							duration: 4.25,
						},
						{
							title: 'Music3',
							duration: 3.35,
						},
						{
							title: 'Music4',
							duration: 4.02,
						}
					]
				},
				{
					name: 'Album 2',
					thumb: 'datas/images/artists/artist1/albums/album2/thumbAlbum2.jpg',
					musics : [
						{
							title: 'Music1',
							duration: 3.06,
						},
						{
							title: 'Music2',
							duration: 4.25,
						},
						{
							title: 'Music3',
							duration: 3.35,
						},
						{
							title: 'Music4',
							duration: 4.02,
						}
					]
				},
				{
					name: 'Album 3',
					thumb: 'datas/images/artists/artist1/albums/album3/thumbAlbum3.jpg',
					musics : [
						{
							title: 'Music1',
							duration: 3.06,
						},
						{
							title: 'Music2',
							duration: 4.25,
						},
						{
							title: 'Music3',
							duration: 3.35,
						},
						{
							title: 'Music4',
							duration: 4.02,
						}
					]
				}
			]
		},
		{
			id: 1,
			name: 'Nom de l\'artiste 2',
			avatar: 'datas/images/artists/artist2/avatar.jpg',
			// LISTE DES ALBUMS
			albums: [
				{
					name: 'Album 1',
					thumb: 'datas/images/artists/artist1/albums/album1/thumbAlbum1.jpg',
					musics : [
						{
							title: 'Music1',
							duration: 3.06,
						},
						{
							title: 'Music2',
							duration: 4.25,
						},
						{
							title: 'Music3',
							duration: 3.35,
						},
						{
							title: 'Music4',
							duration: 4.02,
						}
					]
				},
				{
					name: 'Album 2',
					thumb: 'datas/images/artists/artist1/albums/album2/thumbAlbum2.jpg',
					musics : [
						{
							title: 'Music1',
							duration: 3.06,
						},
						{
							title: 'Music2',
							duration: 4.25,
						},
						{
							title: 'Music3',
							duration: 3.35,
						},
						{
							title: 'Music4',
							duration: 4.02,
						}
					]
				},
				{
					name: 'Album 3',
					thumb: 'datas/images/artists/artist1/albums/album3/thumbAlbum3.jpg',
					musics : [
						{
							title: 'Music1',
							duration: 3.06,
						},
						{
							title: 'Music2',
							duration: 4.25,
						},
						{
							title: 'Music3',
							duration: 3.35,
						},
						{
							title: 'Music4',
							duration: 4.02,
						}
					]
				}
			]
		}
	]
}

export default class Player {
	constructor(album, artist, currentMusic, currentTime, currentDuration, isPlaying) {
		this.album = album
		this.artist = artist
		this.currentMusic = currentMusic
		this.currentTime = currentTime
		this.currentDuration = currentDuration
		this.isPlaying = isPlaying
	}

	get progress() {
		return ((this.currentTime / this.currentDuration) * 100)
	}


	// DONNEES EXEMPLES
	/*album: {
		name: 'Nom de l\'album en cours',
		thumb: 'datas/images/artists/artist2/albums/album1/thumbAlbum1.jpg'
	},
	artist: {
		name: 'Nom de l\'artiste en cours',
		avatar: 'datas/images/artists/artist1/avatar.jpg'
	},
	currentMusic: 'La musique en cours',
	currentTime: 1.00,
	currentDuration: 3.06,
	progress: ((this.currentTime / this.currentDuration) * 100),
	isPlaying: false*/
}