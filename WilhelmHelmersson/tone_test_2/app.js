const midi = new Midi()

// fetches the button from the HTML
const button = document.getElementById('button')


// Tone.js
var synth = new Tone.PolySynth( Tone.Synth, {
    oscillator: {
        type: "sine3"
    },
    envelope: {
        attack: .03,
        decay: .1,
        sustain: .2,
        release: .6
    }
}).toDestination()

function playNote(time, event) {
    synth.triggerAttackRelease(event.name, event.duration, time, event.velocity)
}


document.querySelector("button").addEventListener(".click", ()=> {
    Tone.start();
    // load a midi file in the browser
async function playMidi() {
    
    const midi = await new Midi.fromUrl("./midi/dr-dre.mid") 
    return midi;
}
const song = playMidi();

console.log(song);
Tone.Transport.bpm = song.bpm
Tone.Transport.timeSignature = song.timeSignature
Tone.Transport.start("0")
new Tone.Part(playNote, song.track.notes).start(0)
});
