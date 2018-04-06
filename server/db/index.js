var db = require('mysql');

var connection = db.createConnection({
  socketPath : '/tmp/mysql.sock',
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test1'
});

connection.connect(function(err){
  if(err){
    console.log("err creating db,", err);
  }
  else{
    console.log("connected to db");
  }
});

exports.connection = connection;
