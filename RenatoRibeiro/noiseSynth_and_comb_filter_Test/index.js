
const button = document.getElementById("button");
const buttonStop = document.getElementById("buttonStop");


const noise = new Tone.Noise("pink");


function bee() {

    noise.start();


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

    bee();

});

buttonStop.addEventListener("click", () => {
    noise.stop();
});
