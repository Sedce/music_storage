function Spotify()
{
	console.log("Spotify here");
	var list_of_singers = [];
	this.length = 0;


//the singer entity
var singer = function singer (name, description,){
		var arr = []
		return { name:name, description:description,albums:arr};
	}
//the song entity
var song = function song(title, length){
		this.title = title;
	}
//the album entity	
var album = function(title,desciption)
{
			this.song_count = 0;
			arr = [];
			return {title:title,songs:arr};		
}

this.addSong = function (song_title, album_title, singer){

    	list_of_singers[getSinger(siger)].album[findAlbum()].songs[this.song_count] = song_title;
    	list_of_singers[getSinger(siger)].album[findAlbum()].this.song_count += 1;
};
this.addSinger = function (name, description){
		console.log("Spotify here 1");
		kantaher = new singer(name,description);
		list_of_singers[this.length] = kantaher;
		this.length += 1;
	    console.log(kantaher.name + "name" + this.length + "count");
		

};
this.AddAlbum = function (singer,album_title,album_description){
		var alb = new album(album_title,album_description);
		alb_len = list_of_singers[this.getSinger(singer)].albums.length;
		list_of_singers[this.getSinger(singer)].albums[alb_len] = alb;
		list_of_singers[this.getSinger(singer)].albums.length += 1;


};
this.getAlbum = function(singer, album_name){
	   artist = list_of_singers[getSinger(singer)];
	   for (var i = 0; i <= artist.this.album_count; i++) {
	   			if(artist.albums[i] == album_name){
	   				return i;
	   			}
	   };
	   return -1;
}
this.getSinger = function(singer){
	//finds the singer in the array and returns the singer;
	for (var i  = 0; i < list_of_singers.length; i++) {
		
		if(list_of_singers[i].name == singer){
			console.log("Singer::" + list_of_singers[i].name);
			return i;
		}
	};
	return -1;
}
this.displayAllAlbums = function(singer){
	albumss = list_of_singers[this.getSinger(singer)].albums;
	arr = [];
	albumss.length -= 1;
	for (var i = 0; i < albumss.length; i++) {
			console.log(i + ":: i");
			arr[i] = list_of_singers[this.getSinger(singer)].albums[i].title;
	};
	return arr;
}
}