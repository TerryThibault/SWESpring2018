// var db = required('./index.js');

var records = [
    { id: 1, username: 'jack', password: 'secret', displayName: 'Jack', emails: [ { value: 'jack@example.com' } ] }
  , { id: 2, username: 'jill', password: 'birthday', displayName: 'Jill', emails: [ { value: 'jill@example.com' } ] }
];

//needs fixing
// exports.fetchRecords() = function(){
//   process.nextTick(function(){
//     db.query("SELECT * from logins", function(succ, err){
//       if (err){
//         console.log("couldnt fetch", err);
//       }
//       else{
//         records = succ;
//       }
//     });
//   })
// }

exports.findById = function(id, cb) {
  process.nextTick(function() {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.addUser = function(username, password){
  process.nextTick(function(){
    addToDatabase({username: username, password: password});
  })
}

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}
