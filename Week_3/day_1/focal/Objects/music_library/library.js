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
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

const printPlaylists = function() {
       const playlists = library.playlists;
     
       for (let playlistId in playlists) {
         const playlist = playlists[playlistId];
         console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
       }
     };

     printPlaylists()
     console.log();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952).

const printTracks = function() {
  const tracks = library.tracks;
  for (const trackId in tracks) {
    const track = tracks[trackId];
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
};
printTracks()
     console.log(); 

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

const tracks = {
  p01: [
    { name: "Code Monkey", artist: "Jonathan Coulton", album: "Thing a Week Three" },
    { name: "Model View Controller", artist: "James Dempsey", album: "WWDC 2003" }
  ],
  p02: [
    { name: "Linus and Lucy", artist: "Vince GUARALDI TRIO", album: "A Charlie Brown Christmas" },
    { name: "Moon River", artist: "Audrey Hepburn", album: "Breakfast at Tiffany's" }
  ]
};

const printPlaylist = function(playlistId) {
  console.log(`${playlistId}: ${tracks[playlistId].length} tracks`);
  for (let i = 0; i < tracks[playlistId].length; i++) {
    let track = tracks[playlistId][i];
    console.log(`t0${i + 1}: ${track.name} by ${track.artist} (${track.album})`);
  }
};

printPlaylist("p01");
console.log();

// adds an existing track to an existing playlist

const tracks = [
  { id: "t01", name: "Code Monkey", artist: "Jonathan Coulton", album: "Thing a Week Three" },
  { id: "t02", name: "Model View Controller", artist: "James Dempsey", album: "WWDC 2003" },
  { id: "t03", name: "Linus and Lucy", artist: "Vince GUARALDI TRIO", album: "A Charlie Brown Christmas" },
  { id: "t04", name: "Moon River", artist: "Audrey Hepburn", album: "Breakfast at Tiffany's" }
];

const playlists = {
  p01: ["t01", "t02"],
  p02: ["t03", "t04"]
};

const addTrackToPlaylist = function(trackId, playlistId) {
  let trackExists = tracks.some(function(track) {
    return track.id === trackId;
  });

  let playlistExists = playlists.hasOwnProperty(playlistId);

  if (!trackExists) {
    console.log(`Track with id '${trackId}' doesn't exist.`);
    return;
  }

  if (!playlistExists) {
    console.log(`Playlist with id '${playlistId}' doesn't exist.`);
    return;
  }

  playlists[playlistId].push(trackId);
  console.log(`Track with id '${trackId}' added to playlist with id '${playlistId}'.`);
};

addTrackToPlaylist("t01", "p02");
console.log();


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {

}


// adds a playlist to the library
const addPlaylist = function(name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}