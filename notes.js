console.log('starting app');
const fs = require('fs'); 

let displayNote= (note)=>{
    console.log("-------------------------\n");
    console.log(`the title is  ${note.title}\n and the body : ${note.body}`);
}


let fetchNotes = ()=>{
    try 
    {
        //Try if the file exists and parse it   
        var notesString = fs.readFileSync('notes-data.json');
         return JSON.parse(notesString)
       
    } 
    catch (e)
    {
        return [];
    }
}

let saveNotes = (notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes))    

}

let addNote = (title, body)=>{
    //array of note objects
    let notes = fetchNotes();
  
  let note = {
    title: title,
    body : body
  };

  var duplicateNotes = notes.filter(note=>note.title === title);
  
  
  if(duplicateNotes.length ===0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
  
};

let getAll = ()=>{
    return fetchNotes();
};

let readNote = (title)=>{
    let notes = fetchNotes();
    let searchNote = notes.filter(note=>note.title === title);
    if(searchNote.length >0){
        displayNote(searchNote[0])
    }else{
        console.log("note doesn't exist");
    }
}

let removeNote = (title) => {
    //fetch note
    let notes = fetchNotes();
    //filter notes, removing the one with title of argument
    var finalNotes = notes.filter(note=>note.title != title);
    //save new notes 
    saveNotes(finalNotes);
    //check if we removed an item or not 
    if (notes.length == finalNotes.length) {
        console.log(`nothing to remove the title: ${title} doesn't exist `);
        
    } else {
        console.log(`${title}: is removed successfully`);
    }
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    displayNote
}