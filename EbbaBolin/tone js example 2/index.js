const button = document.getElementById("button");
const synth = new Tone.Synth().toDestination();
const now = Tone.now();

const guitar = new Tone.Player("./sounds/guitar.wav").toDestination();
const drums = new Tone.Player("./sounds/drums.wav").toDestination();

document.getElementById("button").addEventListener("click", buttonGuitar);

  function buttonGuitar(){
    Tone.loaded().then(() => {
        guitar.start();
    });
  } 


document.getElementById("button1").addEventListener("click", buttonDrums);

function buttonDrums(){
  Tone.loaded().then(() => {
      drums.start();
  });
} 