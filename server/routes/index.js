const express = require('express');
const router  = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
  res.status(200).json({msg: 'Working'});
})


module.exports = router;








