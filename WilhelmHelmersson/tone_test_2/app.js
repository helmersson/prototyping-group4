//fetches the html elements
const bpm = document.getElementById("bpmSlider");
const bpmText = document.getElementById("bpmText");
//sets the bpm text to 120
bpmText.textContent = 120;
// easy solution for a toggle play button
let playerOn = false
//creates a synth 
const synth = new Tone.Synth();
synth.oscillator.type = 'sine';
synth.envelope.attack = 0.001;
synth.envelope.sustain = 0.5;

const gain  = new Tone.Gain(0.4);
synth.connect(gain);
gain.toDestination();

const pattern = new Tone.Pattern((time, note) => {
// the order of the notes passed in depends on the pattern
synth.triggerAttackRelease(note, "8n", time)
}, ["C2", "D4", "E5", "A6"], "upDown");

Tone.Transport.bpm.value = 120
pattern.start();

//hacked the button to make it work like a toggle
document.getElementById('button').addEventListener('click', () => {
  playerOn = !playerOn
  if(playerOn) {
    Tone.Transport.start();
  } else {
    Tone.Transport.pause();
  }
})
//connects the bpm value with the slider and the text telling you what bpm your on
bpm.oninput = () => {
  Tone.Transport.bpm.rampTo(bpm.value)
  bpmText.textContent = bpm.value
  
}