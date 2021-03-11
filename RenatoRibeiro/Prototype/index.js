
//Renato Ribeiro bee prototype 2021 API LAB

//Instantiate distance Slider
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
    gain: -24
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
    frequency: 3000,
    rolloff: -24,
    Q: 0.5,
    gain: -20
}).connect(filterThree);

//create variable pitchShift that changes pitch according to distance(slider)
let pitchShift = new Tone.PitchShift({
    pitch: 0,
    windowSize: 0.1,
    delayTime: 0,
    feedback: 0
}).connect(filterFour);

//create distortion and connect to filterFour
let distortion = new Tone.Distortion({
    distortion: 0.2,
    oversample: "2x"
}).connect(pitchShift);

//connect the noise to distortion
noise.connect(distortion);


/*---------------------------------------------------------------------------------------*/
//Initialize pitch and slider values

pitchShift.pitch = 0;
distanceSlider.value = 50;

//Define pitch and slider range

let maxDistanceRange = 50;
let minDistanceRange = 1;
let minPitchShiftRange = 20;
let maxPitchShiftRange = 0;

//Define variable to store previous slider value

let prevVal = -1;


//define what slider does

distanceSlider.oninput = function () {
    output.innerHTML = this.value;

    //map distance value into pitchShift value 
    // taken from: https://stackoverflow.com/questions/8684327/c-map-number-ranges
    x = (this.value - minDistanceRange) / (maxDistanceRange - minDistanceRange);
    result = minPitchShiftRange + (maxPitchShiftRange - minPitchShiftRange) * x;

    //round to no decimal cases(pitch value doesn't have decimal cases)
    currentVal = result.toFixed(0);

    //Because rounding to no decimal cases makes the program call the same value multiple times
    //a condition is created. Only updates the pitch value if the current slider value (currentVal)
    //is different from the previous slider value (prevVal)


    if (currentVal != prevVal) {
        //set pitchShift value with current slider value
        pitchShift.pitch = currentVal;

        //update previous slider value variable
        prevVal = currentVal;
    }
};


//define what click on buttons do
button.addEventListener("click", () => {
    Tone.start();
    //start noise engine
    noise.start();
});

buttonStop.addEventListener("click", () => {
    //stop sound
    noise.stop();
    //reload page so the sound doesn't add on top of the previous sound when "start" is pressed.
    location.reload(true);
});

//present distance value on page
let output = document.getElementById("value");
output.innerHTML = distanceSlider.value;

