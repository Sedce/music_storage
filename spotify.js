function Spotify()
{
	var list_of_singers = [];
	this.length = 0;

	//Singer Entity
	var singer = function(name, description,){
		var album_list = []
		return { 
			name:name, 
			description:description,
			albums:album_list
		}
	}

	//Album Entity	
	var album = function(title,desciption)
	{
		this.song_count = 0;
		var song_list = [];
		return {
			title:title,
			songs:song_list
		}	
	}

	//Song Entity
	var song = function(title)
	{
		return {
			title:title
		}
	}

	this.addSinger = function (name, description){
		var new_artist = new singer(name,description);
		list_of_singers[this.length] = new_artist;
		this.length += 1;
	};

	this.addAlbum = function (singer,album_title,album_description){
		var new_album = new album(album_title,album_description);
		album_length = list_of_singers[this.getSinger(singer)].albums.length;
		list_of_singers[this.getSinger(singer)].albums[album_length] = new_album;
		list_of_singers[this.getSinger(singer)].albums.length += 1;
	};
	
	this.addSong = function (song_title, album_title, singer){
		var new_song = new song(song_title);
		songs_length = list_of_singers[this.getSinger(singer)].albums[this.getAlbum(singer,album_title)].songs.length;
		list_of_singers[this.getSinger(singer)].albums[this.getAlbum(singer,album_title)].songs[songs_length] = new_song;
		list_of_singers[this.getSinger(singer)].albums[this.getAlbum(singer,album_title)].songs.length += 1;
	};

	this.getSinger = function(name){
		//finds the singer in the array and returns the singer;
		for (var i  = 0; i < list_of_singers.length; i++) {
			if(list_of_singers[i].name == name){
				return i;
			}
		}
		return -1;
	}
	
	this.getAlbum = function(name, album_name){
		var artist = list_of_singers[this.getSinger(name)];

		for (var i = 0; i <= artist.albums.length; i++) {
			if(artist.albums[i].title == album_name){
				return i;
			}
		}
		return -1;
	}

	this.getSong = function(song_title, album_name, name){
		var artist = list_of_singers[this.getSinger(name)];

		for (var i = 0; i <= artist.albums.length; i++) {

			//Check if album we are looking for is in the singer's album
			if(artist.albums[i] == album_name){

				//Find the song we are looking inside the album
				for(var j = 0; j < artist.albums[i].songs.length;j++){
					if(artist.albums[i].songs[i].title == song_title){
						return j; //return the song
					}
				}
			}
		}
		return -1; //if not existing
	}
		
	this.displayAllAlbums = function(singer){
		list_albums = list_of_singers[this.getSinger(singer)].albums;
		albums = [];
		list_albums.length -= 1;

		for (var i = 0; i < list_albums.length; i++) {
			albums[i] = list_of_singers[this.getSinger(singer)].albums[i].title;
		}

		return albums;
	}

	this.displayAllSongs = function(singer,album){
		list_songs = list_of_singers[this.getSinger(singer)].albums[this.getAlbum(singer,album)].songs;
		songs = [];

		list_songs.length -= 1;

		for (var i = 0; i < list_songs.length; i++) {
			songs[i] = list_of_singers[this.getSinger(singer)].albums[i].songs[i].title;
		}

		return songs;
	}
}