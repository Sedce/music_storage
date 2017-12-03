function Spotyfi() {
    //Renamed Array
    var list_of_artists = [];
    this.length = 0;

    //Arist Entity
    var Artist = function(name, description) {
        var albums = [];
        return {
            name: name,
            description: description,
            albums: albums
        };
    }

    //Album Entity
    var Album = function(title) {
        this.song_count = 0;
        song_list = [];
        return {
            title: title,
            songs: song_list
        };
    }

    //Song Entity
    var Song = function(title) {
        return {
            title: title
        };
    }

    this.addArtist = function(name, description) {
        var newArtist = new Artist(name, description);
        list_of_artists[this.length] = newArtist;
        this.length += 1;
    };

    this.addAlbum = function(singer, album_title) {
        var newAlbum = new Album(album_title);
        newAlbum_size = this.getArtist(singer).albums.length;
        this.getArtist(singer).albums[newAlbum_size] = newAlbum;
        this.getArtist(singer).albums.length += 1;
    };

    this.addSong = function(song_title, album_title, artist) {
        var newSong = new Song(song_title);
        newSong_size = this.getAlbum(artist, album_title).songs.length;
        this.getAlbum(artist, album_title).songs[newSong_size] = newSong;
        this.getAlbum(artist, album_title).songs.length += 1;
    };

    //Instead of sending the index in the array of singers it sends the Artist entity instead
    this.getArtist = function(singer) {
        //finds the singer in the array and returns the singer;
        for (var count = 0; count < list_of_artists.length; count++) {
            if ((list_of_artists[count].name) === singer) {
                return list_of_artists[count];
            }
        }
        return -1;
    }

    //Return the Album entity instead of the index
    this.getAlbum = function(artists, album_name) {
        artist = this.getArtist(artists);

        for (var count = 0; count <= artist.albums.length; count++) {
            if (artist.albums[count].title === album_name) {
                return artist.albums[count];
            }
        }
        return -1;
    }

    this.getSong = function(song_title, album_name, artists) {
        artist = this.getArtist(artists);

        for (var count = 0; count <= artist.albums.length; count++) {

            //Check if album we are looking for is in the singer's album
            if (artist.albums[count] === album_name) {

                //Find the song we are looking inside the album
                for (var count_ = 0; j < artist.albums[count].songs.length; count_++) {
                    if (artist.albums[count].songs[count].title === song_title) {
                        return count_; //return the song
                    }
                }
            }
        }
        return -1; //if not existing
    }

    this.displayAllAlbums = function(artist) {
        list_of_albums = this.getArtist(artist).albums;
        album_array = [];
        list_of_albums.length -= 1;

        function checkAndInclude(album, index) {
            album_array[index] = album.title;
        };

        list_of_albums.forEach(checkAndInclude);

        return album_array;
    }

    this.displayAllSongs = function(artist, album) {
        list_of_songs = this.getAlbum(artist, album).songs;
        array_of_songs = [];
        list_of_songs.length -= 1;

        function checkAndInclude(song, index) {
            array_of_songs[index] = song.title;
        };
        list_of_songs.forEach(checkAndInclude);

        return array_of_songs;
    }
}
