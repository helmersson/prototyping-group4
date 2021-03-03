
const button = document.getElementById("button");
const buttonStop = document.getElementById("buttonStop");



//create a synth and connect it to the master output
const synth = new Tone.MonoSynth({

    oscillator: {
        type: "square"
    },
    envelope: {
        attack: 0.1,

    }
}).toDestination();



function siren() {
    //starting notes of the siren
    noteLow = 392;
    noteHigh = 523;



    now = Tone.now();
    const loop = new Tone.Loop((now) => {

        synth.triggerAttackRelease(noteHigh, "4n", now);
        synth.triggerAttackRelease(noteLow, "4n", now + 0.5);

        //Lower pitch on every iteration
        noteLow = noteLow - 13;
        noteHigh = noteHigh - 13;



    }, "2n", 1, 2).start(now);

    Tone.Transport.start();

}


function stop() {
    Tone.Transport.stop();
    Tone.Transport.clear();
}


button.addEventListener("click", () => {
    Tone.start();
    siren();

});

buttonStop.addEventListener("click", () => {
    stop()
});

