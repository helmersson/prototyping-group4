var notes = [/* paste the notes here */];

var track1 = [];
var track2 = [];
var track3 = [];
var track4 = [];
var temp = {};

notes.forEach(function(note, index) {

temp = {
    'duration': note.duration,
    'name': note.name,
    'time': note.time,
    'velocity': note.velocity
}

if(notes[index-1] != undefined && note.time == notes[index-1].time) {
    track2.push(temp);
} else if(notes[index-2] != undefined && note.time == notes[index-2].time) {
    track3.push(temp);
} else if(notes[index-3] != undefined && note.time == notes[index-3].time) {
    track4.push(temp);
} else {
    track1.push(temp); 
}
})

console.log(JSON.stringify(track1));