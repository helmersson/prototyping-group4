//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
const slider = document.getElementById("slider");
const offButton = document.getElementById("turnOff");
const onButton = document.getElementById("turnOn");
const herz = document.getElementById("herz");
herz.innerHTML = slider.value;


onButton.addEventListener("mousedown", e => {
  slider.oninput = () => {
    herz.innerHTML = slider.value;
    synth.triggerAttack(slider.value, "0", 0.2);
  }
});

offButton.addEventListener("mousedown", e => {
  synth.triggerRelease("1");
})