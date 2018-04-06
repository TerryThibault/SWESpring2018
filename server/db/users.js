var db = require('./index.js').connection;
const util = require('util');
// db.query(`CREATE TABLE test1.accounts(` +
//   `username varchar(255),` +
//   `password varchar(255),` +
//   `online varchar(1) DEFAULT '0'`+
// `);`);

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
    db.query(``)
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
