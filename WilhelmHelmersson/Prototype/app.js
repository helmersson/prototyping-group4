//fetches the html elements
const bpm = document.getElementById("bpmSlider");
const bpmText = document.getElementById("bpmText");

// easy solution for a toggle play button
let playerOn = true


//will play as soon as it's loaded
var player = new Tone.Player({
	"url" : "./soundtrack/jaws.mp3",
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
//connects the bpm value with the slider and the text telling you what bpm your on
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
