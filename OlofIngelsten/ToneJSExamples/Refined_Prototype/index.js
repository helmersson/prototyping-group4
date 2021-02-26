const distanceSlider = document.getElementById("beeDistance");
const distanceText = document.getElementById("distanceText");
const moistureSlider = document.getElementById("soilMoisture");
const moistureText = document.getElementById("moistureText");
const offButton = document.getElementById("offButton");

distanceText.innerHTML = 1.5;
moistureText.innerHTML = 90;

const beeOne = new Tone.FMSynth().toDestination();
const beeTwo = new Tone.FMSynth().toDestination();
const beeThree = new Tone.FMSynth().toDestination();
const beeFour = new Tone.FMSynth().toDestination();

distanceSlider.oninput = () => {
  Tone.start();

  let now = Tone.now();

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



const signal = new Tone.Signal({
    value: "0",
    units: "detune"
  }).connect(beeOne.detune)
  .connect(beeTwo.detune)
  .connect(beeThree.detune)
  .connect(beeFour.detune);


moistureSlider.oninput = () => {
  signal.value = `${moistureSlider.value}`;

  moistureText.innerHTML = moistureSlider.value;
};

offButton.addEventListener("click", () => {
  beeFour.triggerRelease("0");
  beeThree.triggerRelease("0");
  beeTwo.triggerRelease("0");
  beeOne.triggerRelease("0");
})