//the synth liberary from tone
//adding specifif notes

var synth = new Tone.PolySynth().toMaster();
var notes = ['C', 'D','E', 'F','G','A','B'];

//to be used later
var html = "";
//loop on the notes
for(var octave = 0; octave <2; octave ++)
{

for(var i = 0; i < notes.length; i++){

    var hasSharp = true;
    var note = notes[i];
    if (note == 'E' || note == 'B' )
    hasSharp = false;
    //html sting with div inside - white note
    //template strings
    html += `<div class='whitenote' onmousedown='noteDown(this, false)' onmouseup='noteUp(this,false)' onmouseleave='noteUp(this,false)' data-note='${note + (octave+4)}'>`;

    if (hasSharp) {
      html += `<div class='blacknote' onmousedown='noteDown(this, true)' onmouseup='noteUp(this, true)' onmouseleave='noteUp(this,true)' data-note='${note + '#' + (octave+4)}'>
           
      </div>`;
    }

    html += `</div>`; 
   }
}
 //get the container by id created in html  
document.getElementById("container").innerHTML = html;
//when note is up its back to original colors
function noteUp (elem, isSharp){
    elem.style.background = isSharp ? '#777' : 'white';
}
//function that triggers the sound when press the note down
function noteDown (elem,isSharp) {
    var note = elem.dataset.note;
    //alert(note);
    elem.style.background = isSharp ? 'black' : '#ccc';
    synth.triggerAttackRelease(note,"16n");
    event.stopPropagation();
}