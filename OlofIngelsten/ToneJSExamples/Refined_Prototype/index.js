//Connecting to HTML elements
const distanceSlider = document.getElementById("beeDistance");
const distanceText = document.getElementById("distanceText");
const moistureSlider = document.getElementById("soilMoisture");
const moistureText = document.getElementById("moistureText");
const offButton = document.getElementById("offButton");

//Set text defaults when the page loads
distanceText.innerHTML = 1.5;
moistureText.innerHTML = 100;

//Initialize the four synth voices
const beeOne = new Tone.FMSynth().toDestination();
const beeTwo = new Tone.FMSynth().toDestination();
const beeThree = new Tone.FMSynth().toDestination();
const beeFour = new Tone.FMSynth().toDestination();

//On input for the distance slider; triggering and releasing the voices
distanceSlider.oninput = () => {
  Tone.start();

  let now = Tone.now();

  //Setting the cutoff values
  if (distanceSlider.value < 25) {
    beeFour.triggerAttack("B4", now, 0.2)
  } else if (distanceSlider.value < 50) {
    beeFour.triggerRelease(now);

    beeThree.triggerAttack("G4", now, 0.2)
  } else if (distanceSlider.value < 100) {
    beeFour.triggerRelease(now);
    beeThree.triggerRelease(now);

    beeTwo.triggerAttack("E4", now, 0.2)
  } else if (distanceSlider.value <= 150) {
    beeFour.triggerRelease(now);
    beeThree.triggerRelease(now);
    beeTwo.triggerRelease(now);

    beeOne.triggerAttack("C4", now, 0.2)
  }

  distanceText.innerHTML = distanceSlider.value / 100;
};

//Signal options for the amount of detuning
//The synths are split in two and are detuned differently
//to make the sound very inharmonious
const signalOne = new Tone.Signal({
    value: "0",
    units: "detune"
  }).connect(beeOne.detune)
  .connect(beeThree.detune);

const signalTwo = new Tone.Signal({
    value: "0",
    units: "detune"
  }).connect(beeTwo.detune)
  .connect(beeFour.detune);

//Detunes the synths based on how the moisture slider is set
moistureSlider.oninput = () => {
  signalOne.value = `${moistureSlider.value}` - 100;
  signalTwo.value = map(moistureSlider.value, 0, 100, 47, 100) - 100;

  moistureText.innerHTML = moistureSlider.value;
};

//When the off button is pressed all of the synths stop playing
offButton.addEventListener("click", () => {
  beeFour.triggerRelease("0");
  beeThree.triggerRelease("0");
  beeTwo.triggerRelease("0");
  beeOne.triggerRelease("0");
});

//A function that maps one set of numbers to another
const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;