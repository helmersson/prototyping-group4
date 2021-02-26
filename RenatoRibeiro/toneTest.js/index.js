const synth = new Tone.MonoSynth({
    oscillator: {
        type: "square"
    },
    envelope: {
        attack: 0.5
    }
}).toDestination();
synth.triggerAttackRelease("C4", "8n");