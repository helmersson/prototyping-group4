const button = document.getElementById("button");
const synth = new Tone.Synth().toDestination();
const now = Tone.now();



document.getElementById("button").addEventListener("click", mouseclick);

function mouseclick (){
    synth.triggerAttackRelease("C4", now)

  }

    
    
    
    
