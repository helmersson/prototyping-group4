//Renato Ribeiro monoSynth and Loop test 2021 API LAB

//Instantiate two buttons to start and stop sound
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


//Create function that makes siren sound
function siren() {
    //starting notes of the siren
    noteLow = 392;
    noteHigh = 523;

    //define time
    now = Tone.now();

    //create loop
    const loop = new Tone.Loop((now) => {
        //define note length and starting time
        synth.triggerAttackRelease(noteHigh, "4n", now);
        synth.triggerAttackRelease(noteLow, "4n", now + 0.5);

        //Lower pitch on every iteration
        noteLow = noteLow - 13;
        noteHigh = noteHigh - 13;



    }, "2n", 1, 2).start(now);

    //start transport (time code for sync)
    Tone.Transport.start();

}

//define function to stop siren
function stop() {
    Tone.Transport.stop();
    Tone.Transport.clear();
}

//*------------------------------------------------------------------------------------*//
//define what click on buttons do

button.addEventListener("click", () => {
    Tone.start();
    siren();

});

buttonStop.addEventListener("click", () => {
    stop()
});

