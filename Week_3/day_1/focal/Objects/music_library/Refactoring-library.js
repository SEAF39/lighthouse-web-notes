// Module 1 - Week3
// Music Library With Methods - Assignment

const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"},
  t04: { id: 't04',
    name: 'Right',
    artist: 'Mac Miller',
    album: 'Circles'}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  },

  printPlaylists: function() {
    for (let Object in this) {
      if (Object === 'playlists') {
        for (let playlist in this[Object]) {
          console.log(`${this[Object][playlist]['id']}: ${this[Object][playlist]['name']} - ${this[Object][playlist]['tracks'].length} tracks`);
        }
      }
    }
  },
  printTracks: function() {
    for (let Object in this) {
      if (Object === 'tracks') {
        for (let track in this[Object]) {
          console.log(`${this[Object][track]['id']}: ${this[Object][track]['name']} by ${this[Object][track]['artist']} (${this[Object][track]['album']})`);
        }
      }
    }
  },

  printPlaylist: function(playlistId) {
    console.log(`${playlistId}: ${this['playlists'][playlistId]['name']} - ${this['playlists'][playlistId]['tracks'].length} tracks`);
    for (let track of this['playlists'][playlistId]['tracks']) {
      console.log(`${this['tracks'][track]['id']}: ${this['tracks'][track]['name']} by ${this['tracks'][track]['artist']} (${this['tracks'][track]['album']})`);
    }
  },

  addTrackToPlaylist: function(trackId, playlistId) {
    this['playlists'][playlistId]['tracks'].push(trackId);
  },

  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function(name, artist, album) {
    const track = { id: `${this.generateUid()}`, name: `${name}`, artist: `${artist}`, album: `${album}` };
    this['tracks']['id'] = track;
  },

  addPlaylist: function(name) {
    const playlist = { id: `${this.generateUid()}`, name: `${name}`, tracks: [] };
    this['playlists']['id'] = playlist;
  }
  
};

const printSearchResults = function() {

};

library.printPlaylists();
library.printTracks();
library.printPlaylist('p01');
library.printPlaylist('p02');
library.addTrack('Ammer Diyab', 'Romanic', 'feeling happy');
library.printTracks();
library.addPlaylist('Elessa alhoob');
library.printPlaylists();
library.addTrackToPlaylist('t03', 'p02');
library.printPlaylists();

