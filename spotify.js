function Spotify()
{
	var list_of_singers = [];
	this.length = 0;

	/*-------------------ENTITIES----------------------------*/
	//Singer Entity
	var singer = function(name, description,){
		var arr = []
		return { 
			name:name, 
			description:description,
			albums:arr
		}
	}

	//Album Entity	
	var album = function(title,desciption)
	{
		this.song_count = 0;
		arr = [];
		return {
			title:title,
			songs:arr
		}	
	}

	//Song Entity
	var song = function(title)
	{
		return {
			title:title
		}
	}

	/*-------------------ADDING METHODS----------------------*/	
	//Add Singer
	this.addSinger = function (name, description){
		var artist = new singer(name,description);
		list_of_singers[this.length] = artist;
		this.length += 1;
	};

	//Add Album
	this.addAlbum = function (singer,album_title,album_description){
		var alb = new album(album_title,album_description);
		alb_len = list_of_singers[this.getSinger(singer)].albums.length;
		list_of_singers[this.getSinger(singer)].albums[alb_len] = alb;
		list_of_singers[this.getSinger(singer)].albums.length += 1;
	};
	
	//Add Song
	this.addSong = function (song_title, album_title, singer){
		var s = new song(song_title);
		songs_len = list_of_singers[this.getSinger(singer)].albums[this.getAlbum(singer,album_title)].songs.length;
		list_of_singers[this.getSinger(singer)].albums[this.getAlbum(singer,album_title)].songs[songs_len] = s;
		list_of_singers[this.getSinger(singer)].albums[this.getAlbum(singer,album_title)].songs.length += 1;
	};

	/*----------------------GET METHODS----------------------*/	
	//Get Singer
	this.getSinger = function(singer){
		//finds the singer in the array and returns the singer;
		for (var i  = 0; i < list_of_singers.length; i++) {
			if(list_of_singers[i].name == singer){
				return i;
			}
		}
		return -1;
	}
	
	//Get Album
	this.getAlbum = function(singer, album_name){
		artist = list_of_singers[this.getSinger(singer)];

		for (var i = 0; i <= artist.albums.length; i++) {
			if(artist.albums[i].title == album_name){
				return i;
			}
		}
		return -1;
	}

	//Get Song
	this.getSong = function(song_title, album_name, singer){
		artist = list_of_singers[this.getSinger(singer)];

		//Loop inside the singer's album
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
	
	/*------------------------DISPLAY METHODS----------------------*/		
	//Display All Albums
	this.displayAllAlbums = function(singer){
		albumss = list_of_singers[this.getSinger(singer)].albums;
		arr = [];
		albumss.length -= 1;

		for (var i = 0; i < albumss.length; i++) {
				arr[i] = list_of_singers[this.getSinger(singer)].albums[i].title;
		}

		return arr;
	}

	//Display All Songs
	this.displayAllSongs = function(singer,album){
		list_songs = list_of_singers[this.getSinger(singer)].albums[this.getAlbum(singer,album)].songs;
		arr = [];

		list_songs.length -= 1;

		for (var i = 0; i < list_songs.length; i++) {
			arr[i] = list_of_singers[this.getSinger(singer)].albums[i].songs[i].title;
		}

		return arr;
	}
}