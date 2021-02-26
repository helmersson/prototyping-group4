function sequencer() {
    const hihat = new Tone.Player("./samples/clap 002.wav").toMaster();
    const snare = new Tone.Player("./samples/Kick 002 Knock.wav").toMaster();
    let index = 0;

    //const hihatInputs = document.querySelectorAll('.hihat');
    //const snareInputs = document.querySelectorAll('.snare');
    Tone.Transport.scheduleRepeat(repeat, "8n")
    Tone.Transport.start();

    function repeat() {
        let step = index % 8;
        let hihatInputs = document.querySelector(
            `.hihat input:nth-child(${step + 1})`
        );
        let snareInputs = document.querySelector(
            `.snare input:nth-child(${step + 1})`
        );
        if (hihatInputs.checked) {
            hihat.start();
        }
        if (snareInputs.checked) {
            snare.start();
        }
        index++;
    }
}

sequencer();