describe("Initial Setup Artist", function() {
var Spotyfi = require('../domain/Spotyfi');
var spotyfi;
beforeEach(function() {
  spotyfi = new Spotyfi();
});
it("should have the initial length of 0", function() {
  expect(spotyfi.length).toEqual(0);
});
});

describe("Adding Artists", function() {
  var Spotyfi = require('../domain/Spotyfi');
  var spotyfi;
  spotyfi = new Spotyfi();
it("should have the length of 1 after adding an Artist", function() {
  spotyfi.addArtist('Lany', 'Great great great');
  expect(spotyfi.length).toEqual(1);
});
it("should have the length of 2 after adding an Artist", function() {
  spotyfi.addArtist('Daft', 'Great');
  expect(spotyfi.length).toEqual(2);
});
});

describe("Add Albums", function() {
  var Spotyfi = require('../domain/Spotyfi');
  var spotyfi;
  spotyfi = new Spotyfi();
  spotyfi.addArtist('Lany', 'Great great great');
it("should have an album to the artist", function() {
  spotyfi.addAlbum('Lany', 'Lauv');
  expect(spotyfi.displayAllAlbums('Lany')).toEqual(['Lauv']);
});
it("should add another album to the artist", function() {
  spotyfi.addAlbum('Lany', 'Aris');
  expect(spotyfi.displayAllAlbums('Lany')).toEqual(['Lauv', 'Aris']);
})
});
