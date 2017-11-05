//User configurable property, influences whether stack trace is included in Assertion error message.
//Default of false suppresses stack trace in the error message.
//chai. config. includeStack = true; // turn on stack trace.
chai.config.includeStack = false;
chai.config.truncateThreshold = 0;
var assert = chai.assert;

describe('Spotify', function(){
    describe('addArtist(value,value)', function() {
        beforeEach(function(){
            this.spotify = new Spotify();
        });
        it('Should add Artists to the list of Artists', function() {
            this.spotify.addArtist('Lany','Great great great');
            assert.equal(this.spotify.length, 1);
            this.spotify.addArtist('Missing Filemon','Bisrock');
            assert.equal(this.spotify.length, 2);
            this.spotify.addArtist('Taylor Swift','PLAYING VICTIM');
            assert.equal(this.spotify.length, 3);
        });
    });

    describe('Add_Album(value,value,value)', function() {
        beforeEach(function() {
            this.spotify = new Spotify();
            this.spotify.addArtist('Lany','hahaha');
            this.spotify.addArtist('Kodaline','Very amazing band');
        });
        it('Should add an album to the artist', function() {
            this.spotify.addAlbum('Kodaline','In a perfect world', 'Sad album');
            assert.deepEqual(this.spotify.displayAllAlbums('Kodaline'), ['In a perfect world']);
            this.spotify.addAlbum('Kodaline','Random Album', 'Random Album');
            assert.deepEqual(this.spotify.displayAllAlbums('Kodaline'), ['In a perfect world','Random Album']);
            this.spotify.addAlbum('Kodaline','New Album', 'Random Album');
            assert.deepEqual(this.spotify.displayAllAlbums('Kodaline'), ['In a perfect world','Random Album','New Album']);
        });
    });

    describe('Add_Song(value,value,value)', function() {
        beforeEach(function() {
            this.spotify = new Spotify();
            this.spotify.addArtist('Chigga','Black Indian Chinese');
            this.spotify.addAlbum('Chigga','Album Chigga', 'Race Descipriton Album');
        });
        it('Should add a song in the album', function() {
            this.spotify.addSong('Song1','Album Chigga','Chigga');
            assert.deepEqual(this.spotify.displayAllSongs('Chigga','Album Chigga'), ['Song1']);
        });
    });
});
