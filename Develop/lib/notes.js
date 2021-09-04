const fs = require('fs');
const path = require('path');
const { notes } = require('../db/db.json');


function createNewNote(body, notesArray) {
  let note = body;
  console.log(note)
  note.id = notes.length
  console.log(note.id)
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  )
  return note;
 }




 module.exports = {
   createNewNote
 }