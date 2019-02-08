var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port: 3306,
  user     : 'root',
  password : 'Blaxican01',
  database : 'bamazon'
});
 
// connection.connect();

connection.connect(function (err) {
    if (err) throw err;
});
 

 
function displayErrthing () {
    connection.query("SELECT * FROM products", function (error, results) {
  if (error) throw error;
  console.log(results);
});
}
displayErrthing();

