//the synth liberary from tone
//adding specific notes
var synth = new Tone.PolySynth().toDestination();
var notes = ['C', 'D','E', 'F','G','A','B'];


//to be used later
var html = "";
//loop on the notes
for(var octave = 0; octave <2; octave ++)
{

for(var i = 0; i < notes.length; i++){
//hasSharp
    var hasSharp = true;
    var note = notes[i];
    if (note == 'E' || note == 'B' )
    hasSharp = false;
    //html sting with div inside - white note
    //template strings
    //adding mouseevents to the notes
    html += `<div class='whitenote' onmousedown='noteDown(this, false)' onmouseup='noteUp(this,false)' onmouseleave='noteUp(this,false)' data-note='${note + (octave+5)}'>`;
    //adding black notes
    if (hasSharp) {
      html += `<div class='blacknote' onmousedown='noteDown(this, true)' onmouseup='noteUp(this, true)' onmouseleave='noteUp(this,true)' data-note='${note + '#' + (octave+2)}'>
           
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
    //trigger the note
    synth.triggerAttackRelease(note,"16n");
    //divide the white and balck note so you an press them seperatly
    event.stopPropagation();
}