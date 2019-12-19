const express = require('express');
const router = express.Router();
const passport = require('../config/passport');



const {
  signup,
  login,
  logout,
  //upload,
  //edit,
  getDoctors,
  loggedin
} = require('../controllers/auth.controller')



router.post('/signup', whatever, signup);
router.post('/login', passport.authenticate('local'), login);
router.post('/logout', logout);
router.get('/getDoctors', getDoctors);
//router.post('/edit', edit);
//router.post("/upload", uploadCloud.single("photoURL"), upload);
router.get('/loggedin', isAuth, loggedin)


function isAuth(req, res, next) {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' })
}

function whatever(req, res, next){
  console.log('random middleware')
  next()
}

module.exports = router;


