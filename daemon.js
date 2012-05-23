
var mysql = require('mysql');

var client = mysql.createClient({
  user: 'admin',
  password: 'password',
});

var query = client.query(
  'SELECT * FROM draw LIMIT (1)'
  function callback(error, results, fields) {
    if(error){
      throw error;
    }
  }

  console.log(results);
  console.log(fields);
  client.end();
);
