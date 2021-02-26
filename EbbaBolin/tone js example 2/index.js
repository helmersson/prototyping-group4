const button = document.getElementById("button");
const synth = new Tone.Synth().toDestination();
const now = Tone.now();

//const guitar = new Tone.Player("./sounds/guitar.wav").toDestination();
const drums = new Tone.Player("./sounds/drums.wav").toDestination();

document.getElementById("button").addEventListener("mousedown", buttonGuitar);
document.getElementById("button").addEventListener("mouseup", buttonGuitar2);

  function buttonGuitar(){
  
    synth.triggerAttack("D4", now)
     document.getElementById("button").style.backgroundColor = "lightpink";
    };

    function buttonGuitar2(){
  
      synth.triggerRelease(now+1)
       document.getElementById("button").style.backgroundColor = "white";
      };
   

  

document.getElementById("button1").addEventListener("click", buttonDrums);

function buttonDrums(){
  Tone.loaded().then(() => {
      drums.start();
      document.getElementById("button1").style.backgroundColor = "lightpink";
  });
} 

