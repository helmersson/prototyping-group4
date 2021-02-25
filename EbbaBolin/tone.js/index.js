var synth = new Tone.PolySynth().toMaster();
var notes = ['C', 'D','E', 'F','G','A','B'];
var html = "";
for(var i = 0; i < notes.length; i++){
    var note = notes[i];
    html += `<div class = 'whitenote' onmousedown ='noteDown(this)' 
    data-note='${note + '4'}'>`;
    
    html += `<div class = 'blacknote' onmousedown ='noteDown(this)' 
        data-note='${note + '#4'}'></div>`;
        
    html += '</div';
}

   
document.getElementById("container").innerHTML = html;

function noteDown (elem) {
    var note = elem.dataset.note;
    //alert(note);
    synth.triggerAttackRelease(note,"16n");
}