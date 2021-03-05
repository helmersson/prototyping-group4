
const distanceSlider = document.getElementById("distance");

//Instantiate two buttons to start and stop sound
const button = document.getElementById("button");
const buttonStop = document.getElementById("buttonStop");

//*------------------------------------------------------------------------------------- */
//create noise synth
const noise = new Tone.Noise("pink");

//Noise tone connects to distortion (at the bottom)==>Distortion connects to filters==>Filters
//connect to combFilter==> Combfilter connects to master output

//make an combFilter with feedback(resonance) to shape the noise and connect to Master output
let combFilter = new Tone.LowpassCombFilter({
    delayTime: 0.1,
    resonance: 0.4,
    dampening: 3000
}).connect(Tone.Master);

//create HighPass filter to clear bass frequencies and connect to CombFilter
let filterOne = new Tone.Filter({
    type: "highpass",
    frequency: 350,
    rolloff: -12,
    Q: 1,
    gain: -6
}).connect(combFilter);

//create notch filter to shape the sound and connect to filterOne
let filterTwo = new Tone.Filter(800, "notch").connect(filterOne);

//create bell shape filter to reduce "boxy" sound and connect to filterTwo
let filterThree = new Tone.Filter({
    type: "peaking",
    frequency: 400,
    rolloff: -12,
    Q: 1,
    gain: -10
}).connect(filterTwo);

//create Lowpass filter to take out high frequencies and connect to filterThree
let filterFour = new Tone.Filter({
    type: "lowpass",
    frequency: 6000,
    rolloff: -24,
    Q: 0.5,
    gain: -20
}).connect(filterThree);

//create variable HighPass filter that changes according to slider
let filterVariable = new Tone.Filter({
    type: "highpass",
    frequency: 350,
    rolloff: -12,
    Q: 1,
    gain: -6
}).connect(filterFour);


//create distortion and connect to filterFour
let distortion = new Tone.Distortion({
    distortion: 0.6,
    oversample: "4x"
}).connect(filterVariable);


//connect the noise to distortion
noise.connect(distortion);

//*------------------------------------------------------------------------------------*//
//define what click on buttons do
button.addEventListener("click", () => {
    //start noise engine
    noise.start();
});

buttonStop.addEventListener("click", () => {
    //stop sound
    noise.stop();
    //reload page so the sound doesn't add on top of the previous sound when "start" is pressed.
    location.reload(true);
});



distanceSlider.oninput = function () {
    output.innerHTML = this.value;
    filterVariable.frequency = this.value;


};

let output = document.getElementById("value");
output.innerHTML = distanceSlider.value;

