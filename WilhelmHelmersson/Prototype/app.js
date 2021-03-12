//fetches the html elements
const bpm = document.getElementById("bpmSlider");
const bpmText = document.getElementById("bpmText");

// easy solution for a toggle play button
let playerOn = true


//Creates the player and sets its values
var player = new Tone.Player({
	"url" : "./assets/jaws.mp3",
	"autostart" : true,
  "loop" : true,
  "volume" : bpm.value
}).toDestination();

//hacked the button to make it work like a toggle
document.getElementById('button').addEventListener('click', () => {
  playerOn = !playerOn
  if(playerOn) {
    player.mute = false;
  } else {
    player.mute = true;
  }
})
//connects the slider with the text above it and also changes the volume
//It also converts the bpm value into an integer if you want to do some crazy math
//mutes the sound when you go to max range and unmutes everywhere else
bpm.oninput = () => {
  player.volume.value = bpm.value
  bpmText.textContent = parseInt(-bpm.value);
  console.log(bpm.value);
  if(bpm.value <= -30) {
    player.mute = true
  } else {
    player.mute = false
  } 
}
