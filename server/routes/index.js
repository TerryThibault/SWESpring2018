var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var router = express.Router();

/* GET home page. */


app.post('/login',
passport.authenticate('local', { failureRedirect: '/login' }),
 function(req, res) {
   res.redirect('/');
 });

passport.use(new Strategy(
  function(username, password, cb) {
    //db doesnt currently exist
    db.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
