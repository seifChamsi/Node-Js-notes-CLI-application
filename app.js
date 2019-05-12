console.log("[*]Starting app");
const notes = require('./notes');
const yargs = require('yargs');
const _ = require('lodash');

const argv = yargs
.command('add','Add new note',{
    title: {
        describe : 'title of the note',
        demand : true,
        alias : 't'
    },

    body : {
        describe : 'body of the note',
        demand : true,
        alias : 'b'
    }

})
.command('list','list all the Note items')
.command('remove','remove a note with his title',{
    title: {
        describe : 'title of the note',
        demand : true,
        alias : 't'
    }
})
.command('read','read a note with his title',{
    title: {
        describe : 'title of the note',
        demand : true,
        alias : 't'
    }
})
.help()
.argv;
let command = process.argv[2]
/* console.log('[*]Command: ',command);
console.log('[*]process: ',process.argv);
console.log('yargs : ',argv); */

if (command == "add") {
    let note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('note has been created Successfully');
        notes.displayNote(note);
    }
    else{
        console.log('note title is already taken');
        
    }
}else if (command == "list") {
  let allNotes = notes.getAll();
  allNotes.forEach((note,index) => {
    console.log(index+1);
    notes.displayNote(note);      
  });
  
}else if(command == 'read'){
    notes.readNote(argv.title);
}else if (command == 'remove') {
    notes.removeNote(argv.title);
}else{
    console.log('command not recognized');
}
