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
const bee01 = new Tone.Player("./assets/Bee01.mp3");
bee01.loop = true;
bee01.autostart = true;
bee01.mute = true;
bee01.volume.value = -6;

const bee02 = new Tone.Player("./assets/Bee02.mp3");
bee02.loop = true;
bee02.autostart = true;
bee02.mute = true;
bee02.volume.value = -6;

const bee03 = new Tone.Player("./assets/Bee03.mp3");
bee03.loop = true;
bee03.autostart = true;
bee03.mute = true;
bee03.volume.value = -6;

const beeHive = new Tone.Player("./assets/BeeHive.mp3");
beeHive.loop = true;
beeHive.autostart = true;
beeHive.mute = true;
beeHive.volume.value = -6;

const forestSounds = new Tone.Player("./assets/ForestSounds.mp3");
forestSounds.loop = true;
forestSounds.autostart = true;
forestSounds.mute = true;
forestSounds.volume.value = 0;

//Declaring the lowpass filter
const filter = new Tone.Filter({
  type: "lowpass",
  frequency: 440,
  rolloff: -12,
  Q: 1,
  gain: -20
}).toDestination();

//Connect the MP3's to the filter
bee01.connect(filter);
bee02.connect(filter);
bee03.connect(filter);
beeHive.connect(filter);
forestSounds.connect(filter);

//Declaring the cutoff values for the different sounds.
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

//The moisture slider changes the affected frequencies of the lowpass filter
moistureSlider.oninput = () => {
  filter.frequency.value = map(moistureSlider.value, 0, 100, 100, 10000);
  moistureText.innerHTML = moistureSlider.value;
}

//A function that maps one set of numbers to another
const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;