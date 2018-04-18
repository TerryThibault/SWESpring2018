var db = require('./index.js').connection;
const util = require('util');
const bcrypt = require('bcrypt');
// db.query(`CREATE TABLE test1.accounts(` +
//   `username varchar(255),` +
//   `password varchar(255),` +
//   `online varchar(1) DEFAULT '0'`+
// `);`);
//`date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
createMatches = function(){
  process.nextTick(function(){
    db.query(`SELECT * from queue`, (err, result)=>{
      if(err) throw err;
      else{
        if(result[0] != null && result[1] != null){
          var username1 = result[0].username;
          var username2 = result[1].username;
          console.log("Match found! user1 = ", username1 , " and user2 = ", username2);
          deleteFromQueue(username1, (value, err)=> {});
          deleteFromQueue(username2, (value, err)=> {});
          db.query(`INSERT INTO realMatches (username1, username2) VALUES ('${username1}', '${username2}')`, (err, res)=>{
            if(error) throw err;
            console.log("server didn't crash");
          })
        }
      }
    })
  })
}

setInterval(function(){
  createMatches();
 }, 3000);

matchFound = function(username, cb){
  process.nextTick(function(){
    db.query(`SELECT * FROM realMatches WHERE username1 = '${username}' OR username2 = '${username}' `, (err, result)=>{
      if(err) throw err;
      console.log("No match yet, here is result[0] = " , result[0]);
        console.log("No match yet, here is result = " , result);
        console.log("No match yet");
      if(!result[0]) {
        console.log("No match yet, here is result[0] = " , result[0]);
        console.log("No match yet, here is result = " , result);
        console.log("No match yet");
        return cb(null, null, null);
      }
      if(result[0]){

        console.log("Match found! here is result[0].username1 ", result[0].username1);
        console.log("Match found! here is result[0].username2 ", result[0].username2);
        return cb(result[0].username1, result[0].username2, null);
      }
    })
  })
}

function deleteFromQueue(username, cb){
  process.nextTick(function(){
    db.query(`DELETE FROM queue WHERE username = '${username}'`, (err,result)=>{
      if(err) throw err;
      else {
        return cb(username, null);
      }
    })
  })
}


exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    db.query(`SELECT * FROM accounts WHERE username = '${username}'`, (err, result) =>{
      if(err) throw err;
      if(!result[0]){
        console.log("No username found for ", username);
        return cb(null, null);
      }
      else if(result[0].username == username){
        console.log("Found username for ", username);
        return cb(username, null);
      }
    })
  });
}

exports.loginUser = function(username, password, cb){
  process.nextTick(function() {
    db.query(`SELECT * FROM accounts WHERE username ='${username}' AND password = '${password}'`, (err, result) =>{
        if(err) throw err;
        if(!result[0]){
          console.log("Unsuccesfull login for username: ", username ," and password: ", password);
          return cb(null, null);
        }
        else {
          console.log("Successfull login for username: ", username ," and password: ", password);
          return cb(username, null);
        }
    })
  })
}

exports.queueUser = function(username, cb) {
  process.nextTick(function() {
    //add check for user in system
    db.query(`INSERT INTO queue (username) VALUES ('${username}')`, (err, result) =>{
      if(err) throw err;
      console.log("Inserted with", result.insertId);
      setInterval(function(){
        matchFound(username, (user1, user2, err) =>{
          if(user1 || user2){
              return cb({'sessionID': `${user1}${user2}`}, null);
          }
        })
       }, 3000);
    })
  })
}

exports.getRecents = function(username, cb){
  process.nextTick(function() {
    db.query(`SELECT * FROM realMatches WHERE username = '${username}'`, (result, err)=>{
      if(err){
        return cb(null, null);
      }
      else {
        return cb(result, null)
      }
    }) 
  }) 
}

exports.addUser = function(username, password, cb){
  process.nextTick(function() {
    exports.findByUsername(username, (result, err) => {
      if(result){
        return cb(null, null);
      }
      else {
        db.query(`INSERT INTO accounts (username, password) VALUES ('${username}', '${password}') `, (err, result)=>{
            if(err) throw err;
            console.log("Inserted with ", result.insertId);
            return cb(username, null);
        })
      }
    })
  })
}

//TESTS
// console.log("sucessful findBYUsername test = ");
// exports.findByUsername("jad", (result, err) =>{
//   if(result){
//     console.log("Test Passed!");
//   }
//   else{
//     console.log("Test Failed!");
//   }
// });

// console.log("succesful addUserTest test = ");
// exports.addUser("jad332", "password" , (result, err)=>{
//   if(result){
//     exports.findByUsername("jad332", (res, err) =>{
//       if(res){
//         console.log("Test passed");
//       }
//       else {
//         console.log("Test Failed, user not found in database");
//       }
//       return;
//     })
//   }
//   else{
//   console.log("Test Failed, unsuccesfull add user to database");
// }
// } );
//
//
// console.log("successfull login test = ");
// exports.loginUser("jad332", "password", (result, err) => {
//   if(result){
//     console.log("Test passed!");
//   }
//   else {
//     console.log("Test failed!");
//   }
//   return;
// })

//write test for queue
