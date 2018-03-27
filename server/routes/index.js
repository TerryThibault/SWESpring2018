var express = require('express');
var router = express.Router();
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('../db');

//Setup passport Strategy
passport.use(new Strategy(
  function(username, password, cb) {
    db.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));

  passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });

  passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});


router.use(passport.initialize());
router.use(passport.session());

router.get('/login',
function(req,res){
  res.render('login');
})

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/' }),//change this later
  function(req, res) {
    res.send("logged in");
  });

module.exports = router;
