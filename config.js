var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'us-cdbr-east-06.cleardb.net',
  user     : 'ba96d6a693dcdc',
  password : 'a4a06c30',		//CHANGE YOUR PASSWORD HERE
  database : 'heroku_2c7099f26b99f36'
});

module.exports = connection;