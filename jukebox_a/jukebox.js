//
// var notes = [{pitch: 'A', beats: 1}, {pitch: 'C#', beats: 2}, {pitch: 'D', beats: 4}];
// // Play the song at 400 beats per minute.
// playSong(notes, 400);
//
//
//
// song string => "A*2 B*3 C#*1 C#*5"
// var note = prompt("Enter your song string: ");
// note
// var parseNote = function(note) {
//   var noteSplit = note.split("*") // ["C#", 2]
//   var note = {
//     pitch: noteSplit[0],
//     beats: noteSplit[1]
//   }
//   return note
// };
//
//
//
// // "C#*2 B*3"
// var parseSong = function(song) {
//   var songSplit = song.split(" ")
//   return songSplit
// }
// [Object, Object]
//
//
// playSong(parseSong(a), 200)
//
// //////////////////////
//
// var note = prompt("Enter a song: ")
// note
// var parseNote = function(note) {
//   var noteSplit = note.split("*");
//   var beats = parseInt(note[1]) || 1;
//   var noteObject = {}
//     pitch: noteSplit[0], beats: noteSplit[1];
//     return noteObject
//   };
//
//
//
// var parseSong = function(song) {
//   var songSplit = song.split(" ");
//   songArray = [];
//   for( i = 0; i < song.length; i++) {
//     songArray.push(parseNote(song[i]))
//   };
//   return songSplit
// };
//
// console.log( parseSong("C#*2 B*3") )
//
// //////////////////////////////////////////////

var parseNote = function(noteGiven){
  var note = noteGiven.split("*");
  var beats = parseInt(note[1]) || 1;
  var noteObject = {}
  noteObject["pitch"] = note[0];
  noteObject["beats"] = beats;
  return noteObject
};

var newSong = prompt("Please enter a song consisting of a string of notes:")
var newSong = "A*2 B*2 C#*2 C#*2 C#*2";

var songArray = undefined;
var parseSong = function(songGiven) {
  var song = songGiven.split(" ");
  songArray = [];
  for(i=0; i < song.length; i++) {
    songArray.push(parseNote(song[i]));
  };
  return songArray
};

playSong(parseSong(newSong), 400);

var loopSong = function(){
  var newSong = prompt("Please enter a song consisting of a string of notes:");
  if (!newSong) {
    alert("Seriously? You're no fun.")
  } else {
    playSong(parseSong(newSong), 400, loopSong);
  }
};


// var parseNote = function(noteString){
//   var noteObject = {};
//   var noteArray = noteString.split('*');
//   noteObject.pitch = noteArray[0];
//   noteObject.beats = noteArray[1];
//   return noteObject;
// };
//
// var parseSong = function(songString){
//   var noteObjectsArray = [];
//   var notes = songString.split(' ');
//
//   for(var i=0; i < notes.length; i++){
//     noteObjectsArray.push( parseNote(notes[i]) );
//   }
//   return noteObjectsArray;
// };
//
// var song = prompt("give me a song");
// playSong(parseSong(song), 300);
//
//
// var askForSong = function() {
//   var song = prompt("give me a song");
//   playSong(parseSong(song), 300, askForSong);
// }
//
// askForSong()
//
// for(;;){
//   var song = prompt("give me a song")
//   playSong(parseSong(song), 300);
// }
//
// var func = function(){
//   var song = prompt("give me a song");
//   var play = playSong(parseSong(song), 300, func);
//   return play;
// };
