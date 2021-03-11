//get element by id
const button = document.getElementById("button");
const button1 = document.getElementById("button1");
//const synth = new Tone.Synth().toDestination();
const now = Tone.now();

//add my own sounds with tone.player
const heartbeat = new Tone.Player("./assets/heartbeat.wav").toDestination();
const heartbeat2 = new Tone.Player("./assets/heartbeat2.wav").toDestination();
//const vibration = new Tone.Player("./sounds/vibration.wav").toDestination();

//eventlisteners mousedown and mosuseup
document.getElementById("button1").addEventListener("mousedown", heartbeatstart);
document.getElementById("button1").addEventListener("mouseup", heartbeatstop);
document.getElementById("button").addEventListener("mousedown", heartbeatcrazystart);
document.getElementById("button").addEventListener("mouseup", heartbeatcrazystop);

//triggers start the sound on button heartbeat
function heartbeatstart(){
    Tone.loaded().then(() => {
    heartbeat.start();
        document.getElementById("button1").style.backgroundColor = "darkred";
});
} 

//stop the sound
function heartbeatstop(){
    Tone.loaded().then(() => {
    heartbeat.stop();
        document.getElementById("button1").style.backgroundColor = "white";
});
} 


//triggers start the sound on button crazy heartbeat
function heartbeatcrazystart(){
    heartbeat2.playbackRate = 1.25;
    Tone.loaded().then(() => {
    heartbeat2.start();
        document.getElementById("button").style.backgroundColor = "darkgrey";
});
}
//stop the sound to play
function heartbeatcrazystop(){
    heartbeat2.playbackRate = 1.25;
    Tone.loaded().then(() => {
    heartbeat2.stop();
        document.getElementById("button").style.backgroundColor = "white";
});
}

