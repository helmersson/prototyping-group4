//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
const slider = document.getElementById("slider");
const herz = document.getElementById("herz");
herz.innerHTML = slider.value;

slider.oninput = () => {
  herz.innerHTML = slider.value;
  //synth.triggerAttackRelease(slider.value);

}