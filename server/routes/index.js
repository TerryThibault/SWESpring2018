var express = require('express');
var router = express.Router();
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('../db/users.js');

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

router.post('/login',
function(req, res){
  console.log("request body = ", req.body);
  db.loginUser(req.body.username, req.body.password, (result, err) =>{
    if (result){
      res.send({'status': 200,
                'recents': ["username1", "username2"]
    });
    }
    else {
      res.send({'status': 303});
    }
  });
})

router.post('/register',
function(req, res){
  db.addUser(req.body.username, req.body.password, (result, err) =>{
    if(result){
      res.send({'status': 200});
    }
    else {
      res.send({'status': 303});
    }
  })
})

router.post('/reset',
function(req, res){
  res.send(200);
})

router.post('/queue',
function(req, res){
  db.queueUser(req.body.username, (user, err)=>{
    if(user){
      res.send({
        'sessionID': user.sessionID
      })
    }
  });
})

router.post('/dequeue',
function(req,res){
  db.de
  res.send("you are dequeued");
})

router.get('/recents',
function(req,res){
  db.getRecentsFor(req.body.username, function(succ, err){
    res.send(succ);
  })

})



// router.post('/login',
//   passport.authenticate('local', { failureRedirect: '/' }), //change this later
//   function(req, res) {
//     console.log("req = ", req.body);
//   });

module.exports = router;
