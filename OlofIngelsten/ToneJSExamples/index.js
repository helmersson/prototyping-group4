import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();

synth.triggerAttackRelease("C4", "8n");