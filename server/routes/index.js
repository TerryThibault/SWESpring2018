var express = require('express');
var router = express.Router();

/* GET home page. */

//
// app.post('/login',
// passport.authenticate('local', { failureRedirect: '/login' }),
//  function(req, res) {
//    res.redirect('/');
//  });
//
// passport.use(new Strategy(
//   function(username, password, cb) {
//     //db doesnt currently exist
//     db.users.findByUsername(username, function(err, user) {
//       if (err) { return cb(err); }
//       if (!user) { return cb(null, false); }
//       if (user.password != password) { return cb(null, false); }
//       return cb(null, user);
//     });
//   }));
//


router.get('/account', function(req, res, next) {
  var obj = {username : 'jadz',
            email : 'jzeineddine@ufl.edu' };
  res.render('index', { account_info: obj });

});



router.get('/login', function(req, res, next)){
  function authenticationMiddleware () {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/')
  }
}
}

module.exports = router;
