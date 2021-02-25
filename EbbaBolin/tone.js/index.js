var notes = ['C', 'D','E', 'F','G','A','B'];
var html = "";
for(var i = 0; i < notes.length; i++){
    var note = notes[i];
    html += `<div class = "whitenote"></div>`;
}
document.getElementById("container").innerHTML = html;