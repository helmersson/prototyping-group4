function sequencer() {
    //Imports all the drums that I'm using
    const hihat = new Tone.Player("./drums/hihat-808.wav").toDestination();
    const snare = new Tone.Player("./drums/snare-808.wav").toDestination();
    const openhat = new Tone.Player("./drums/openhat-808.wav").toDestination();
    const perc = new Tone.Player("./drums/perc-808.wav").toDestination();

    //sets index to zero to ease the loop later on
    let index = 0;

    //cycles the loop for 8 notes and then repeats it
    Tone.Transport.scheduleRepeat(repeat,"8n")
    //transport must be called before anything happens
    Tone.Transport.start();

    //A loop for the drum machine
    function repeat(){
        let step = index % 8;
        let hihatInputs = document.querySelector(
            `.hihat input:nth-child(${step+1})`
        );
        let snareInputs = document.querySelector(
            `.snare input:nth-child(${step+1})`
        );
        let openhatInputs = document.querySelector(
            `.openhat input:nth-child(${step+1})`
        );
        let percInputs = document.querySelector(
            `.perc input:nth-child(${step+1})`
        );
        if(hihatInputs.checked){
            hihat.start();
        }
        if(snareInputs.checked){
            snare.start();
        }
        if(openhatInputs.checked){
            openhat.start();
        }
        if(percInputs.checked){
            perc.start();
        }
        index++;
    }
}

sequencer();