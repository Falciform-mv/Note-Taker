const router = require('express').Router();

// const index = require('../public/assets/js/index.js');
const { db } = require('../db/db.json');


router.get('/api/notes', (req, res) => {
  // res.json(db);
  res.send('hello test');
})


module.exports = router;
