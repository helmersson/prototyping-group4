
const button = document.getElementById("button");

//create a synth and connect it to the master output (your speakers)
const synth = new Tone.MonoSynth({
    oscillator: {
        type: "square"
    },
    envelope: {
        attack: 0.2
    }
}).toDestination();


function siren() {

    now = Tone.now();
    synth.triggerAttackRelease("C5", "8n", now);
    synth.triggerAttackRelease("G4", "8n", now + 0.75);
    synth.triggerAttackRelease("C5", "8n", now + 1.50);
    synth.triggerAttackRelease("F#4", "8n", now + 2.25);
    synth.triggerAttackRelease("B4", "8n", now + 3);
    synth.triggerAttackRelease("F#4", "8n", now + 3.75);
    synth.triggerAttackRelease("A#4", "8n", now + 4.50);
    synth.triggerAttackRelease("F4", "8n", now + 5.25);


}


button.addEventListener("click", () => {
    Tone.start();
    siren();
})


