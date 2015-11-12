// promptAndPlay
//
// Prompts the user to enter a song.
// Plays the entered song.
// Repeats when the song is complete.
//
// var promptAndPlay = function() {
//   var songString = prompt("Welcome to JukeBox!\nEnter a song to play:");
//   var song = parseSong(songString);
//   playSong(song, 500, promptAndPlay);
// };
// //
// // // Get things going.
// promptAndPlay();
//
//
// A*2 C*2 G*2 F*2 E*2 G*2 E*2 F*2 E*2 C*3 D A*4
//
//   $(document).ready(function(){
//     $("#htmlbutton").click(function(){
//       $("#htmlbutton").on("click", prompt("Enter notes for playback: "));
//         alert("Playing...");
//           $(this).html('Playing...');
//         });
//     });
//
//
  $(document).ready(function(){
    $("#htmlbutton").click(function(){
      $("#htmlbutton").on("click", prompt("Enter notes for playback: "));
        alert("Playing...");
          $(this).html('Playing...');
        });
    });

//     document.getElementById("htmlbutton").addEventListener("click", function(playSong){
//     document.getElementById("htmlbutton").innerHTML = "Hello World";
// });








function myButton(playSong) {
  var button = document.createElement("Button");
  var text = document.createTextNode("Javascript Play");
  button.appendChild(text);
  document.body.appendChild(button)
}

myButton()
