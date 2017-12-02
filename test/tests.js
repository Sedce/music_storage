//User configurable property, influences whether stack trace is included in Assertion error message.
//Default of false suppresses stack trace in the error message.
//chai. config. includeStack = true; // turn on stack trace.
// const chai = require('chai');
// var Spotyfi = require('../domain/spotyfi').Spotyfi;
// console.log("test");
chai.config.includeStack = false;
chai.config.truncateThreshold = 0;
var assert = chai.assert;

describe('Spotyfi', function() {
    describe('addArtist(value,value)', function() {
        beforeEach(function() {
            // Spotyfi = spotyfi.
            this.spotyfi = new Spotyfi();
        });
        it('Should add Artists to the list of Artists', function() {
            this.spotyfi.addArtist('Lany', 'Great great great');
            assert.equal(this.spotyfi.length, 1);
            this.spotyfi.addArtist('Missing Filemon', 'Bisrock');
            assert.equal(this.spotyfi.length, 2);
            this.spotyfi.addArtist('Taylor Swift', 'PLAYING VICTIM');
            assert.equal(this.spotyfi.length, 3);
        });
    });

    describe('Add_Album(value,value)', function() {
        beforeEach(function() {
            this.spotyfi = new Spotyfi();
            this.spotyfi.addArtist('Lany', 'hahaha');
            this.spotyfi.addArtist('Kodaline', 'Very amazing band');
        });
        it('Should add an album to the artist', function() {
            this.spotyfi.addAlbum('Kodaline', 'In a perfect world');
            assert.deepEqual(this.spotyfi.displayAllAlbums('Kodaline'), ['In a perfect world']);
            this.spotyfi.addAlbum('Kodaline', 'Random Album');
            assert.deepEqual(this.spotyfi.displayAllAlbums('Kodaline'), ['In a perfect world', 'Random Album']);
            this.spotyfi.addAlbum('Kodaline', 'New Album');
            assert.deepEqual(this.spotyfi.displayAllAlbums('Kodaline'), ['In a perfect world', 'Random Album', 'New Album']);
        });
    });

    describe('Add_Song(value,value,value)', function() {
        beforeEach(function() {
            this.spotyfi = new Spotyfi();
            this.spotyfi.addArtist('Chigga', 'Black Indian Chinese');
            this.spotyfi.addAlbum('Chigga', 'Album Chigga');
        });
        it('Should add a song in the album', function() {
            this.spotyfi.addSong('Song1', 'Album Chigga', 'Chigga');
            assert.deepEqual(this.spotyfi.displayAllSongs('Chigga', 'Album Chigga'), ['Song1']);
        });
    });
});
