//Create the synth and get a reference to the html button element
const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const button = document.getElementById("onButton");

//A function that triggers the first two bars of Mr.Sandman
function sandMan() {
  //Get a reference to the time of the activation of the function
  now = Tone.now()

  //synth.triggerAttackRelease("Note name", "Duration", "When to activate");
  synth.triggerAttackRelease("C3", "2n", now);
  synth.triggerAttackRelease("C4", "8n", now);
  synth.triggerAttackRelease("E4", "8n", now + 0.25);

  synth.triggerAttackRelease("G4", "8n", now + 0.5);
  synth.triggerAttackRelease("B4", "8n", now + 0.75);

  synth.triggerAttackRelease("C#3", "2n", now + 1);
  synth.triggerAttackRelease("A4", "8n", now + 1);
  synth.triggerAttackRelease("G4", "8n", now + 1.25);

  synth.triggerAttackRelease("F4", "8n", now + 1.5);
  synth.triggerAttackRelease("E4", "8n", now + 1.75);

  synth.triggerAttackRelease("D3", "2n", now + 2);
  synth.triggerAttackRelease("D4", "8n", now + 2);
  synth.triggerAttackRelease("F4", "8n", now + 2.25);

  synth.triggerAttackRelease("A4", "8n", now + 2.5);
  synth.triggerAttackRelease("C5", "8n", now + 2.75);

  synth.triggerAttackRelease("G2", "2n", now + 3);
  synth.triggerAttackRelease("B4", "2n", now + 3);
}

//Play the intro to Mr.Sandman when the button is pressed
button.addEventListener("mousedown", () => {
  Tone.start();
  sandMan();
})