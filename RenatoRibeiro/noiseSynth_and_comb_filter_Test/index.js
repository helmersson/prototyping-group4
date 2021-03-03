
const button = document.getElementById("button");
const buttonStop = document.getElementById("buttonStop");



const noise = new Tone.Noise("pink");


function bee() {

    noise.start();


    /*//make an combFilter to shape the noise
    let combFilter = new Tone.LowpassCombFilter({
        delayTime: 0.1,
        resonance: 0.5,
        dampening: 3000
    }).connect(Tone.Master);*/


    let phaser = new Tone.Phaser({
        frequency: 0.5,
        octaves: 3,
        stages: 10,
        Q: 10,
        baseFrequency: 350
    }).connect(Tone.Master);

    let filter = new Tone.Filter(1200, "highpass").connect(phaser);

    /*let distortion = new Tone.Distortion({
        distortion: 0.4,
    }).connect(phaser); */


    //connect the noise
    noise.connect(filter);
    //noise.connect(phaser);
    //noise.connect(combfilter);
    //noise.connect(distortion);


}

button.addEventListener("click", () => {
    Tone.start();
    bee();
});

buttonStop.addEventListener("click", () => {
    noise.stop();
    location.reload(true);
});
