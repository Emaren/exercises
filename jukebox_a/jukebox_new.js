var songRequest = prompt("Enter a string of notes: ")

var parseNote = function(noteGiven) {
  var note = noteGiven.split("*");
  var beats = note[1] || 1;
  var noteObject = {};
    noteObject["pitch"] = note[0];
    noteObject["beats"] = beats;
  return noteObject
};

var parseSong = function(songString) {
  var song = songString.split(" ");
  var songArray = [];
  for(i = 0; i < song.length; i++) {
    songArray.push(parseNote(song[i]));
  }
  return songArray
};

 playSong(parseSong(songRequest), 400);
















var songRequest = prompt("Enter a string of notes in (pitch)*(beat): ")

var parseNote = function(noteGiven) {
  var note = noteGiven.split("*");
  var beats = note[1] || 1;
  var noteObject = {};
  noteObject["pitch"] = note[0];
  noteObject["beats"] = beats;
  return noteObject
};

var parseSong = function(songString) {
  var songNotes = songString.split(" ");
  var songArray = [];
  for(i = 0; i < songNotes.length; i++) {
    songArray.push(parseNote(songNotes[i]));
  }
  return songArray
};

playSong(parseSong(songRequest), 200);


















// //
// // var songRequest = prompt("Give it to me in pitch and beats format (C#*1 B*2) : ")
// //   // var songRequest = prompt("Please enter a song consisting of a string of notes:");
// //
// // var parseNote = function(noteRequest) {
// //   var note = noteRequest.split("*");
// //   var beats = parseInt(note[1]) || 1;
// //   var noteObject = {};
// //   noteObject["pitch"] = note[0];
// //   noteObject["beats"] = beats;
// //   return noteObject
// // };
// //
// // var songArray = undefined;
// var parseSong = function(songString) {
//   var song = songString.split(" ");
// //   var songArray = [];
// //   for(i = 0; i < song.length; i++) {
// //     songArray.push(parseNote(song[i]));
// //   };
// //   return songArray
// // };
// //
// // playSong(parseSong(songRequest), 400);
// //
// //
// // //
// // // var loopSong = function(songRequest){
// // //   if (!songRequest) {
// // //     alert("Seriously? You're no fun.");
// // //   } else {
// // //     playSong(parseSong(songRequest), 400, loopSong);
// // //   }
// // // };
// // //
// // // playSong(loopSong(songRequest),400);
// // //
//
// // Godfather so far.. A*2 C*2 G*2 F*2 E*2 G*2 E*2 F*2 E*2 C*3 D A*4
