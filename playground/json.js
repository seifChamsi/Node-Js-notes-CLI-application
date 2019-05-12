const fs = require('fs');

var originalNote ={
    title : "Harry potter and the chamber of secrets",
    body  : "the boy who lived the house going to hogwarts school of witchcraft and wizardry"    
}
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

let noteString = fs.readFileSync('notes.json');
console.log(noteString);


 let note = JSON.parse(noteString);
 console.log(typeof note);
console.log(note.body)