var mysql = require('mysql');


// var con = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "raspberry",
//   database: "hydroponic"
// });

var con = mysql.createConnection({
  host: "192.168.0.101",
  user: "root",
  password: "",
  database: "hydroponic"
});



con.connect(function(err) {
  if (err) throw err;
  console.log(con.state)
});

module.exports = con;
