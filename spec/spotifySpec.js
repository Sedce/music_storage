describe("Initial Artist Setup", function() {
var Spotyfi = require('../domain/Spotyfi');
var spotyfi;
beforeEach(function() {
  spotyfi = new Spotyfi();
});
it("should not contain any Artist", function() {
  expect(spotyfi.length).toEqual(0);
});
});

describe("Adding Artists", function() {
  var Spotyfi = require('../domain/Spotyfi');
  var spotyfi;
  spotyfi = new Spotyfi();
it("should increase number of artists", function() {
  spotyfi.addArtist('Lany', 'Great great great');
  expect(spotyfi.length).toEqual(1);
  spotyfi.addArtist('Daft', 'Great');
  expect(spotyfi.length).toEqual(2);
});
});

describe("Adding Albums", function() {
  var Spotyfi = require('../domain/Spotyfi');
  var spotyfi;
  spotyfi = new Spotyfi();
  spotyfi.addArtist('Lany', 'Great great great');
it("should add an album to the artist", function() {
  spotyfi.addAlbum('Lany', 'Lauv');
  expect(spotyfi.displayAllAlbums('Lany')).toEqual(['Lauv']);
  spotyfi.addAlbum('Lany', 'Left');
  expect(spotyfi.displayAllAlbums('Lany')).toEqual(['Lauv','Left']);
});
});

describe("Adding Songs", function() {
  var Spotyfi = require('../domain/Spotyfi');
  var spotyfi;
  beforeEach(function() {
    spotyfi = new Spotyfi();
    spotyfi.addArtist('Chigga', 'Black Indian Chinese');
    spotyfi.addAlbum('Chigga', 'Album Chigga');
  });
  it('should add the song in the album', function() {
      spotyfi.addSong('Song1', 'Album Chigga', 'Chigga');
      expect(spotyfi.displayAllSongs('Chigga', 'Album Chigga')).toEqual(['Song1']);
  });
});
