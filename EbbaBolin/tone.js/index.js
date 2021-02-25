
var synth = new Tone.PolySynth().toMaster();
var notes = ['C', 'D','E', 'F','G','A','B'];

var html = "";

for(var octave = 0; octave <2; octave ++)
{

for(var i = 0; i < notes.length; i++){

    var hasSharp = true;
    var note = notes[i];
    if (note == 'E' || note == 'B' )
    hasSharp = false;
    html += `<div class = 'whitenote' onmousedown ='noteDown(this)'data-note='${note + (octave+4)}'>`;
    
    if (hasSharp) {
    html += `<div class = 'blacknote' onmousedown ='noteDown(this)' data-note='${note + '#' + (octave+4)}'></div>`;
        
    }
    html += `</div>`; 
}
}
   
document.getElementById("container").innerHTML = html;

function noteDown (elem) {
    var note = elem.dataset.note;
    //alert(note);
    synth.triggerAttackRelease(note,"16n");
    event.stopPropagation();
}