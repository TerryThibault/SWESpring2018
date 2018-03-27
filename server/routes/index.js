var express = require('express');
var router = express.Router();
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('../db');

//Setup passport Strategy
passport.use(new Strategy(
  function(username, password, cb) {
    db.users.findByUsername(username, function(err, user) {
      console.log("err = ", err);
      console.log("user = ", user);
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
    console.log("finding user in db");
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    console.log("found user, using cb");
    cb(null, user);
  });
});


router.use(passport.initialize());
router.use(passport.session());

router.get('/login',
function(req, res){
  res.render('login');
})

router.get('/register',
function(req, res){
  res.render('register');
})

router.post('/register',
function(req, res){
  if(req.body.username.match("\w*@ufl.edu")){
    db.users.add(req.body.username, req.body.password);
  }
  res.send(303);
})

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/' }), //change this later
  function(req, res) {
    res.render('login')
    console.log("req = ", req.body);
  });

module.exports = router;
