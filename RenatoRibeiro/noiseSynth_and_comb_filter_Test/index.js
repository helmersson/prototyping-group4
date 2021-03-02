
const button = document.getElementById("button");
const buttonStop = document.getElementById("buttonStop");

let count = 0;

const noise = new Tone.Noise("pink");


function bee() {

    now = Tone.now();
    noise.sync().start(now);


    //make an autofilter to shape the noise
    var autoFilter = new Tone.AutoFilter({
        "frequency": "8m",
        "min": 800,
        "max": 15000
    }).connect(Tone.Master);

    //connect the noise
    noise.connect(autoFilter);
    //start the autofilter LFO
    autoFilter.start()

    Tone.Transport.start();


}


button.addEventListener("click", () => {
    count++;

    if (count === 1) {
        Tone.start();
        bee();
    }

});

buttonStop.addEventListener("click", () => {
    count = 0;
    now = 0;

    //noise.stop();
    Tone.Transport.stop();
    Tone.Transport.clear();
});
