//1. Renamed functions and variables
//2. Deleted useless code
//3. Remove debugging and logging statements
//4. A Routine is too long
//5 A loop is too long or too deeply nested
//6. A routine has a poor name
function Spotify()
{
	//renamed Array
	var list_of_artists = [];
	this.length = 0;

	/*-------------------ENTITIES----------------------------*/
	//Arist Entity
	var artist = function(name, description){
		var albums = []
		return { 
			name:name, 
			description:description,
			albums:albums
		}
	}

	//Album Entity	
	var album = function(title,desciption)
	{
		this.song_count = 0;
		songs_list = [];
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

	/*-------------------ADDING METHODS----------------------*/	
	//Add Singer
	//renamed Singer to Artist
	this.addArtist = function (name, description){
		var _artist = new artist(name,description);
		list_of_artists[this.length] = _artist;
		this.length += 1;
	};

	//Add Album
	this.addAlbum = function (singer,album_title,album_description){
		var alb = new album(album_title,album_description);
		alb_len = this.getArtist(singer).albums.length;
		this.getArtist(singer).albums[alb_len] = alb;
		this.getArtist(singer).albums.length += 1;
	};
	
	//Add Song
	this.addSong = function (song_title, album_title, artist){
		var s = new song(song_title);
		songs_len = this.getAlbum(artist,album_title).songs.length;
		this.getAlbum(artist,album_title).songs[songs_len] = s;
		this.getAlbum(artist,album_title).songs.length += 1;
	};

	/*----------------------GET METHODS----------------------*/	
	//Get Singer
	//Changed to GetArtist
	//Instead of sending the index in the array of singers it sends the Artist entity instead
	this.getArtist = function(singer){
		//finds the singer in the array and returns the singer;
		for (var i  = 0; i < list_of_artists.length; i++) {
			if((list_of_artists[i].name) === singer){
				return list_of_artists[i];
			}
		}
		return -1;
	}
	
	//Get Album
	//Return the Album entity instead of the index
	this.getAlbum = function(artists, album_name){
		artist = this.getArtist(artists);

		for (var i = 0; i <= artist.albums.length; i++) {
			if(artist.albums[i].title === album_name){
				return artist.albums[i];
			}
		}
		return -1;
	}

	//Get Song
	this.getSong = function(song_title, album_name, artists){
		artist = this.getArtist(artists);

		//Loop inside the artists's album
		for (var i = 0; i <= artist.albums.length; i++) {

			//Check if album we are looking for is in the singer's album
			if(artist.albums[i] === album_name){

				//Find the song we are looking inside the album
				for(var j = 0; j < artist.albums[i].songs.length;j++){
					if(artist.albums[i].songs[i].title === song_title){
						return j; //return the song
					}
				}
			}
		}
		return -1; //if not existing
	}
	
	/*------------------------DISPLAY METHODS----------------------*/		
	//Display All Albums
	this.displayAllAlbums = function(artist){
		albumss = this.getArtist(artist).albums;
		album_array= [];
		albumss.length -= 1;
		//changed from this
		// for (var i = 0; i < albumss.length; i++) {
		// 		arr[i] = albumss[i].title;
		// }
		//to this
		function checkAndInclude(album, index){
		album_array[index] = album.title;
		};
		albumss.forEach(checkAndInclude);
		return album_array;
	}

	//Display All Songs
	this.displayAllSongs = function(artist,album){
		list_of_songs = this.getAlbum(artist,album).songs;
		array_of_songs = [];
		list_of_songs.length -=1;

		function checkAndInclude(song, index){
		array_of_songs[index] = song.title;
		};
		list_of_songs.forEach(checkAndInclude);

		return array_of_songs;
	}
}
