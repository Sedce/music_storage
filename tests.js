chai.config.includeStack = false;
chai.config.truncateThreshold = 0;
var assert = chai.assert;

describe('Spotify', function(){
    describe('addSinger(value,value)', function(){
        beforeEach(function(){
            this.spotify = new Spotify();
        });
        it('Should add singers to the list of singers', function(){

            this.spotify.addSinger('Lany','Mga lami nga lalaki');
            assert.equal(this.spotify.length, 1);

            this.spotify.addSinger('Missing Filemon','Daddehs');
            assert.equal(this.spotify.length, 2);

            this.spotify.addSinger('Taylor Swift','PLAYING VICTIM');
            assert.equal(this.spotify.length, 3);
        });
        });
    
        describe('AddAlbum(value,value,value)', function(){
            beforeEach(function(){
                this.spotify = new Spotify();
                  this.spotify.addSinger('Lany','Mga lami nga lalaki');
                  this.spotify.addSinger('Kodaline','Mga maoy na lalaki');
            });
            it('Should add an album to the singer', function(){

                this.spotify.AddAlbum('Kodaline','In a perfect world', 'Sad album');
                assert.deepEqual(this.spotify.displayAllAlbums('Kodaline'), ['In a perfect world']);
                this.spotify.AddAlbum('Kodaline','Random Album', 'Random Album');
                assert.deepEqual(this.spotify.displayAllAlbums('Kodaline'), ['In a perfect world','Random Album']);
            });
        });
        describe('AddAlbum(value,value,value)', function(){
            beforeEach(function(){
                this.spotify = new Spotify();
                  this.spotify.addSinger('Lany','Mga lami nga lalaki');
                  this.spotify.addSinger('Kodaline','Mga maoy na lalaki');
            });
            it('Should add an album to the singer', function(){

                this.spotify.AddAlbum('Kodaline','In a perfect world', 'Sad album');
                assert.deepEqual(this.spotify.displayAllAlbums('Kodaline'), ['In a perfect world']);
                this.spotify.AddAlbum('Kodaline','Random Album', 'Random Album');
                assert.deepEqual(this.spotify.displayAllAlbums('Kodaline'), ['In a perfect world','Random Album']);
            });
        });
});

