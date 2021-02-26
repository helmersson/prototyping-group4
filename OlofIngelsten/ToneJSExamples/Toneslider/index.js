//create a synth and connect it to the main output (your speakers)
const synth = new Tone.FMSynth().toDestination();

//Gets references to the html elements
const slider = document.getElementById("slider");
const offButton = document.getElementById("turnOff");
const onButton = document.getElementById("turnOn");
const herz = document.getElementById("herz");

//Display the slider value
herz.innerHTML = slider.value;

//Tuen on the sound when the button is pressed
onButton.addEventListener("mousedown", e => {
  slider.oninput = () => {
    herz.innerHTML = slider.value;
    synth.triggerAttack(slider.value, "0", 0.2);
  }
});

//Turn it off
offButton.addEventListener("mousedown", e => {
  synth.triggerRelease("1");
})