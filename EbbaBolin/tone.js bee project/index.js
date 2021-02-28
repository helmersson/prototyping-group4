const button = document.getElementById("button");
const button1 = document.getElementById("button1");
const synth = new Tone.Synth().toDestination();
const now = Tone.now();

const heartbeat = new Tone.Player("./sounds/heartbeat.wav").toDestination();
const vibration = new Tone.Player("./sounds/vibration.wav").toDestination();


document.getElementById("button1").addEventListener("click", heartbeatvibration);

function heartbeatvibration(){
    Tone.loaded().then(() => {
    heartbeat.start();
        document.getElementById("button1").style.backgroundColor = "darkred";
});
} 

document.getElementById("button").addEventListener("click", vibrationcrazy);

function vibrationcrazy(){
    Tone.loaded().then(() => {
    vibration.start();
        document.getElementById("button").style.backgroundColor = "darkgrey";
});
} 
