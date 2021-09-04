const router = require('express').Router();

// const index = require('../public/assets/js/index.js');
const { db } = require('../db/db.json');


router.get('/api/notes', (req, res) => {
  // res.json(db);
  res.send('hello test');
})


// function createNewNote(body, notesArray) {
//   const note = body;
//   notesArray.push(note);
//   false.writeFileSync(
//     path.join(__dirname, '../db/db.json'),
//     JSON.stringify({ notesArray }, null, 2)
//   );
//   return note;
// }

router.post('/api/notes', (req, res) => {
  console.log(req.body);
  res.json(req.body);
  // const note = createNewNote(req.body, db);
  // res.json(note);
})


module.exports = router;
