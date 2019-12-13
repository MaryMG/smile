const express = require('express');
const router  = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
  res.status(200).json({msg: 'Working'});
})
//router.post('/login', passport.authenticate('local'), login)
//router.get('/profile', getProfile)
//router.get('/logout', logout)

module.exports = router;








