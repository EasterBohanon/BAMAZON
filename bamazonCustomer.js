var mysql      = require('mysql');
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host     : 'localhost',
  port: 3306,
  user     : 'root',
  password : 'root',
  database : 'bamazon'
});
 
// connection.connect();

connection.connect(function (err) {
    if (err) throw err;
    
    displayErrthing();
});
 
// function letsBegin () {

// }
function displayErrthing () {
    connection.query("SELECT * FROM products", function (error, results) {
  if (error) throw error;
  console.log(results);
});
}


