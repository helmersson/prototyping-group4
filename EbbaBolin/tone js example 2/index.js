const button = document.getElementById("button");
const synth = new Tone.Synth().toDestination();
const now = Tone.now();

const guitar = new Tone.Player("./sounds/guitar.wav").toDestination();

document.getElementById("button").addEventListener("click", mouseclick);

  function mouseclick(){
    Tone.loaded().then(() => {
        guitar.start();
    });
  } 
