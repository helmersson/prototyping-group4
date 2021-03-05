//Connecting to HTML elements
const distanceSlider = document.getElementById("beeDistance");
const distanceText = document.getElementById("distanceText");
const moistureSlider = document.getElementById("soilMoisture");
const moistureText = document.getElementById("moistureText");
const offButton = document.getElementById("offButton");

//Set text defaults when the page loads
distanceText.textContent = 1.5;
moistureText.textContent = 100;

//Get references to the MP3 files!
const bee01 = new Tone.Player("./assets/Bee01.mp3").toDestination();
bee01.loop = true;
bee01.autostart = true;
bee01.mute = true;
bee01.volume.value = -6;

const bee02 = new Tone.Player("./assets/Bee02.mp3").toDestination();
bee02.loop = true;
bee02.autostart = true;
bee02.mute = true;
bee02.volume.value = -6;

const bee03 = new Tone.Player("./assets/Bee03.mp3").toDestination();
bee03.loop = true;
bee03.autostart = true;
bee03.mute = true;
bee03.volume.value = -6;

const beeHive = new Tone.Player("./assets/BeeHive.mp3").toDestination();
beeHive.loop = true;
beeHive.autostart = true;
beeHive.mute = true;
beeHive.volume.value = -6;

const forestSounds = new Tone.Player("./assets/ForestSounds.mp3").toDestination();
forestSounds.loop = true;
forestSounds.autostart = true;
forestSounds.mute = true;
forestSounds.volume.value = 0;
//

distanceSlider.oninput = () => {
  Tone.start();
  const val = distanceSlider.value;

  if (val <= 100) {
    bee01.mute = false;
    forestSounds.mute = false;
  } else {
    bee01.mute = true;
    forestSounds.mute = true;
  }

  if (val <= 75) {
    bee02.mute = false;
  } else {
    bee02.mute = true;
  }

  if (val <= 50) {
    bee03.mute = false;
  } else {
    bee03.mute = true;
  }

  if (val <= 25) {
    beeHive.mute = false;
  } else {
    beeHive.mute = true;
  }

  distanceText.innerHTML = val / 100;
}

moistureSlider.oninput = () => {

  moistureText.innerHTML = moistureSlider.value;
}